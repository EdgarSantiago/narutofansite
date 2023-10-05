import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

type visuals = {
  bg?: string;
  color?: string;
};

const styles = {
  global: (props: visuals) => ({
    body: {
      bg: mode("#f5efef", "#111111")(props),
    },
  }),
};

const components = {
  Text: {
    sizes: {
      sm: {
        fontSize: "sm", // Font size for the "sm" size variant
      },
      md: {
        fontSize: "md", // Font size for the "md" size variant
      },
      lg: {
        fontSize: "lg", // Font size for the "lg" size variant
      },
    },
  },
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: visuals) => ({
      color: mode("#111111", "#fafafa")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: `'Pacifico', cursive`,
  body: `'Pacifico', cursive`,
};

const colors = {
  grassTeal: "#88ccca",
  blue500: "#2B6CB0",
  isnBlue: "#2D4ABF",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const borderRadius = {
  radii: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
};

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
  ...borderRadius,
});
export default theme;
