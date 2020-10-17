import React                                   from 'react'
import { injectIntl }                          from 'react-intl'

import { ChickenCard, FishCard, FoieGrasCard } from '@components/cards'
import { Background }                          from '@ui/background'
import { Column, Layout, Row }                 from '@ui/layout'
import { Text }                                from '@ui/text'

import messages                                from './messages'

const IndexPage = ({ intl }) => {
  return (
    <Background
      as='section'
      backgroundImage={'url("/static/img/Pattern.jpg")'}
      display='flex'
      alignItems='center'
      justifyContent='center'
      height={['100%', '100%', '100vh']}
    >
      <Column
        style={{ textAlign: 'center' }}
        alignItems='center'
        justifyContent='center'
        height='100%'
      >
        <Layout flexBasis={46} />
        <Text as='h1' color='white' fontFamily='title' fontWeight='normal' fontSize='semiLarge'>
          {intl.formatMessage(messages.title)}
        </Text>
        <Layout flexBasis={25} />
        <Row justifyContent='center' flexWrap='wrap'>
          <Column position='relative' width='auto'>
            <FoieGrasCard />
          </Column>
          <Layout flexBasis={80} />
          <Column position='relative' width='auto'>
            <FishCard />
          </Column>
          <Layout flexBasis={80} />
          <Column position='relative' width='auto'>
            <ChickenCard />
          </Column>
        </Row>
        <Layout flexBasis={25} />
      </Column>
    </Background>
  )
}
export default injectIntl(IndexPage)
