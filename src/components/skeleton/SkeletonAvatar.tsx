import { SKELETON_AVATAR_CONFIG } from "../../config/constant";
import { TSkeletonAvatar } from "../../config/types";

const SkeletonAvatar = ({
  size = SKELETON_AVATAR_CONFIG.size,
  shape = SKELETON_AVATAR_CONFIG.shape,
}: TSkeletonAvatar) => {
  return (
    <div
      className="skeleton skeleton-avatar"
      style={{
        width: size,
        height: size,
        borderRadius: shape === "circle" ? "50%" : "20px",
      }}
    ></div>
  );
};

export default SkeletonAvatar;
