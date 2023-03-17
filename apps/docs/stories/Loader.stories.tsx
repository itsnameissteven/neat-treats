import React from 'react';

import { Loader } from '@neat-treats/core/src';

export default {
  component: Loader,
  title: 'Components/Loader',
};

const Template = (args) => {
  return <Loader {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
