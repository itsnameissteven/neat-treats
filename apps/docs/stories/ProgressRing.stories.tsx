import React from 'react';

import { ProgressRing } from '@neat-treats/core/src';

export default {
  component: ProgressRing,
  title: 'Components/ProgressRing',
};

const Template = (args) => {
  return <ProgressRing {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  percentageComplete: 25,
  size: 70,
  stroke: 3,
  hasPercentageDisplay: true,
  border: '#ade8f4',
  completedBorder: '#0077b6',
};
