export const LIGHT_FONT_FAMILY = 'avenir-light'
export const MEDIUM_FONT_FAMILY = 'avenir-medium'
export const BOLD_FONT_FAMILY = 'avenir-heavy'

import * as colors from './colors'

const BASE_SIZE = 14

export const PARAGRAPH = {
  fontFamily: MEDIUM_FONT_FAMILY,
  fontSize: BASE_SIZE
}
export const LABEL = {
  fontFamily: LIGHT_FONT_FAMILY,
  fontSize: BASE_SIZE
}
export const HEADING_HERO = {
  fontFamily: LIGHT_FONT_FAMILY,
  fontSize: BASE_SIZE + 26,
  color: colors.HEADING_DARK_COLOR
}
export const HEADING_HERO_SUBDUED = {
  fontFamily: LIGHT_FONT_FAMILY,
  fontSize: BASE_SIZE + 26,
  color: colors.HEADING_LIGHT_COLOR
}
export const HEADING1 = {
  fontFamily: BOLD_FONT_FAMILY,
  fontSize: BASE_SIZE + 10,
  color: colors.HEADING_DARK_COLOR
}
export const HEADING1_SUBDUED = {
  fontFamily: BOLD_FONT_FAMILY,
  fontSize: BASE_SIZE + 10,
  color: colors.HEADING_LIGHT_COLOR
}
export const HEADING2 = {
  fontFamily: MEDIUM_FONT_FAMILY,
  fontSize: BASE_SIZE + 6,
  color: colors.HEADING_DARK_COLOR
}
export const HEADING2_SUBDUED = {
  fontFamily: MEDIUM_FONT_FAMILY,
  fontSize: BASE_SIZE + 6,
  color: colors.HEADING_LIGHT_COLOR
}
export const HEADING3 = {
  fontFamily: BOLD_FONT_FAMILY,
  fontSize: BASE_SIZE + 2,
  color: colors.HEADING_DARK_COLOR
}
export const HEADING3_SUBDUED = {
  fontFamily: BOLD_FONT_FAMILY,
  fontSize: BASE_SIZE + 2,
  color: colors.HEADING_LIGHT_COLOR
}
