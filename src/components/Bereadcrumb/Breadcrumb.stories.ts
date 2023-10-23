import type {Meta, StoryObj} from '@storybook/react';

import {Breadcrumb} from './Breadcrumb';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Elements: Story = {
  args: {
    items: [
      {text: 'Home', image: true},
      {text: 'Page', image: true},
    ],
  },
};

export const Image: Story = {
  args: {
    items: [
      {text: 'Home', image: true},
      {text: 'Page', image: true},
      {text: 'Sub-page', image: false},
    ],
  },
};

export const ItemOverflow: Story = {
  args: {
    items: [
      {text: 'Home', image: true},
      {text: 'Page', image: true},
      {text: 'Page-without-image', image: false},
      {text: 'Sub-page', image: false},
    ],
  },
};
