import { Meta, StoryObj } from '@storybook/react/types-7-0'
import { Text, TextProps } from './index'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Text default',
    size: 'md'
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
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text with P tag</p>
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