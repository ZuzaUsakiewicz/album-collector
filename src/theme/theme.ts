import { colors } from "./colors";
import { typography } from "./typography";

export const theme = {
  colors,
  typography,
};

export type MyTheme = {
  theme: typeof theme;
};
