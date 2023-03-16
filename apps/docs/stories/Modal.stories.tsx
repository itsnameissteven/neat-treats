import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from '@neat-treats/core/src';

export default {
  component: Modal,
  title: 'Components/Modal',
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>
    <h1>HELLO WORLD!</h1>
  </Modal>
);

export const Default: ComponentStory<typeof Modal> = Template.bind({});
Default.args = {
  isOpen: false,
};
