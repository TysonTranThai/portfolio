"use client";

import * as React from "react";

export function AmbientGlow() {
  const [mousePos, setMousePos] = React.useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 overflow-hidden no-print"
      style={{ opacity }}
      aria-hidden="true"
    >
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-transparent blur-[100px] -translate-x-1/2 -translate-y-1/2 will-change-transform dark:from-sky-400/12 dark:via-indigo-400/10"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
      />
    </div>
  );
}
