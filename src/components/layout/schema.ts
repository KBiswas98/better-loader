import { GridSchema } from "../../config/types";

export const gridSchema: GridSchema = {
  rows: [
    {
      columns: [
        { type: "avatar", colspan: 1, width: "100px", height: "100px" },
        {
          type: "line",
          colspan: 2,
          direction: "column",
          justify: "center",
          align: "center",
          padding: "0px 10px",
          height: "100%",
          width: "100%",
          count: 2,
        },
      ],
    },
    {
      columns: [
        {
          type: "line",
          colspan: 3,
          direction: "column",
          justify: "center",
          align: "center",
          padding: "4px 10px",
          width: "100%",
          count: 5,
        },
      ],
    },
    {
      columns: [
        { type: "avatar", shape: "circle", colspan: 1 },
        { type: "box", colspan: 2 },
      ],
    },
    {
      columns: [
        { type: "line", height: "100%", colspan: 2, count: 3 },
        { type: "avatar", shape: "square", size: "100px", colspan: 1 },
      ],
    },
    {
      columns: [
        {
          type: "line",
          colspan: 3,
          direction: "column",
          justify: "center",
          align: "center",
          width: "100%",
          count: 4,
        },
      ],
    },
    {
      columns: [
        { type: "box", colspan: 1 },
        {
          type: "line",
          colspan: 2,
          direction: "column",
          justify: "center",
          align: "center",
          width: "100%",
          count: 4,
        },
      ],
    },
  ],
};
