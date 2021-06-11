import React from 'react'
import { Disclosure } from '@headlessui/react'
import { styled } from '../theme/theme'
import { ChevronDownIcon } from '@iconicicons/react'

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
    <Wrapper>
      {props.fragments.map((value, index) => (
        <StyledDisclosure
          position={
            index === 0
              ? 'start'
              : index === props.fragments.length - 1
              ? 'end'
              : 'middle'
          }
        >
          <Disclosure>
            {({ open }) => (
              <div>
                <AccordionButton>
                  {value.label}
                  <div
                    style={{
                      display: 'flex',
                      flex: 'auto',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}
                  >
                    <ChevronDownIcon />
                  </div>
                </AccordionButton>
                <Disclosure.Panel>{value.content}</Disclosure.Panel>
                {index !== props.fragments.length - 1 && (
                  <div
                    style={{
                      width: '100%',
                      background: '#E2E2E2',
                      height: 2,
                    }}
                  ></div>
                )}
              </div>
            )}
          </Disclosure>
        </StyledDisclosure>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled('div', {
  width: 'max-content',
})

const AccordionButton = styled(Disclosure.Button, {
  backgroundColor: '$backgroundColor',
  border: 'none',
  width: 'clamp(250px, 20vw, 450px)',
  display: 'flex',
  alignItems: 'center',
})

const StyledDisclosure = styled('div', {
  variants: {
    position: {
      start: {
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
      },
      middle: {
      },
      end: {
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
      },
    },
  },
})
