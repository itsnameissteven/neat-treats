import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '@neat-treats/core/src';

export default {
  component: Input,
  title: 'Components/Input',
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default: ComponentStory<typeof Input> = Template.bind({});
Default.args = {
  isError: false,
  label: 'Label for your input',
  placeholder: 'Enter in your data',
};
