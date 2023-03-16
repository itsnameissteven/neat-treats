import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FileUpload } from '@neat-treats/core/src';

export default {
  component: FileUpload,
  title: 'Components/FileUpload',
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <FileUpload {...args} />
);

export const Default: ComponentStory<typeof FileUpload> = Template.bind({});
Default.args = {};
