import React, { useEffect, useState, ReactElement } from 'react'
import { styled } from "../theme/theme";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Switch as UnstyledSwitch } from "@headlessui/react";

export interface SwitchProps {
  label?: string
  innerLabel?: string
  onChange: (enabled: boolean) => void
  icon?: ReactElement;
}

export function Switch(props: SwitchProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    props.onChange(enabled);
  }, [enabled]);

  return (
    <div>
      <AnimateSharedLayout>
        <Container>
          <StyledSwitch
            checked={enabled}
            onChange={setEnabled}
            state={enabled ? 'enabled' : 'disabled'}
          >
            <Circle state={enabled ? 'enabled' : 'disabled'} layout>
              {props.icon}
            </Circle>
            <InnerLabel layout>{props.innerLabel}</InnerLabel>
          </StyledSwitch>
          <Label>{props.label}</Label>
        </Container>
      </AnimateSharedLayout>
    </div>
  )
}

const StyledSwitch = styled(UnstyledSwitch, {
  borderRadius: 15,
  background: "$grey",
  minWidth: 60,
  height: 30,
  padding: 3,
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignContent: "center",
  transition: 'background 0.3s',

  variants: {
    state: {
      enabled: {
        background: "$primaryColor",
      },
      disabled: {},
    },
  },
});

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'max-content',
})

const InnerLabel = styled(motion.div, {

  variants: {
    state: {
      enabled: {
        background: '$primaryColor',
      },
      disabled: {},
    },
  },
})

const Circle = styled(motion.div, {
  margin: 0,
  width: 22,
  height: 22,
  borderRadius: '50%',
  backgroundColor: 'white',
  color: '$textColor',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    state: {
      enabled: {
        left: '60%',
        color: '$primaryColor',
      },
      disabled: {
        left: '0%',
      },
    },
  },
})

const Label = styled(motion.div, {
  margin: 0,
  position: "relative",
  color: "#000000",

  variants: {
    state: {
      enabled: {
        left: "60%",
      },
      disabled: {
        left: "0%",
      },
    },
  },
});
