import { Meta, StoryObj } from '@storybook/react/types-7-0'
import { Envelope } from 'phosphor-react'
import { Input, InputRootProps } from '.'

export default {
  title: 'Components/Input',
  component: Input.Root,
  args: {
    children: [
      <Input.Icon>
        <Envelope />
      </Input.Icon>,
      <Input.Input placeholder="Type your e-mail address" />
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

export const WithoutIcon: StoryObj<InputRootProps> = {
  args: {
    children: [
      <Input.Input placeholder="Type your e-mail address" />
    ]
  },
}