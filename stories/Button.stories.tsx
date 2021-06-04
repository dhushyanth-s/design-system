import { Meta, Story } from "@storybook/react";
import React from "react";
import { Button, ButtonProps } from "../lib/main";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (props) => <Button {...props} />;

export const Default = Template.bind({});
Default.args = {
  label: "Hello world 1"
};

export const MultipleButton = Template.bind({});
MultipleButton.args = {
  label: "Hello world 2",
};
