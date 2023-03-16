import React, { Suspense, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from '@neat-treats/core/src';
import { Button } from '@neat-treats/core/src';

export default {
  component: Modal,
  title: 'Components/Modal',
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Click Me!</Button>

      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1>Ihsadhfhasdfh </h1>
        <h1>HELLO WORLD!</h1>
      </Modal>
    </>
  );
};

export const Default: ComponentStory<typeof Modal> = Template.bind({});
Default.args = {};
