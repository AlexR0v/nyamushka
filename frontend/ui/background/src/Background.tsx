import styled                                                from '@emotion/styled'
import { background, border, color, flex, layout, position } from 'styled-system'

export const Background = styled.div(layout, background, color, flex)

export const Corner = styled.div(
  {
    transform: 'rotate(41deg)',
  },
  layout,
  background,
  position,
  border
)
