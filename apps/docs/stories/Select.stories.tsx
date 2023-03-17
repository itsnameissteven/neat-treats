import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from '@neat-treats/core/src';

export default {
  component: Select,
  title: 'Components/Select',
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default: ComponentStory<typeof Select> = Template.bind({});
Default.args = {
  isError: false,
  label: 'Select option',
  options: ['one', 'two', 'three'],
  required: false,
};
