import { Meta, Story } from "@storybook/react";
import React from "react";
import { Button, ButtonProps } from "../lib/main";
import { ShoppingCartIcon } from "@iconicicons/react";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (props) => <Button {...props} />;

export const Default = Template.bind({});
Default.args = {
  label: "Hello world 1",
  icon: <ShoppingCartIcon />,
};

export const SolidButton = Template.bind({});
SolidButton.args = {
  label: "Hello world 2",
  type: "solid",
  icon: <ShoppingCartIcon />,
};

export const BorderButton = Template.bind({});
BorderButton.args = {
  label: "The other one",
  type: "bordered",
  icon: <ShoppingCartIcon />,
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  label: "The link one",
  type: "linked",
  icon: <ShoppingCartIcon />,
};
