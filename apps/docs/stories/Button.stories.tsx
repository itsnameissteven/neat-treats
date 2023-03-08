import React from 'react';
import { Button } from '@neat-treats/core/src';

export default {
  component: Button,
  title: 'Components/Button',
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: `Hi I'm a button`,
};
