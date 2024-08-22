export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

export interface Column {
  type: "line" | "avatar" | "box";
  colspan?: number;
  rowspan?: number;
  direction?: FlexDirection;
  justify?: string;
  align?: string;
  padding?: string;
  width?: string;
  height?: string;
  count?: number;
  size?: string;
  shape?: "circle" | "square";
}

interface Row {
  columns: Column[];
  style?: React.CSSProperties;
}

export interface GridSchema {
  rows: Row[];
}

export interface CustomGridProps {
  schema: GridSchema;
}

export type TSkeletonAvatar = {
  size?: string;
  shape?: "circle" | "square";
};

export type TSkeletonBox = { width?: string; height?: string };

export type TSkeletonLine = { width?: string; height?: string; count?: number };

export type TBetterLoading = {
  children: React.ReactNode;
  isLoading: boolean;
  animationSpeed?: number;
  schema: GridSchema;
  gradientAngle?: number;
  gridGap?: number;
};
