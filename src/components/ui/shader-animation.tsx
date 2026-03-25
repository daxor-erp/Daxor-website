"use client"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

interface ShaderAnimationProps {
  className?: string
  opacity?: number
  /** "rings" = original concentric-ring shader (home page)
   *  "neural" = multi-source wave-interference shader (AI / Product pages) */
  variant?: "rings" | "neural"
}

// HSL → RGB for shader (theme-aware)
function primaryToShaderColor(isDark: boolean): [number, number, number] {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary")
    .trim()

  const parts = raw.split(/\s+/)
  if (parts.length < 3) return [0.1, 0.08, 0.06]

  const h = parseFloat(parts[0]) / 360
  const s = parseFloat(parts[1]) / 100
  const l = isDark ? 0.08 : 0.78

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1/6) return p + (q - p) * 6 * t
    if (t < 1/2) return q
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
    return p
  }

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q
  return [
    hue2rgb(p, q, h + 1/3),
    hue2rgb(p, q, h),
    hue2rgb(p, q, h - 1/3),
  ]
}

// Background div color (slightly different for theme)
function primaryToBgColor(isDark: boolean): string {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary")
    .trim()
  const parts = raw.split(/\s+/)
  if (parts.length < 3) return isDark ? "#0a0908" : "#f5f4f0"

  const h = parseFloat(parts[0])
  const s = Math.round(parseFloat(parts[1]) * 0.75)
  const l = isDark ? 12 : 96
  return `hsl(${h}, ${s}%, ${l}%)`
}

// ── Fragment shaders ──────────────────────────────────────────────────────────

const ringsFragment = `
  precision highp float;
  uniform vec2 resolution;
  uniform float time;
  uniform vec3 baseColor;
  uniform float lineStrength;

  void main(void) {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
    float t = time * 0.05;
    vec3 color = baseColor;

    for(int j = 0; j < 3; j++){
      for(int i = 0; i < 5; i++){
        color[j] += lineStrength * float(i * i) /
          (0.001 + abs(fract(t - 0.01*float(j) + float(i)*0.01)*5.0
          - length(uv) + mod(uv.x + uv.y, 0.2)));
      }
    }
    gl_FragColor = vec4(color[0], color[1], color[2], 1.0);
  }
`

const neuralFragment = `
  precision highp float;
  uniform vec2 resolution;
  uniform float time;
  uniform vec3 baseColor;
  uniform float lineStrength;

  #define PI 3.14159265

  void main(void) {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
    float t = time * 0.006;

    float v = 0.0;

    // Six drifting wave sources — interference creates neural-net ripple
    for (int i = 0; i < 6; i++) {
      float fi = float(i);
      vec2 src = vec2(
        sin(t * (0.61 + fi * 0.13) + fi * 1.31) * 1.3,
        cos(t * (0.47 + fi * 0.19) + fi * 0.93) * 0.85
      );
      float d = length(uv - src);
      v += sin(d * 9.0 - t * 2.8 + fi * 1.1) / (d * 1.4 + 0.45);
    }

    v *= lineStrength * 18.0;
    float brightness = 0.42 + 0.58 * sin(v * PI);

    // Subtle cool tint along vertical axis
    vec3 tint = mix(baseColor, baseColor * vec3(0.6, 1.0, 1.4), clamp(uv.y * 0.4 + 0.4, 0.0, 1.0));
    vec3 color = tint * brightness * 0.55;

    gl_FragColor = vec4(color, 1.0);
  }
`

export function ShaderAnimation({ className = "w-full h-full", opacity = 1, variant = "rings" }: ShaderAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer
    uniforms: Record<string, { value: unknown }>
    animationId: number
  } | null>(null)

  const [isDark, setIsDark] = useState(false)

  // Live theme detection
  useEffect(() => {
    const html = document.documentElement
    const update = () => setIsDark(html.classList.contains("dark"))
    update()
    const obs = new MutationObserver(update)
    obs.observe(html, { attributes: true, attributeFilter: ["class"] })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    const vertexShader = `void main() { gl_Position = vec4(position, 1.0); }`
    const fragmentShader = variant === "neural" ? neuralFragment : ringsFragment

    const camera = new THREE.Camera()
    camera.position.z = 1
    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
      baseColor: { value: new THREE.Vector3(...primaryToShaderColor(isDark)) },
      lineStrength: { value: isDark ? 0.002 : 0.0007 },
    }

    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader })
    scene.add(new THREE.Mesh(geometry, material))

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    const onResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h)
      ;(uniforms.resolution.value as THREE.Vector2).set(renderer.domElement.width, renderer.domElement.height)
    }
    onResize()
    window.addEventListener("resize", onResize)

    let animationId = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      uniforms.time.value = (uniforms.time.value as number) + 0.05
      renderer.render(scene, camera)
      if (sceneRef.current) sceneRef.current.animationId = animationId
    }
    sceneRef.current = { renderer, uniforms, animationId }
    animate()

    // Live update when color preset changes
    const obs = new MutationObserver(() => {
      const [r, g, b] = primaryToShaderColor(isDark)
      ;(uniforms.baseColor.value as THREE.Vector3).set(r, g, b)
      ;(uniforms.lineStrength.value as number) = isDark ? 0.002 : 0.0007
      container.style.background = primaryToBgColor(isDark)
    })
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["style", "class"] })

    return () => {
      obs.disconnect()
      window.removeEventListener("resize", onResize)
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)
        if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
        renderer.dispose()
      }
      geometry.dispose()
      material.dispose()
    }
  }, [isDark, variant])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        background: primaryToBgColor(isDark),
        overflow: "hidden",
        opacity,
      }}
    />
  )
}
