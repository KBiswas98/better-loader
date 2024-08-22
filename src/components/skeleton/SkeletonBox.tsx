import { SKELETON_BOX_CONFIG } from "../../config/constant";
import { TSkeletonBox } from "../../config/types";

const SkeletonBox = ({
  width = SKELETON_BOX_CONFIG?.width,
  height = SKELETON_BOX_CONFIG.height,
}: TSkeletonBox) => {
  return (
    <div className="skeleton skeleton-box" style={{ width, height }}></div>
  );
};

export default SkeletonBox;
