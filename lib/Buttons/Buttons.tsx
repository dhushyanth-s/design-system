import React, { ReactElement } from 'react'
import { keyframes, styled } from '../theme/theme'
import { motion } from 'framer-motion'

export interface ButtonProps {
  label: string
  onClick: () => void
  type?: 'default' | 'bordered' | 'solid' | 'linked'
  icon?: ReactElement
}

export function Button(props: ButtonProps) {
  return (
    <StyledButton
      onClick={props.onClick}
      type={props.type ?? 'default'}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 1,
      }}
    >
      {props.icon}
      {props.label}
    </StyledButton>
  )
}

const blink = keyframes({
  '0%': {
    boxShadow: 'none',
  },
  '50%': {
    boxShadow: '0 0 0 2px $backgroundColor, 0 0 0 4px $primaryColor',
  },
  '100%': {
    boxShadow: 'none',
  },
})

const StyledButton = styled(motion.button, {
  borderRadius: 7,
  background: '$buttonBackgroundColor',
  color: '$primaryColor',
  padding: '10px',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.2rem',

  variants: {
    type: {
      default: {
        '&:focus': {
          boxShadow: '0px 0px 5px 3px $primaryColor',
          outline: 'none',
          border: 'none',
        },
      },
      bordered: {
        boxShadow: '0 0 0 2px #DA9224',
        '&:focus': {
          boxShadow: '0 0 5px 5px $primaryColor',
          outline: 'none',
          border: 'none',
        },
      },
      solid: {
        background: '#DA9224',
        color: '#FFFFFF',
        boxShadow: '0 0 0 2px $primaryColor',
        transition: 'box-shadow 0.3s',
        '&:focus': {
          boxShadow: '0 0 0 2px $backgroundColor, 0 0 0 4px $primaryColor',
          outline: 'none',
          border: 'none',
        },
      },
      linked: {
        background: '$secondaryColor',
        // transition: 'box-shadow 0.3s',
        '&:focus': {
          animation: `${blink} 1.5s infinite`,
          outline: 'none',
          border: 'none',
        },
      },
    },
  },
})
