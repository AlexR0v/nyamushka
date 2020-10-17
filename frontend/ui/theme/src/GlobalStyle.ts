/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-empty */
import { injectGlobal } from 'emotion'

import { fontFaces }    from './theme'

const fontFace = (family, type, weight, style = 'normal') => ({
  '@font-face': {
    fontFamily: family,
    fontWeight: weight,
    fontStyle: style,
    src: `local('${family}-${type}'),
          url('/static/fonts/${family}-${type}.ttf') format('ttf')`,
  },
})

fontFaces.map(({ family, type, weight }) => {
  return injectGlobal(fontFace(family, type, weight))
})

export const globalStyle = injectGlobal(`
  body, h1, h2, h3, p{margin: 0};
  `)
