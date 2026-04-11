"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  const shapes = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    shape: i % 3 === 0 ? "circle" : i % 3 === 1 ? "square" : "triangle",
    color: ["bg-blue-400", "bg-yellow-400", "bg-green-400", "bg-red-400", "bg-pink-400", "bg-orange-400"][
      Math.floor(Math.random() * 6)
    ],
    size: Math.floor(Math.random() * 40) + 20,
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
    duration: Math.floor(Math.random() * 20) + 10,
    delay: Math.floor(Math.random() * 5),
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute opacity-70 ${shape.color} ${
            shape.shape === "circle" ? "rounded-full" : shape.shape === "square" ? "rounded-lg" : ""
          }`}
          style={{
            width: shape.shape === "triangle" ? 0 : shape.size,
            height: shape.shape === "triangle" ? 0 : shape.size,
            borderLeft: shape.shape === "triangle" ? `${shape.size / 2}px solid transparent` : undefined,
            borderRight: shape.shape === "triangle" ? `${shape.size / 2}px solid transparent` : undefined,
            borderBottom: shape.shape === "triangle" ? `${shape.size}px solid var(--color-${shape.color.replace('bg-', '')})` : undefined,
            backgroundColor: shape.shape === "triangle" ? "transparent" : undefined,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: ["0%", "100%", "0%"],
            x: ["0%", "50%", "0%"],
            rotate: [0, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            delay: shape.delay,
          }}
        />
      ))}
      
      {/* Decorative Text Marks */}
      <div className="absolute top-10 right-10 text-blue-600 font-bold text-xl uppercase transform rotate-12 opacity-80">
        CONNECT
      </div>
      <div className="absolute bottom-20 left-10 text-orange-500 font-bold text-xl uppercase transform -rotate-12 opacity-80">
        GROW
      </div>
    </div>
  );
}
