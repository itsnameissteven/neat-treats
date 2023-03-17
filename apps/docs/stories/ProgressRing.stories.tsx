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
  percentageComplete: 40,
  size: 80,
  stroke: 5,
  hasPercentageDisplay: true,
  border: '#0096c7',
  completedBorder: '#023e8a',
};
