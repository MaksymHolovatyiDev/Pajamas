import type {Meta, StoryObj} from '@storybook/react';

import {Modal} from './Modal';
import {Button} from '../Button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Modal',
  component: Modal,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    title: {
      type: 'string',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {type: 'radio'},
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Title',
    onClose: () => {
      console.log('close');
    },
    mainContent:
      'GitLab-ipsum. Just so its stated explicitly, the language bar on the projects overview page is based on bytes. Our product packaging downloads artifacts of multiple repositories and actually we have to set the expire_in to an unnecessary high value to be sure we always have artifacts available in some stale repositories (or we have to trigger build periodically on those repositories).',
    buttons: [
      Button({
        type: 'dashed',
        onClick: () => {
          console.log('click');
        },
      }),
      Button({
        type: 'primary',
        onClick: () => {
          console.log('click');
        },
      }),
    ],
  },
};
