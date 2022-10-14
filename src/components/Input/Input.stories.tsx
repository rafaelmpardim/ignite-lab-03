import { Meta, StoryObj } from '@storybook/react/types-7-0'
import { Envelope } from 'phosphor-react'
import { Input, InputRootProps } from '.'

export default {
  title: 'Components/Input',
  component: Input.Root,
  args: {
    children: [
      <Input.Input placeholder="Input default" />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<InputRootProps>

export const Default: StoryObj<InputRootProps> = {}

export const WithIcon: StoryObj<InputRootProps> = {
  args: {
    children: [
      <Input.Icon>
        <Envelope />
      </Input.Icon>,
      <Input.Input placeholder="Input with icon" />
    ]
  },
}