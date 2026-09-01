import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: boolean;
}

export function Card({
  className,
  hoverEffect = true,
  glow = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-surface-50 dark:bg-surface-100 border border-slate-200/80 dark:border-surface-300/40 p-6 shadow-sm overflow-hidden",
        hoverEffect && "card-hover",
        glow && "before:absolute before:inset-0 before:bg-gradient-to-br before:from-sky-500/5 before:to-transparent before:pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
