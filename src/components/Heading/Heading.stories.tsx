import { Meta, StoryObj } from '@storybook/react/types-7-0'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading default',
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
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading with H1 tag</h1>
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