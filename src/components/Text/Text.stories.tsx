import { Meta, StoryObj } from '@storybook/react/types-7-0'
import { Text, TextProps } from './index'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    }
  }
}

export const Custom: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text with P</p>
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