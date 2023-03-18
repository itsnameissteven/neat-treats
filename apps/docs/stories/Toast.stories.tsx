import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Toast, useToast, Button } from '@neat-treats/core/src';

export default {
  component: Toast,
  title: 'Components/Toast',
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => {
  const { toast } = useToast();
  return <Button onClick={() => toast('I am a toast')}>Click to toast</Button>;
};

export const Default: ComponentStory<typeof Toast> = Template.bind({});
Default.args = {
  content: 'This is a Message .... .... WQowow',
};
