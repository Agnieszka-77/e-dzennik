import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      thirdary: string;
      background: string;
      text: string;
    };
    font: {
      family: { primary: string; secondary: string; tertiary: string };
      size: {
        sx: string;
        s: string;
        m: string;
        l: string;
        xl: string;
      };
      weight: {
        light: number;
        regular: number;
        semibold: number;
        bold: number;
      };
    };
  }
}

export const theme = {
  color: {
    primary: "#23b2ee",
    secondary: "#23b2ee",
    thirdary: "snow",
    background: "snow",
    text: "black",
  },
  font: {
    family: { primary: `'Roboto', sans-serif`, secondary: `'Roboto', sans-serif`, tertiary: `'Roboto', sans-serif` },
    size: {
      sx: "12px",
      s: "16px",
      m: "24px",
      l: "36px",
      xl: "44px",
    },
    weight: {
      light: 300,
      regular: 400,
      semibold: 500,
      bold: 600,
    },
  },
};
