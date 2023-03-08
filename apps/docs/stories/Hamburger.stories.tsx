import React, { useState } from 'react';
import { Hamburger } from '@neat-treats/core/src';

export default {
  component: Hamburger,
  title: 'Components/Hamburger',
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="story__hamburger">
      <Hamburger
        onClick={() => setIsOpen(!isOpen)}
        isActive={isOpen}
        {...args}
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  pipes: 3,
  size: '24px',
};
