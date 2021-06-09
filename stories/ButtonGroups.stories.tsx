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
    { label: 'Hello world 3', icon: <ShoppingCartIcon /> },
  ],
}

// export const SolidButton = Template.bind({})
// SolidButton.args = {
//   label: 'Hello world 2',
//   type: 'solid',
//   icon: <ShoppingCartIcon />,
// }

// export const BorderButton = Template.bind({})
// BorderButton.args = {
//   label: 'The other one',
//   type: 'bordered',
//   icon: <ShoppingCartIcon />,
// }

// export const SubtleButton = Template.bind({})
// SubtleButton.args = {
//   label: 'The subtle one',
//   type: 'subtle',
//   icon: <ShoppingCartIcon />,
// }
