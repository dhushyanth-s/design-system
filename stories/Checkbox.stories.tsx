import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Checkbox, CheckboxProps } from '../lib/main'
import { SpeakerIcon, AnnouncementIcon } from '@iconicicons/react'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onChange: {
      action: 'Switched',
    },
  },
} as Meta

const Template: Story<CheckboxProps> = (props) => <Checkbox {...props} />

export const NoLabel = Template.bind({})
NoLabel.args = {}

