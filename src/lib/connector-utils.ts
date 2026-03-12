import type React from "react";

export interface ConnectorPosition {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

/**
 * Calculate horizontal connector positions between adjacent cards.
 * Connectors go from the right edge of the source card to the left edge
 * of the target card, vertically centered on each card.
 * All coordinates are relative to the container element.
 */
export function calculateConnectorPositions(
  cardRefs: React.RefObject<HTMLDivElement | null>[],
  containerRef: React.RefObject<HTMLDivElement | null>
): ConnectorPosition[] {
  if (!containerRef.current) return [];

  const containerRect = containerRef.current.getBoundingClientRect();
  const positions: ConnectorPosition[] = [];

  for (let i = 0; i < cardRefs.length - 1; i++) {
    const sourceCurrent = cardRefs[i].current;
    const targetCurrent = cardRefs[i + 1].current;

    if (!sourceCurrent || !targetCurrent) continue;

    const sourceRect = sourceCurrent.getBoundingClientRect();
    const targetRect = targetCurrent.getBoundingClientRect();

    positions.push({
      startX: sourceRect.right - containerRect.left,
      startY: sourceRect.top + sourceRect.height / 2 - containerRect.top,
      endX: targetRect.left - containerRect.left,
      endY: targetRect.top + targetRect.height / 2 - containerRect.top,
    });
  }

  return positions;
}

/**
 * Calculate connector positions based on layout mode.
 * - Desktop (horizontal): right edge of source → left edge of target, vertically centered
 * - Mobile (vertical): bottom edge of source → top edge of target, horizontally centered
 * Skips pairs where either card ref is null.
 * All coordinates are relative to the container element.
 */
export function getConnectorLayout(
  isMobile: boolean,
  cardRefs: React.RefObject<HTMLDivElement | null>[],
  containerRef: React.RefObject<HTMLDivElement | null>
): ConnectorPosition[] {
  if (!containerRef.current) return [];

  const containerRect = containerRef.current.getBoundingClientRect();
  const positions: ConnectorPosition[] = [];

  for (let i = 0; i < cardRefs.length - 1; i++) {
    const sourceCurrent = cardRefs[i].current;
    const targetCurrent = cardRefs[i + 1].current;

    if (!sourceCurrent || !targetCurrent) continue;

    const source = sourceCurrent.getBoundingClientRect();
    const target = targetCurrent.getBoundingClientRect();

    if (isMobile) {
      positions.push({
        startX: source.left + source.width / 2 - containerRect.left,
        startY: source.bottom - containerRect.top,
        endX: target.left + target.width / 2 - containerRect.left,
        endY: target.top - containerRect.top,
      });
    } else {
      positions.push({
        startX: source.right - containerRect.left,
        startY: source.top + source.height / 2 - containerRect.top,
        endX: target.left - containerRect.left,
        endY: target.top + target.height / 2 - containerRect.top,
      });
    }
  }

  return positions;
}
