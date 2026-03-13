"use client"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

interface ShaderAnimationProps {
  className?: string
  opacity?: number
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
  const l = isDark ? 0.08 : 0.78   // ← THIS fixes the white issue!

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

export function ShaderAnimation({ className = "w-full h-full", opacity = 1 }: ShaderAnimationProps) {
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

    const fragmentShader = `
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

    const camera = new THREE.Camera()
    camera.position.z = 1
    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
      baseColor: { value: new THREE.Vector3(...primaryToShaderColor(isDark)) },
      lineStrength: { value: isDark ? 0.002 : 0.0007 },   // ← tuned per theme
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
  }, [isDark])

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