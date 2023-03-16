import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ImageUpload } from '@neat-treats/core/src';

export default {
  component: ImageUpload,
  title: 'Components/ImageUpload',
} as ComponentMeta<typeof ImageUpload>;

const Template: ComponentStory<typeof ImageUpload> = (args) => (
  <ImageUpload {...args} />
);

export const Default: ComponentStory<typeof ImageUpload> = Template.bind({});
Default.args = {};
