import React, { useEffect, useState } from "react";
import { styled } from "../theme/theme";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Switch as UnstyledSwitch } from "@headlessui/react";

export interface SwitchProps {
  label: string;
  onChange: (enabled: boolean) => void;
}

export function Switch(props: SwitchProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    props.onChange(enabled);
  }, [enabled]);

  return (
    <div>
      <AnimateSharedLayout>
          <StyledSwitch
            checked={enabled}
            onChange={setEnabled}
            state={enabled ? "enabled" : "disabled"}
            whileHover={{
              scale: 1.05,
            }}
          >
            <Circle state={enabled ? "enabled" : "disabled"} layout/>
          </StyledSwitch>
      </AnimateSharedLayout>
    </div>
  );
}

const StyledSwitch = styled(UnstyledSwitch, {
  borderRadius: 15,
  background: "$grey",
  width: 60,
  height: 30,
  padding: 3,
  border: "none",
  cursor: "pointer",

  variants: {
    state: {
      enabled: {
        background: "$backgroundColor",
      },
      disabled: {},
    },
  },
});

const Circle = styled(motion.div, {
  margin: 0,
  width: 22,
  height: 22,
  borderRadius: "50%",
  backgroundColor: "white",
  position: "relative",

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
