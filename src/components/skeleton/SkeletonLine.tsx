import { SKELETON_LINE_CONFIG } from "../../config/constant";
import { TSkeletonLine } from "../../config/types";

const SkeletonLine = ({
  width = SKELETON_LINE_CONFIG.width,
  height = SKELETON_LINE_CONFIG.height,
  count = SKELETON_LINE_CONFIG.count,
}: TSkeletonLine) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="skeleton skeleton-line"
          style={{
            width: width,
            height: height,
            marginTop: index > 0 ? SKELETON_LINE_CONFIG.gapTop : "0px",
          }}
        ></div>
      ))}
    </>
  );
};

export default SkeletonLine;
