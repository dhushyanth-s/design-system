import { Meta, Story } from "@storybook/react";
import React from "react";
import { Switch, SwitchProps } from "../lib/main";

export default {
  title: "Switch",
  component: Switch,
  argTypes: {
    onChange: {
      action: "Clicked",
    },
  },
} as Meta;

const Template: Story<SwitchProps> = (props) => <Switch {...props} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label 1",
};
