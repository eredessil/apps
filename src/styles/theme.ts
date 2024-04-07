const theme = {
  colors: {
    blue: {
      DEFAULT: "#3B82F6",
      s50: "#EBF2FE",
      s100: "#D7E6FD",
      s200: "#B0CDFB",
      s300: "#89B4FA",
      s400: "#629BF8",
      s500: "#3B82F6",
      s600: "#0B61EE",
      s700: "#084BB8",
      s800: "#063583",
      s900: "#041F4D",
      s950: "#021532"
    },
    purple: {
      DEFAULT: "#EF9CF6",
      s50: "#FFFFFF",
      s100: "#FFFFFF",
      s200: "#FFFFFF",
      s300: "#FBE8FD",
      s400: "#F5C2FA",
      s500: "#EF9CF6",
      s600: "#E769F2",
      s700: "#DE35ED",
      s800: "#C713D8",
      s900: "#980EA4",
      s950: "#800C8A"
    },
    magenta: {
      DEFAULT: "#F788B6",
      s50: "#FFFFFF",
      s100: "#FFFFFF",
      s200: "#FFFAFC",
      s300: "#FCD4E5",
      s400: "#F9AECD",
      s500: "#F788B6",
      s600: "#F35396",
      s700: "#EF1F76",
      s800: "#C80E5C",
      s900: "#940A44",
      s950: "#7A0838"
    },
    green: {
      DEFAULT: "#11EE2A",
      s50: "#BCFAC3",
      s100: "#A9F9B2",
      s200: "#83F690",
      s300: "#5DF46E",
      s400: "#37F14C",
      s500: "#11EE2A",
      s600: "#0DBA21",
      s700: "#098618",
      s800: "#06510E",
      s900: "#021D05",
      s950: "#000200"
    },
    gray: {
      DEFAULT: "#6B7280",
      s50: "#CDD0D5",
      s100: "#C2C5CC",
      s200: "#ACB0BA",
      s300: "#969BA7",
      s400: "#7F8694",
      s500: "#6B7280",
      s600: "#515761",
      s700: "#383C43",
      s800: "#1E2024",
      s900: "#050506",
      s950: "#000000"
    },
    white: {
      default: "#FFFFFF"
    }
  },
  spacing: {
    xxxs: "0.25rem",
    xxs: "0.5rem",
    xs: "0.75rem",
    s: "1rem",
    m: "1.5rem",
    l: "2rem",
    xl: "2.5rem",
    xxl: "3rem",
    xxxl: "3.5rem"
  }
}

type ThemeType = typeof theme;
type SpacingKeys = keyof typeof theme.spacing

export type { ThemeType, SpacingKeys };
export default theme;