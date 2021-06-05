import React, { ReactElement } from "react";
import { styled } from "../theme/theme";
import { motion } from "framer-motion";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "default" | "bordered" | "solid" | "linked";
  icon?: ReactElement;
}

export function Button(props: ButtonProps) {
  return (
    <StyledButton
      onClick={props.onClick}
      type={props.type ?? "default"}
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
  );
}

const StyledButton = styled(motion.button, {
  borderRadius: 7,
  background: "#FEEAAD",
  color: "#DA9224",
  padding: "10px",
  border: "none",
  cursor: "pointer",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  variants: {
    type: {
      default: {},
      bordered: {
        boxShadow: "0 0 0 2px #DA9224",
      },
      solid: {
        background: "#DA9224",
        color: "#FFFFFF",
        boxShadow: "0 0 0 2px #DA9224",
      },
      linked: {
        background: "#FEEAAD44",
      },
    },
  },
});
