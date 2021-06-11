import React, { ReactElement, useEffect, useState } from 'react'
import { styled } from '../theme/theme'
import { motion, AnimateSharedLayout } from 'framer-motion'
import * as UnstyledCheckbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@iconicicons/react'

export interface CheckboxProps {
  label: string
  type?: 'default' | 'bordered' | 'solid' | 'linked'
}

export function Checkbox(props: CheckboxProps) {
  return (
    <StyledCheckbox>
      <UnstyledCheckbox.Indicator as={CheckIcon} />
    </StyledCheckbox>
  )
}

const StyledCheckbox = styled(UnstyledCheckbox.Root, {
  appearance: 'none',
  backgroundColor: '$secondaryColor',
  border: 'none',
  padding: 0,
  boxShadow: '0 0 0 3px $secondaryColor',
  width: 30,
  height: 30,
  borderRadius: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:focus': {
    outline: 'none',
  },
})
