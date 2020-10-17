interface Color {
  default: string
  white: string
  black: string
  selected: string
  gray: string
  darkGray: string
  disabled: string
  backgroundShadow: string
}

export const colors: Color = {
  default: '#1698D9',
  white: '#fff',
  black: '#000000',
  selected: '#D91667',
  gray: '#B3B3B3',
  darkGray: '#666666',
  disabled: '#FFFF66',
  backgroundShadow:
    'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 5e-05) 49.88%, rgba(0, 0, 0, 0.5) 100%)',
}
