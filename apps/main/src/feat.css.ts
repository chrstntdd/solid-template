import { globalStyle, style } from "@vanilla-extract/css"

import { mq } from "~/styles/mq"
import { vars } from "~/styles/vars.css"

export const pokeTitle = style({
  fontSize: vars.fontSize["3x"],
  gridArea: "name",
  margin: 0,
  "@media": {
    [mq.md]: {
      alignSelf: "end",
      justifySelf: "end"
    }
  }
})

export const pokeCard = style({
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  paddingInline: vars.space["4x"],
  paddingBlockStart: vars.space["6x"],
  color: vars.color["forest-green"],
  "@media": {
    [mq.md]: {
      display: "grid",
      gridTemplateAreas: `'name img'
      'id img'
      'types img'`
    }
  }
})

export const pokeId = style({
  gridArea: "id",
  fontSize: vars.fontSize["2x"],
  fontFamily: vars.fontFamily.serif,
  justifySelf: "end"
})
export const pokeTypes = style({
  gridArea: "types",
  justifySelf: "end",
  fontWeight: vars.fontWeight["2x"]
})

globalStyle(`${pokeTypes} ul`, {
  paddingLeft: 0,
  listStyle: "none",
  display: "flex",
  gap: vars.space["2x"]
})

globalStyle(`${pokeTypes} ul > li`, {
  padding: vars.space["2x"],
  borderRadius: vars.borderRadius["2x"]
})

export const pokeImg = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media": {
    [mq.md]: {
      justifySelf: "center",
      gridArea: "img"
    }
  }
})

globalStyle(`${pokeImg} img`, {
  aspectRatio: "1/1"
})

export const toggle = style({
  backgroundColor: vars.color["forest-green"],
  color: vars.color["black-green"],
  padding: vars.space["2x"],
  borderRadius: vars.borderRadius["2x"],
  border: "none",
  width: "100%"
})
