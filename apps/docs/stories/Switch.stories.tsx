import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Switch } from '@neat-treats/core/src';

export default {
  component: Switch,
  title: 'Components/Switch',
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default: ComponentStory<typeof Switch> = Template.bind({});
Default.args = {};
