import { useMemo } from "react";

interface RandomBackgroundProps {
  gifUrl: string;
  count?: number;
  floating?: boolean;
  minSize?: number; // in vw
  maxSize?: number; // in vw
}

/**
 * Generate a random number (0–100) biased toward the edges (0 or 100),
 * less likely near the center (50).
 */
function biasedPosition(): number {
  const r = Math.random();
  const bias = r ** 2; // stronger bias toward edges
  return Math.random() < 0.5 ? bias * 50 : 100 - bias * 50;
}

export default function RandomBackground({
  gifUrl,
  count = 20,
  floating = true,
  minSize = 10,
  maxSize = 30,
}: RandomBackgroundProps) {
  const images = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: biasedPosition(),
      left: biasedPosition(),
      size: minSize + Math.random() * (maxSize - minSize),
      rotation: Math.random() * 360,
      opacity: 0.3 + Math.random() * 0.5,
      floatDelay: Math.random() * 10,
      driftDuration: 10 + Math.random() * 20, // 10–30s per drift loop
    }));
  }, [count, minSize, maxSize]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {images.map(
        ({ id, top, left, size, rotation, opacity, floatDelay, driftDuration }) => (
          <img
            key={id}
            src={gifUrl}
            alt=""
            className={`absolute select-none ${
              floating ? "animate-drift" : ""
            }`}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}vw`,
              transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
              opacity,
              animationDelay: `${floatDelay}s`,
              animationDuration: `${driftDuration}s`,
            }}
          />
        )
      )}
    </div>
  );
}
