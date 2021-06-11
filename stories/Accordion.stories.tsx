import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Accordion, AccordionFragment, AccordionProps } from '../lib/main'

export default {
  title: 'Accordion',
  component: Accordion,
} as Meta

const Template: Story<AccordionProps> = (props) => <Accordion {...props} />

export const Default = Template.bind({})
Default.args = {
  fragments: [
    {
      label: 'Label 1',
      content: 'Hello',
    },
    {
      label: 'Label 2',
      content: 'content 2',
    },
    {
      label: 'Label 2',
      content: 'content 2',
    }
  ],
}
