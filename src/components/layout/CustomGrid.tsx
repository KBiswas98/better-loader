import React from "react";
import SkeletonLine from "../skeleton/SkeletonLine";
import SkeletonAvatar from "../skeleton/SkeletonAvatar";
import SkeletonBox from "../skeleton/SkeletonBox";
import { CustomGridProps } from "../../config/types";

const CustomGrid: React.FC<CustomGridProps> = ({ schema }) => {
  return (
    <div className="grid-container">
      {schema?.rows?.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row" style={row?.style}>
          {row?.columns?.map((col, colIndex) => (
            <div
              key={colIndex}
              style={{
                gridColumn: col?.colspan ? `span ${col.colspan}` : undefined,
                gridRow: col?.rowspan ? `span ${col.rowspan}` : undefined,
                display: "flex",
                flexDirection: col?.direction || "column",
                justifyContent: col.justify || "center",
                alignItems: col.align || "center",
                padding: col.padding || "2px",
              }}
            >
              {col.type === "line" && (
                <SkeletonLine
                  width={col?.width}
                  height={col?.height}
                  count={col?.count}
                />
              )}
              {col.type === "avatar" && (
                <SkeletonAvatar size={col?.size} shape={col?.shape} />
              )}
              {col.type === "box" && (
                <SkeletonBox width={col?.width} height={col?.height} />
              )}
            </div>
          ))}
        </div>
      ))}
      {/* TODO: need to handle invalid schema configuration properly */}
      {!schema?.rows?.length && (
        <p style={{ textAlign: "center" }}> Invalid Schema Configuration </p>
      )}
    </div>
  );
};

export default CustomGrid;
