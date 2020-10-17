import NextApp           from 'next/app'
import React             from 'react'
import { ThemeProvider } from 'emotion-theming'
import { IntlProvider }  from 'react-intl'

import { theme }         from '@ui/theme'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <IntlProvider locale='en'>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </IntlProvider>
      </>
    )
  }
}
