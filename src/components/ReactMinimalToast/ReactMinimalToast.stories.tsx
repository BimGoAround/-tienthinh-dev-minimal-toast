import type { Meta, StoryObj } from '@storybook/react'

import { ReactMinimalToast } from './ReactMinimalToast'

const meta = {
  title: 'ReactMinimalToast/ReactMinimalToast',
  component: ReactMinimalToast,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactMinimalToast>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    children: 'Hello, world!',
  },
}
