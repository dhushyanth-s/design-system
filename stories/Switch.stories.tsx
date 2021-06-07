import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Switch, SwitchProps } from '../lib/main'
import { WifiIcon } from '@iconicicons/react'

export default {
  title: 'Switch',
  component: Switch,
  argTypes: {
    onChange: {
      action: 'Switched',
    },
  },
} as Meta

const Template: Story<SwitchProps> = (props) => <Switch {...props} />

export const NoLabel = Template.bind({})
NoLabel.args = {}

export const Labelled = Template.bind({})
Labelled.args = {
  label: 'Label',
}

export const PlainIcon = Template.bind({})
PlainIcon.args = {
  icon: <WifiIcon />,
}

export const LabelledIconSwitch = Template.bind({})
LabelledIconSwitch.args = {
  label: 'I have icon',
  icon: <WifiIcon />,
}

export const InnerLabelledIconSwitch = Template.bind({})
InnerLabelledIconSwitch.args = {
  icon: <WifiIcon />,
  innerLabel: {
    enabled: 'Enabled',
    disabled: 'Disabled'
  },
}
