import type {Meta, StoryObj} from '@storybook/react';

import {ProgressBar} from './ProgressBar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['white', 'black', 'blue'],
      control: {type: 'radio'},
      defaultValue: 'white',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {type: 'radio'},
    },
    title: {
      type: 'string',
      defaultValue: 'Time tracking',
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Bar: Story = {
  args: {percentage: 20},
};

export const BarWidget: Story = {
  args: {
    percentage: 20,
    color: 'white',
    title: 'Time tracking',
    spent: 'Spent',
    spentValue: '1d',
    est: 'Est',
    estValue: '1w',
  },
};
