export type DeviceType =
  | "large"
  | "medium"
  | "tablet"
  | "mediumTablet"
  | "smallTablet"
  | "largeMobile"
  | "mobile"
  | "smallMobile";

export const deviceBreakpoints: Record<DeviceType, number> = {
  large: 1440,
  medium: 1024,
  tablet: 834,
  mediumTablet: 620,
  smallTablet: 530,
  largeMobile: 425,
  mobile: 375,
  smallMobile: 320,
};
