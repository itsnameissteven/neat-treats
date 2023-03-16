import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProgressBar } from '@neat-treats/core/src';

export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Default: ComponentStory<typeof ProgressBar> = Template.bind({});
Default.args = {
  percentageComplete: 40,
};
