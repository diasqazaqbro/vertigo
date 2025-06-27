export enum BreakpointsEnum {
  ulg = 1600,
  lg = 1440,
  lgm = 1200,
  md = 1024,
  sm = 768,
  s = 576,
  xs = 380,
  xxs = 342,
}

export type BreakpointsType = keyof typeof BreakpointsEnum;
