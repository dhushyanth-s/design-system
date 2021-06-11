import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ButtonGroups, ButtonGroupProps } from '../lib/main'
import { ShoppingCartIcon } from '@iconicicons/react'

export default {
  title: 'Button Groups',
  component: ButtonGroups,
} as Meta

const Template: Story<ButtonGroupProps> = (props) => <ButtonGroups {...props} />

export const Default = Template.bind({})
Default.args = {
  fragments: [
    { label: 'Hello world 1', icon: <ShoppingCartIcon /> },
    { label: 'Hello world 2', icon: <ShoppingCartIcon /> },
    { label: 'Hello world ', icon: <ShoppingCartIcon /> },
  ],
}

export const Bordered = Template.bind({})
Bordered.args = {
  fragments: [
    { label: 'Hello world 1', icon: <ShoppingCartIcon /> },
    { label: 'Hello world 2', icon: <ShoppingCartIcon />},
    { label: 'Hello world ', icon: <ShoppingCartIcon />},
  ],
  type: 'bordered'
}


