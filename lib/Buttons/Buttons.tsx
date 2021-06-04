import React from "react";
import { styled } from "@stitches/react";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "default" | "bordered";
}

export function Button(props: ButtonProps) {
  return (
    <StyledButton onClick={props.onClick} type={props.type ?? 'default'}>
      {props.label}
    </StyledButton>
  );
}

const StyledButton = styled("button", {
  borderRadius: 7,
  background: "#FEEAAD",
  color: "#DA9224",
  padding: "10px",
  border: "none",
  cursor: "pointer",

  variants: {
    type: {
      default: {},
      bordered: {
        boxShadow: "0 0 0 2px #DA9224",
      },
    },
  },

  '&:hover': {
      transform: 'scale(1.2)',
      transition: 'transform 0.3s'
  }
});
