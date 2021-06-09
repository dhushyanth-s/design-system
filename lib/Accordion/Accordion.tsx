import React from 'react'
import { Disclosure } from '@headlessui/react'

export interface AccordionFragment {
  label: string
  content: string
}

export interface AccordionProps {
  fragments: AccordionFragment[]
}

export function Accordion(props: AccordionProps) {
  console.log(props)
  return (
    <div>
      {props.fragments.map((value, index) => (
        <Disclosure>
          {({ open }) => (
            <div>
              <Disclosure.Button>{value.label}</Disclosure.Button>
              <Disclosure.Panel>{value.content}</Disclosure.Panel>
              {index !== props.fragments.length - 1 && (
                <div
                  style={{
                    width: '100%',
                    background: '#E2E2E2',
                    height: 2
                  }}
                ></div>
              )}
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
