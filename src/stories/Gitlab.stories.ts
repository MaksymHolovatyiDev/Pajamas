import type {Meta, StoryObj} from '@storybook/react';

import {GitLab} from '../components/Gitlab';

const meta = {
  title: 'App/GitLab',
  component: GitLab,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof GitLab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    dark: true,
  },
};
