import React from "react";
import CustomGrid from "../layout/CustomGrid";
import { TBetterLoading } from "../../config/types";

export default function BetterLoader({
  children,
  isLoading,
  animationSpeed,
  gradientAngle,
  gridGap,
  schema,
}: TBetterLoading) {
  if (isLoading) {
    return (
      <div
        style={
          {
            "--animation-speed": `${animationSpeed}s`,
            "--gradient-angle": `${gradientAngle}deg`,
            "--grid-gap": `${gridGap}px`,
          } as React.CSSProperties
        }
      >
        <CustomGrid schema={schema} />
      </div>
    );
  }

  return <div>{children}</div>;
}
