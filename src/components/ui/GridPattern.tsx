'use client';

import { cn } from '@/lib/utils';

interface GridPatternProps {
  className?: string;
  /** Size of each grid cell in pixels */
  cellSize?: number;
  /** Dot radius in pixels */
  dotRadius?: number;
  /** Dot color */
  dotColor?: string;
}

/**
 * GridPattern — Subtle animated dot grid overlay for depth.
 * Uses SVG pattern for crisp rendering at any scale.
 */
export default function GridPattern({
  className = '',
  cellSize = 40,
  dotRadius = 1,
  dotColor = 'rgba(255,255,255,0.15)',
}: GridPatternProps) {
  const patternId = `grid-pattern-${cellSize}`;

  return (
    <div
      className={cn('absolute inset-0 pointer-events-none', className)}
      aria-hidden="true"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={cellSize}
            height={cellSize}
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx={cellSize / 2}
              cy={cellSize / 2}
              r={dotRadius}
              fill={dotColor}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      {/* Radial fade mask — dots fade out at edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, var(--navy) 80%)',
        }}
      />
    </div>
  );
}
