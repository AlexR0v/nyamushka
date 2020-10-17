import React, { useState }          from 'react'
import { useIntl }                  from 'react-intl'

import { Background, Corner }       from '@ui/background'
import { Box, Column, Layout, Row } from '@ui/layout'
import { Text }                     from '@ui/text'

import messages                     from './messages'

export const FishCard = () => {
  const [activeCard, setActiveCard] = useState(false)
  const [isMouseLeave, setIsMouseLeave] = useState(false)
  const [isMouseOver, setIsMouseOver] = useState(false)
  const [disabled, setIsDisabled] = useState(false)
  const intl = useIntl()
  return (
    <>
      {disabled ? (
        <>
          <Box
            bg='gray'
            opacity={0.7}
            position='absolute'
            top={0}
            left={0}
            width={320}
            height={480}
            borderRadius='regular'
            zIndex={3}
          />
          <Corner
            width={51}
            height={58}
            backgroundImage={'url("/static/img/Pattern.jpg")'}
            borderRight='disabled'
            top='-23px'
            left='-26px'
            zIndex={4}
            position='absolute'
          />
        </>
      ) : null}
      <Box
        width={320}
        height={480}
        border={activeCard ? 'selected' : disabled ? 'disabled' : 'default'}
        bg='white'
        borderRadius='regular'
        position='relative'
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setActiveCard(!activeCard)
          setIsMouseLeave(false)
          setIsMouseOver(false)
        }}
        onMouseLeave={() => {
          if (activeCard) {
            setIsMouseLeave(true)
            setIsMouseOver(false)
          }
        }}
        onMouseOver={() => {
          if (activeCard && isMouseLeave) {
            setIsMouseOver(true)
          }
        }}
      >
        <Corner
          width={51}
          height={58}
          backgroundImage={'url("/static/img/Pattern.jpg")'}
          borderRight={activeCard ? 'selected' : disabled ? 'disabled' : 'default'}
          top='-26px'
          left='-30px'
          position='absolute'
        />
        <Column>
          <Row>
            <Layout flexBasis={51} />
            <Column alignItems='flex-start'>
              <Layout flexBasis={21} />
              <Text color='darkGray' fontFamily='text' fontWeight='normal' fontSize='semiMedium'>
                {isMouseLeave && isMouseOver && activeCard
                  ? intl.formatMessage(messages.rejection)
                  : intl.formatMessage(messages.cardTopTitle)}
              </Text>
              <Layout flexBasis={3} />
              <Text as='h2' color='black' fontFamily='text' fontWeight='bold' fontSize='extra'>
                {intl.formatMessage(messages.cardTitle)}
              </Text>
              <Layout flexBasis={5} />
              <Text as='h3' color='black' fontFamily='text' fontWeight='bold' fontSize='average'>
                {intl.formatMessage(messages.tasteFish)}
              </Text>
              <Layout flexBasis={15} />
              <Box width={108}>
                <Text color='darkGray' fontFamily='text' fontWeight='bold' fontSize='small'>
                  {intl.formatMessage(messages.portionNumberFish)}
                </Text>
                <Text
                  color='darkGray'
                  fontFamily='text'
                  fontWeight='normal'
                  fontSize='small'
                  pl={1}
                >
                  {intl.formatMessage(messages.portion)}
                </Text>
              </Box>
              <Box width={130}>
                <Text color='darkGray' fontFamily='text' fontWeight='bold' fontSize='small'>
                  {intl.formatMessage(messages.mouseNumberFish)}
                </Text>
                <Text
                  color='darkGray'
                  fontFamily='text'
                  fontWeight='normal'
                  fontSize='small'
                  pl={1}
                >
                  {intl.formatMessage(messages.mouseFish)}
                </Text>
              </Box>
            </Column>
          </Row>
          <Layout flexBasis={36} />
          <Background width={255} height={260} backgroundImage={'url("/static/img/Photo.jpg")'} />
          <Box
            width={80}
            height={80}
            bg={activeCard ? 'selected' : disabled ? 'gray' : 'default'}
            top='80%'
            borderRadius='50%'
            left='70%'
            position='absolute'
          >
            <Column justifyContent='center' alignItems='center'>
              <Text color='white' fontFamily='text' fontWeight='normal' fontSize='large'>
                {intl.formatMessage(messages.cardWeight)}
              </Text>
              <Text color='white' fontFamily='text' fontWeight='normal' fontSize='medium'>
                {intl.formatMessage(messages.cardWeightDescription)}
              </Text>
            </Column>
          </Box>
        </Column>
      </Box>
      <Layout flexBasis={20} />
      <Row justifyContent='center'>
        <Text
          color={disabled ? 'disabled' : 'white'}
          fontFamily='text'
          fontWeight='normal'
          fontSize='semiSmall'
        >
          {activeCard
            ? intl.formatMessage(messages.cardSelectedFoieGras)
            : disabled
            ? intl.formatMessage(messages.cardDisabledFish)
            : intl.formatMessage(messages.cardQuestion)}
        </Text>
        {activeCard ? null : disabled ? null : (
          <Text
            color='default'
            fontFamily='text'
            fontWeight='normal'
            fontSize='semiSmall'
            pl={1}
            borderBottom='dashedDefault'
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveCard(!activeCard)}
          >
            {intl.formatMessage(messages.cardBuy)}
          </Text>
        )}
      </Row>
      <Layout flexBasis={40} />
    </>
  )
}
