import type {Meta, StoryObj} from '@storybook/react';

import {Toggle} from './Toggle';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Toggle',
  component: Toggle,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {},
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Label',
    onClick: () => {
      console.log('Click!');
    },
  },
};

export const Help: Story = {
  args: {
    label: 'Label',
    onClick: () => {
      console.log('Click!');
    },
    help: 'Help text',
  },
};

export const Description: Story = {
  args: {
    label: 'Label',
    onClick: () => {
      console.log('Click!');
    },
    description: 'Description',
  },
};

export const AllVariants: Story = {
  args: {
    label: 'Label',
    onClick: () => {
      console.log('Click!');
    },
    description: 'Description',
    help: 'Help text',
  },
};

export const Horizontal: Story = {
  args: {
    label: 'Label',
    onClick: () => {
      console.log('Click!');
    },
    horizontal: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    onClick: () => {
      console.log('Click!');
    },
    disabled: true,
  },
};

export const DisabledActive: Story = {
  args: {
    label: 'Label',
    onClick: () => {
      console.log('Click!');
    },
    disabled: true,
    isActive: true,
  },
};
