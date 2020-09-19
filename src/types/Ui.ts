export type BoxArea = {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export interface Bar {
  bar: number;
  quarterInProject: number; // This number represents the overall quarter position of the ruler item. This is used to infer the users click.
  lengthInQuarters: number; // This specifies how many quarters grouped together inside the item.
  timeSignature: [number, number];
  displayOnRulerBar: boolean;
}