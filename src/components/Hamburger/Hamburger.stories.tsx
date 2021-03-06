import React, { useState } from 'react';

import Hamburger from './';

export default {
  component: Hamburger,
  title: 'Components/Hamburger',
  argTypes: {
    pipes: {
      options: [2, 3],
      control: { type: 'radio' },
      defaultValue: 3,
    },
  },
};

const Template = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="story__hamburger">
      <Hamburger onClick={() => setIsOpen(!isOpen)} isActive={isOpen} />
    </div>
  );
};

export const Primary = Template.bind({});
