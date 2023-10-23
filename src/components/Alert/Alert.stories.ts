import type {Meta, StoryObj} from '@storybook/react';

import {Alert} from './Alert';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      options: ['error', 'warning', 'success', 'info', 'notification'],
      control: {type: 'radio'},
    },
    title: {
      type: 'string',
      defaultValue: 'Title',
    },
    buttons: {
      type: 'boolean',
    },
    cross: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Type: Story = {
  args: {
    type: 'error',
  },
};

export const Title: Story = {
  args: {
    type: 'error',
    title: 'Title',
  },
};

export const Label: Story = {
  args: {
    type: 'error',
    buttons: true,
  },
};

export const Cross: Story = {
  args: {
    type: 'error',
    cross: true,
  },
};
