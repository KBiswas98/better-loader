import React from "react";
import "./style.css";

type TBetterLoading = {
  children: React.ReactNode;
  isLoading: boolean;
  animationSpeed?: number; // New prop to control animation speed
};

export default function BetterLoader({
  children,
  isLoading,
  animationSpeed = 1.5,
}: TBetterLoading) {
  if (isLoading) {
    return (
      <div
        className="skeleton-container"
        style={
          { "--animation-speed": `${animationSpeed}s` } as React.CSSProperties
        }
      >
        <div className="skeleton skeleton-image"></div>
        <div className="skeleton skeleton-line"></div>
        <div className="skeleton skeleton-line"></div>
        <div className="skeleton skeleton-line short"></div>
      </div>
    );
  }

  return <div>{children}</div>;
}
