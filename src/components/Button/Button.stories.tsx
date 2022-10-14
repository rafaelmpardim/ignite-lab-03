import { Meta, StoryObj } from '@storybook/react/types-7-0'
import { Button, ButtonProps } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button Default',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    }
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const CustomTag: StoryObj<ButtonProps> = {
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
    }
  }
}