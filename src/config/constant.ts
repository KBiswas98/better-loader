export const SKELETON_AVATAR_CONFIG = {
  size: "100px",
  shape: "circle" as "circle" | "square",
};

export const SKELETON_BOX_CONFIG = {
  width: "100%",
  height: "100%",
};

export const SKELETON_LINE_CONFIG = {
  width: "100%",
  height: "20px",
  count: 2,
  gapTop: "5px",
};

export const SKELETON_CONFIG = {
  speed: {
    max: 5,
    min: 0,
    default: 2,
  },
  angle: {
    max: 125,
    min: 45,
    default: 66,
  },
  gridGap: {
    max: 30,
    min: 0,
    default: 5,
  },
};
