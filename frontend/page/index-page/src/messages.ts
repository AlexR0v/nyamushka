import { defineMessages } from 'react-intl'

import { name as scope }  from '../package.json'

export default defineMessages({
  titlePage: {
    id: `${scope}.titlePage`,
    defaultMessage: 'Нямушка',
  },

  descriptionPage: {
    id: `${scope}.descriptionPage`,
    defaultMessage: 'Нямушка - корм для котов',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Ты сегодня покормил кота?',
  },
})
