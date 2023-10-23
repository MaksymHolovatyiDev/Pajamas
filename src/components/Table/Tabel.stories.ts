import type {Meta, StoryObj} from '@storybook/react';

import {Table} from './Table';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    zebra: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Head_3: Story = {
  args: {
    head: ['head', 'head', 'head'],
  },
};

export const Head_2: Story = {
  args: {
    head: ['head', 'head'],
  },
};

export const Head_1: Story = {
  args: {
    head: ['head'],
  },
};

export const Body_3: Story = {
  args: {
    body: [['body', 'body', 'body']],
  },
};

export const Body_2: Story = {
  args: {
    body: [['body', 'body']],
  },
};

export const Body_1: Story = {
  args: {
    body: [['body']],
  },
};

export const BaseTable: Story = {
  args: {
    head: ['head', 'head', 'head'],
    body: [
      ['body1', 'body1', 'body1'],
      ['body2', 'body2', 'body2'],
      ['body3', 'body3', 'body3'],
    ],
  },
};

export const Zebra: Story = {
  args: {
    zebra: true,
    head: ['head', 'head', 'head'],
    body: [
      ['body1', 'body1', 'body1'],
      ['body2', 'body2', 'body2'],
      ['body3', 'body3', 'body3'],
    ],
  },
};
