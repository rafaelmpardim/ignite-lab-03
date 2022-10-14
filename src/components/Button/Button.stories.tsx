import { Meta, StoryObj } from '@storybook/react/types-7-0'
import { Button, ButtonProps } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    }
  }
}

export const Custom: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: (
      <p>Button with P</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}