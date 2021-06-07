import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Slider, SliderProps } from '../lib/main'
import { WifiIcon } from '@iconicicons/react'

export default {
  title: 'Slider',
  component: Slider,
  argTypes: {
    onChange: {
      action: 'Switched',
    },
  },
} as Meta

const Template: Story<SliderProps> = (props) => <Slider {...props} />

export const NoLabel = Template.bind({})
NoLabel.args = {}