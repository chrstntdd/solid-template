import { createGlobalTheme } from "@vanilla-extract/css"
import { modularScale, rem } from "polished"

const createScale = (ratio: number, base: number) => (steps: number) =>
  `${rem(modularScale(steps, base, ratio) + "px")}`

const spaceScale = createScale(1.4, 4)
const fontSizeScale = createScale(1.3, 16)
const borderRadiusScale = createScale(1.5, 4)

export const vars = createGlobalTheme(":root", {
  space: {
    none: "0",
    "0x": spaceScale(0),
    "1x": spaceScale(1),
    "2x": spaceScale(2),
    "3x": spaceScale(3),
    "4x": spaceScale(4),
    "5x": spaceScale(5),
    "6x": spaceScale(6),
    "7x": spaceScale(7),
    "8x": spaceScale(8)
  },
  fontWeight: {
    "0x": "100",
    "1x": "400",
    "2x": "800"
  },
  color: {
    "forest-green": "#84b7a5",
    "black-green": "#02321b"
  },
  borderRadius: {
    "2x": borderRadiusScale(2),
    "3x": borderRadiusScale(3),
    full: "99999px"
  },
  fontFamily: {
    body: 'manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    serif: "DMSerif"
  },
  fontSize: {
    "0x": fontSizeScale(0),
    "1x": fontSizeScale(1),
    "2x": fontSizeScale(2),
    "3x": fontSizeScale(3)
  }
})
