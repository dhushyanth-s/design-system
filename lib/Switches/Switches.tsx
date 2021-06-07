import React, { useEffect, useState, ReactElement } from 'react'
import { styled } from '../theme/theme'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { Switch as UnstyledSwitch } from '@headlessui/react'

export interface SwitchProps {
  label?: string
  innerLabel?: { enabled: string; disabled: string }
  onChange: (enabled: boolean) => void
  icon?: ReactElement
}

export function Switch(props: SwitchProps) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    props.onChange(enabled)
  }, [enabled])

  return (
    <div>
      <AnimateSharedLayout>
        <Container>
          <StyledSwitch
            checked={enabled}
            onChange={setEnabled}
            state={enabled ? 'enabled' : 'disabled'}
          >
            <InnerLabel state={enabled ? 'enabled' : 'disabled'} layout>
              {props.innerLabel?.enabled}
            </InnerLabel>
            <Circle state={enabled ? 'enabled' : 'disabled'} layout>
              {props.icon}
            </Circle>
            <DisabledInnerLabel state={enabled ? 'disabled' : 'enabled'} layout>
              {props.innerLabel?.disabled}
            </DisabledInnerLabel>
          </StyledSwitch>
          <Label>{props.label}</Label>
        </Container>
      </AnimateSharedLayout>
    </div>
  )
}

const StyledSwitch = styled(UnstyledSwitch, {
  borderRadius: 15,
  background: '$grey',
  minWidth: 60,
  height: 30,
  padding: 3,
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  transition: 'background 0.3s',

  variants: {
    state: {
      enabled: {
        background: '$primaryColor',
      },
      disabled: {},
    },
  },
})

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'max-content',
})

const InnerLabel = styled(motion.div, {
  position: 'relative',
  margin: 2,
  overflowX: 'hidden',

  variants: {
    state: {
      enabled: {
        color: 'white',
        // left: '-22px',
        width: '100%',
      },
      disabled: {
        color: 'black',
        width: 0,
        margin: 0
      },
    },
  },
})

const DisabledInnerLabel = styled(motion.div, {
  position: 'relative',
  margin: 2,
  overflowX: 'hidden',

  variants: {
    state: {
      enabled: {
        color: '$textColor',
        // left: '-22px',
        width: '100%',
      },
      disabled: {
        color: 'black',
        width: 0,
        margin: 0
      },
    },
  },
})

const Circle = styled(motion.div, {
  margin: 0,
  width: 22,
  minWidth: 22,
  height: 22,
  borderRadius: '50%',
  backgroundColor: 'white',
  color: '$textColor',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,

  variants: {
    state: {
      enabled: {
        // left: 'calc(100% - 22px)',
        color: '$primaryColor',
      },
      disabled: {
        // left: '0%',
      },
    },
  },
})

const Label = styled(motion.div, {
  margin: 0,
  position: 'relative',
  color: '#000000',

  variants: {
    state: {
      enabled: {
        left: '60%',
      },
      disabled: {
        left: '0%',
      },
    },
  },
})
