interface Border {
  default: string
  selected: string
  disabled: string
  dashedDefault: string
  hover: string
}

export const borders: Border = {
  default: '4px solid #2EA8E6',
  selected: '4px solid #D91667',
  disabled: '4px solid #B3B3B3',
  dashedDefault: '1px dashed #2EA8E6',
  hover: '1px dashed transparent',
}
