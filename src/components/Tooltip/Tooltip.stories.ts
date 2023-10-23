import type {Meta, StoryObj} from '@storybook/react';

import {Tooltip} from './Tooltip';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],

  argTypes: {
    direction: {
      options: ['bottom', 'top', 'left', 'right'],
      control: {type: 'radio'},
    },
  },

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BaseTooltip: Story = {
  args: {
    text: 'Content',
    direction: 'bottom',
  },
};

export const TooltipResize: Story = {
  args: {
    text: 'I’ve got a tip for you!',
    direction: 'bottom',
  },
};

export const TooltipWrap: Story = {
  args: {
    text: 'Text wraps when reaching 200px max-width',
    direction: 'bottom',
  },
};
