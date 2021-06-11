import React, { ReactElement, useEffect, useState } from 'react'
import { styled } from '../theme/theme'
import { motion, AnimateSharedLayout } from 'framer-motion'
import * as slider from '@radix-ui/react-slider'

export interface SliderProps {
  label: string
  onClick: () => void
  type?: 'default' | 'bordered' | 'solid' | 'linked'
  iconLeft?: ReactElement
  iconRight?: ReactElement
}

export function Slider(props: SliderProps) {
  const [value, setValue] = useState<number[]>()

  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <AnimateSharedLayout>
      <Container>
        <IconContainer>{props.iconLeft}</IconContainer>
        <StyledSlider
          defaultValue={[50]}
          value={value}
          onValueChange={setValue}
          // onMouseDown={() => {
          //   setClicking(true)
          // }}
          // onMouseUp={() => {
          //   setClicking(false)
          //   setMoving(false)
          // }}
          // onMouseMove={() => {
          //   setMoving(true)
          // }}
          // onMouseLeave={() => {
          //   setMoving(false)
          // }}
          // dragging={moving && clicking}
        >
          <Division />
          <StyledTrack>
            <StyledRange />
          </StyledTrack>
          <StyledThumb />
        </StyledSlider>
        <IconContainer>{props.iconRight}</IconContainer>
      </Container>
    </AnimateSharedLayout>
  )
}

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

const IconContainer = styled('div', {
  color: '$textColor',
  display: 'flex',
  alignItems: 'center',
})

const Division = styled('div', {
  backgroundColor: '#000000',
  width: 6,
  height: 6,
  borderRadius: '50%',
  position: 'absolute',
  left: 140,
  zIndex: 1,
})

const StyledSlider = styled(slider.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  height: 16,
  width: 300,
  '&>span:nth-of-type(2)': {
    zIndex: 5,
  },
})

const StyledTrack = styled(slider.Track, {
  backgroundColor: '$secondaryColor',
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',
  height: 6,
})

const StyledRange = styled(slider.Range, {
  position: 'absolute',
  backgroundColor: '$primaryColor',
  borderRadius: '9999px',
  height: '100%',
})

const StyledThumb = styled(slider.Thumb, {
  $$sliderThumbColor: '#929090',
  display: 'block',
  width: 20,
  height: 20,
  zIndex: 5,
  boxShadow: '0px 0px 10px 0.5px $$sliderThumbColor',
  backgroundColor: 'white',
  borderRadius: '20px',
  transition: 'transform 0.15s ease',

  '&:hover': {
    outline: 'none',
    transform: 'scale(1.15)',
  },
})
