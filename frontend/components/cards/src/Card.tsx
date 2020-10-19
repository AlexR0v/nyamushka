import React, { useEffect, useState } from 'react'
import { useIntl }                    from 'react-intl'

import { Background, Corner }         from '@ui/background'
import { Box, Column, Layout, Row }   from '@ui/layout'
import { Text }                       from '@ui/text'

import { cardItems }                  from './cadrItems'

export const Card = () => {
  const intl = useIntl()

  const [isMouseLeave, setIsMouseLeave] = useState(false)
  const [isMouseOver, setIsMouseOver] = useState(false)

  const [selectedCards, setSelectedCards] = useState([])
  const [cards, setCards] = useState(cardItems)

  const handleAddCard = cardID => {
    setSelectedCards([...selectedCards, cardID])
  }
  const handleRemoveCard = cardID => {
    const newCard = selectedCards.filter(id => id !== cardID)
    setSelectedCards(newCard)
  }
  useEffect(() => {
    console.log(`Ваши покупки: ${selectedCards}`)
  }, [selectedCards])

  const mouseHoverByu = event=>{
    event.target.style.borderBottom = 'none'
  }

  const mouseLeaveByu = event=>{
    event.target.style.borderBottom = '1px dashed #2EA8E6'
  }

  return (
    <>
      {cards.map(card => {
        const { id, isDisabled } = card
        let isSelected = false
        selectedCards.forEach(cardID => {
          if (cardID === id) {
            isSelected = true
          }
        })
        return (
          <Column key={id} position='relative' width='auto'>
            {isDisabled ? (
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
              border={isSelected ? 'selected' : isDisabled ? 'disabled' : 'default'}
              bg='white'
              borderRadius='regular'
              position='relative'
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (!isSelected) {
                  handleAddCard(id)
                }
                if (isSelected) {
                  handleRemoveCard(id)
                }
                setIsMouseLeave(false)
                setIsMouseOver(false)
              }}
              onMouseLeave={() => {
                if (isSelected) {
                  setIsMouseLeave(true)
                  setIsMouseOver(false)
                }
              }}
              onMouseOver={() => {
                if (isSelected) {
                  setIsMouseOver(true)
                }
              }}
            >
              <Corner
                width={51}
                height={58}
                backgroundImage={'url("/static/img/Pattern.jpg")'}
                borderRight={isSelected ? 'selected' : isDisabled ? 'disabled' : 'default'}
                top='-26px'
                left='-30px'
                position='absolute'
              />
              <Column>
                <Row>
                  <Layout flexBasis={51} />
                  <Column alignItems='flex-start'>
                    <Layout flexBasis={21} />
                    <Text
                      color='darkGray'
                      fontFamily='text'
                      fontWeight='normal'
                      fontSize='semiMedium'
                    >
                      {isMouseLeave && isMouseOver && isSelected
                        ? intl.formatMessage(card.rejection)
                        : intl.formatMessage(card.topTitle)}
                    </Text>
                    <Layout flexBasis={3} />
                    <Text
                      as='h2'
                      color='black'
                      fontFamily='text'
                      fontWeight='bold'
                      fontSize='extra'
                    >
                      {intl.formatMessage(card.title)}
                    </Text>
                    <Layout flexBasis={5} />
                    <Text
                      as='h3'
                      color='black'
                      fontFamily='text'
                      fontWeight='bold'
                      fontSize='average'
                    >
                      {intl.formatMessage(card.taste)}
                    </Text>
                    <Layout flexBasis={15} />
                    <Box width={108}>
                      <Text color='darkGray' fontFamily='text' fontWeight='bold' fontSize='small'>
                        {intl.formatMessage(card.portionNumber)}
                      </Text>
                      <Text
                        color='darkGray'
                        fontFamily='text'
                        fontWeight='normal'
                        fontSize='small'
                        pl={1}
                      >
                        {intl.formatMessage(card.portion)}
                      </Text>
                    </Box>
                    <Box width={130}>
                      <Text color='darkGray' fontFamily='text' fontWeight='bold' fontSize='small'>
                        {intl.formatMessage(card.mouseNumber)}
                      </Text>
                      <Text
                        color='darkGray'
                        pl={1}
                        fontFamily='text'
                        fontWeight='normal'
                        fontSize='small'
                      >
                        {intl.formatMessage(card.mouse)}
                      </Text>
                    </Box>
                  </Column>
                </Row>
                <Layout flexBasis={36} />
                <Background
                  width={255}
                  height={260}
                  backgroundImage={'url("/static/img/Photo.jpg")'}
                />
                <Box
                  width={80}
                  height={80}
                  bg={isSelected ? 'selected' : isDisabled ? 'gray' : 'default'}
                  top='80%'
                  borderRadius='50%'
                  left='70%'
                  position='absolute'
                >
                  <Column justifyContent='center' alignItems='center'>
                    <Text color='white' fontFamily='text' fontWeight='normal' fontSize='large'>
                      {intl.formatMessage(card.weight)}
                    </Text>
                    <Text color='white' fontFamily='text' fontWeight='normal' fontSize='medium'>
                      {intl.formatMessage(card.weightDescription)}
                    </Text>
                  </Column>
                </Box>
              </Column>
            </Box>
            <Layout flexBasis={20} />
            <Row justifyContent='center'>
              <Text
                color={isDisabled ? 'disabled' : 'white'}
                fontFamily='text'
                fontWeight='normal'
                fontSize='semiSmall'
              >
                {isSelected
                  ? intl.formatMessage(card.selected)
                  : isDisabled
                  ? intl.formatMessage(card.disabled)
                  : intl.formatMessage(card.question)}
              </Text>
              {isSelected ? null : isDisabled ? null : (
                <Text
                  color='default'
                  fontFamily='text'
                  fontWeight='normal'
                  fontSize='semiSmall'
                  pl={1}
                  onMouseOver={mouseHoverByu}
                  onMouseLeave={mouseLeaveByu}
                  borderBottom='dashedDefault'
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleAddCard(id)}
                >
                  {intl.formatMessage(card.byu)}
                </Text>
              )}
            </Row>
            <Layout flexBasis={40} />
          </Column>
        )
      })}
    </>
  )
}
