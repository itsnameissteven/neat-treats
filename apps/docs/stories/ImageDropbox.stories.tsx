import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ImageDropbox } from '@neat-treats/core/src';

export default {
  component: ImageDropbox,
  title: 'Components/ImageDropbox',
} as ComponentMeta<typeof ImageDropbox>;

const Template: ComponentStory<typeof ImageDropbox> = (args) => (
  <ImageDropbox {...args} />
);

export const Default: ComponentStory<typeof ImageDropbox> = Template.bind({});
Default.args = {};
