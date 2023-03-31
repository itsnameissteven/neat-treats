import React from 'react';
import { DNDContainer } from '@neat-treats/core/src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: DNDContainer,
  title: 'Components/DNDContainer',
} as ComponentMeta<typeof DNDContainer>;

const Template: ComponentStory<typeof DNDContainer> = (args) => (
  <DNDContainer {...args}>
    <h1>1</h1>
    <h1>2</h1>
    <h1>3</h1>
  </DNDContainer>
);

export const Default: ComponentStory<typeof DNDContainer> = Template.bind({});
Default.args = {};
