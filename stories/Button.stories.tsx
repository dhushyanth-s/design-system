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
};

export const SolidButton = Template.bind({});
SolidButton.args = {
  label: "Hello world 2",
  type: "solid",
};

export const BorderButton = Template.bind({});
BorderButton.args = {
  label: "The other one",
  type: "bordered",
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  label: "The link one",
  type: "linked",
  icon: <ShoppingCartIcon />,
};
