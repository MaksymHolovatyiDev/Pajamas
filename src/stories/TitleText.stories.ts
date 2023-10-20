import type {Meta, StoryObj} from '@storybook/react';

import {TitleText} from '../components/TitleText';

const meta = {
  title: 'App/TitleText',
  component: TitleText,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof TitleText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    dark: true,
  },
};
