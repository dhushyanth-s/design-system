import React, { ReactElement } from 'react'
import { keyframes, styled } from '../theme/theme'
import { motion } from 'framer-motion'
import { type } from 'os'

export interface ButtonGroupProps {
  fragments: ButtonFragmentProps[]
  type?: 'default' | 'bordered' | 'solid' | 'subtle'
}

interface ButtonFragmentProps {
  label: string
  onClick: () => void
  icon?: ReactElement
}

export function ButtonGroups(props: ButtonGroupProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {props.fragments.map((value, index) => (
        <StyledButton
          onClick={value.onClick}
          type={props.type ?? 'default'}
          whileHover={{
            scale: 1.05,
            backdropFilter: 'blur(15px)',
            zIndex: 1,
          }}
          whileTap={{
            scale: 1,
          }}
          position={
            index === 0
              ? 'first'
              : index === props.fragments.length - 1
              ? 'last'
              : 'middle'
          }
        >
          {value.icon}
          {value.label}
        </StyledButton>
      ))}
    </div>
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
      subtle: {
        background: '$secondaryColor',
        // transition: 'box-shadow 0.3s',
        '&:focus': {
          animation: `${blink} 1.5s infinite`,
          outline: 'none',
          border: 'none',
        },
      },
    },
    position: {
      first: {
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
      },
      middle: {},
      last: {
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
      },
    },
  },

  compoundVariants: [
    {
      type: 'default',
      position: 'first',
      css: {
        boxShadow: '1px 0px 0px 0px $primaryColor',
      },
    },
    {
      type: 'default',
      position: 'middle',
      css: {
        boxShadow:
          '1px 0px 0px 0px $primaryColor, -1px 0px 0px 0px $primaryColor',
      },
    },
    {
      type: 'default',
      position: 'last',
      css: {
        boxShadow: '-1px 0px 0px 0px $primaryColor',
      },
    },
    {
      type: 'bordered',
      position: 'first',
      css: {
        boxShadow: '0px 0px 2px 0px $primaryColor',
      },
    },
  ],
})
