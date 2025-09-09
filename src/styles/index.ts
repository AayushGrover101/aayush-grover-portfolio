import type { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: Record<string, never>;
      primary: {
        blue: string;
        lightBlue: string;
        lightGray: string;
        gray: string;
        mediumGray: string;
        red: string;
      };
      secondary: Record<string, never>;
      shadow: Record<string, never>;
      state: {
        error: string;
        success: string;
        infomative: string;
        warning: string;
      };
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    text: {},
    primary: {
      blue: "#0088FF",
      lightBlue: "#0088FF",
      lightGray: "#F5F5F5",
      gray: "#7A7A7A",
      mediumGray: "#E8E8E8",
      red: "#FF4242",
    },
    secondary: {},
    shadow: {},
    state: {
      error: "",
      success: "",
      infomative: "",
      warning: "",
    },
  },
};