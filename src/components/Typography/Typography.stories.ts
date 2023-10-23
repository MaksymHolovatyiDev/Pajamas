import type {Meta, StoryObj} from '@storybook/react';

import {Typography} from './Typography';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: {
      options: ['Primary', 'Secondary', 'Tertiary'],
      control: {type: 'radio'},
    },
    scale: {
      options: [100, 200, 300, 400, 500, 600, 700, 800],
      control: {type: 'radio'},
    },
    label: {
      options: ['bold', 'underline', 'bold-underline'],
      control: {type: 'radio'},
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    text: 'Primary',
  },
};

export const Scale: Story = {
  args: {
    scale: 100,
  },
};

export const Label: Story = {
  args: {
    label: 'bold',
  },
};
