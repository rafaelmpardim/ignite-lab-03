import { Meta, StoryObj } from '@storybook/react/types-7-0'
import { Checkbox, CheckboxProps } from '.'
import { Text } from '../Text'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
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
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex gap-3 align-center">
          {Story()}
          <Text>
            Checkbox Default
          </Text>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}