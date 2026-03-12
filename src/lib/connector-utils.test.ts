import { describe, it, expect } from "vitest";
import {
  calculateConnectorPositions,
  getConnectorLayout,
  type ConnectorPosition,
} from "./connector-utils";

// Helper to create a mock ref with a getBoundingClientRect result
function mockRef(rect: DOMRect | null): React.RefObject<HTMLDivElement | null> {
  if (rect === null) {
    return { current: null };
  }
  return {
    current: {
      getBoundingClientRect: () => rect,
    } as HTMLDivElement,
  };
}

function makeDOMRect(x: number, y: number, width: number, height: number): DOMRect {
  return {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    toJSON: () => ({}),
  };
}

const containerRect = makeDOMRect(100, 50, 800, 400);
const containerRef = mockRef(containerRect);

describe("calculateConnectorPositions", () => {
  it("returns empty array when container ref is null", () => {
    const nullContainer = { current: null };
    const result = calculateConnectorPositions([], nullContainer);
    expect(result).toEqual([]);
  });

  it("returns empty array for a single card", () => {
    const card = mockRef(makeDOMRect(120, 100, 150, 80));
    const result = calculateConnectorPositions([card], containerRef);
    expect(result).toEqual([]);
  });

  it("returns N-1 positions for N cards", () => {
    const cards = [
      mockRef(makeDOMRect(120, 100, 150, 80)),
      mockRef(makeDOMRect(300, 100, 150, 80)),
      mockRef(makeDOMRect(480, 100, 150, 80)),
    ];
    const result = calculateConnectorPositions(cards, containerRef);
    expect(result).toHaveLength(2);
  });

  it("calculates horizontal connector positions relative to container", () => {
    // source: x=120, y=100, w=150, h=80 → right=270, centerY=140
    // target: x=300, y=100, w=150, h=80 → left=300, centerY=140
    // container: x=100, y=50
    const cards = [
      mockRef(makeDOMRect(120, 100, 150, 80)),
      mockRef(makeDOMRect(300, 100, 150, 80)),
    ];
    const result = calculateConnectorPositions(cards, containerRef);
    expect(result).toEqual([
      {
        startX: 270 - 100, // source.right - container.left = 170
        startY: 100 + 40 - 50, // source.top + h/2 - container.top = 90
        endX: 300 - 100, // target.left - container.left = 200
        endY: 100 + 40 - 50, // target.top + h/2 - container.top = 90
      },
    ]);
  });

  it("skips pairs where source ref is null", () => {
    const cards = [
      mockRef(null),
      mockRef(makeDOMRect(300, 100, 150, 80)),
      mockRef(makeDOMRect(480, 100, 150, 80)),
    ];
    const result = calculateConnectorPositions(cards, containerRef);
    // First pair skipped (null source), second pair valid
    expect(result).toHaveLength(1);
  });

  it("skips pairs where target ref is null", () => {
    const cards = [
      mockRef(makeDOMRect(120, 100, 150, 80)),
      mockRef(null),
      mockRef(makeDOMRect(480, 100, 150, 80)),
    ];
    const result = calculateConnectorPositions(cards, containerRef);
    // Both pairs have a null member, so both skipped
    expect(result).toHaveLength(0);
  });
});

describe("getConnectorLayout", () => {
  it("returns empty array when container ref is null", () => {
    const nullContainer = { current: null };
    const result = getConnectorLayout(false, [], nullContainer);
    expect(result).toEqual([]);
  });

  it("calculates horizontal layout (desktop) correctly", () => {
    const cards = [
      mockRef(makeDOMRect(120, 100, 150, 80)),
      mockRef(makeDOMRect(300, 100, 150, 80)),
    ];
    const result = getConnectorLayout(false, cards, containerRef);
    expect(result).toEqual([
      {
        startX: 170, // source.right(270) - container.left(100)
        startY: 90,  // source.top(100) + h/2(40) - container.top(50)
        endX: 200,   // target.left(300) - container.left(100)
        endY: 90,    // target.top(100) + h/2(40) - container.top(50)
      },
    ]);
  });

  it("calculates vertical layout (mobile) correctly", () => {
    // source: x=200, y=100, w=200, h=100 → centerX=300, bottom=200
    // target: x=200, y=250, w=200, h=100 → centerX=300, top=250
    // container: x=100, y=50
    const cards = [
      mockRef(makeDOMRect(200, 100, 200, 100)),
      mockRef(makeDOMRect(200, 250, 200, 100)),
    ];
    const result = getConnectorLayout(true, cards, containerRef);
    expect(result).toEqual([
      {
        startX: 200, // source.left(200) + w/2(100) - container.left(100)
        startY: 150, // source.bottom(200) - container.top(50)
        endX: 200,   // target.left(200) + w/2(100) - container.left(100)
        endY: 200,   // target.top(250) - container.top(50)
      },
    ]);
  });

  it("skips pairs with null refs in mobile layout", () => {
    const cards = [
      mockRef(makeDOMRect(200, 100, 200, 100)),
      mockRef(null),
      mockRef(makeDOMRect(200, 400, 200, 100)),
    ];
    const result = getConnectorLayout(true, cards, containerRef);
    expect(result).toHaveLength(0);
  });

  it("handles empty card array", () => {
    const result = getConnectorLayout(false, [], containerRef);
    expect(result).toEqual([]);
  });
});
