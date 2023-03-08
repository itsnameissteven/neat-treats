import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Textarea } from '@neat-treats/core/src';

export default {
  component: Textarea,
  title: 'Components/Textarea',
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default: ComponentStory<typeof Textarea> = Template.bind({});
Default.args = {
  isError: false,
  label: 'Label for your input',
  placeholder: 'Enter in your data',
};
