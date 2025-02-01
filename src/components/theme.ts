import { createTheme } from "@mui/material"

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      blue: string
      gradient: string
    }
  }
  interface PaletteOptions {
    custom?: {
      blue?: string
      gradient?: string
    }
  }
}

export const theme = createTheme({
  palette: {
    custom: {
      blue: "#1a73e8",
      gradient: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
  },
})

