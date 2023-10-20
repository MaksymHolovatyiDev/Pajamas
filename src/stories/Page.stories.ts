import type {Meta, StoryObj} from '@storybook/react';

import App from '../App';

const meta = {
  title: 'App/Page',
  component: App,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'landscape',
  },
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    dark: true,
  },
};
