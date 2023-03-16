import React from 'react';

import { ActionButton } from '@neat-treats/core/src';

export default {
  component: ActionButton,
  title: 'Components/ActionButton',
};

const Template = (args) => {
  return (
    <>
      <h1 className="story__h1">ActionButton</h1>
      <p className="story__p">
        The ActionButton allows you to pass in a custom icon or pick from the
        available icon library. Icon animation will be omitted if no
        animationDirection is indicated.
      </p>
      <div className="story__action-btn">
        <ActionButton
          animationDirection="right"
          iconName="arrow-right"
          onClick={() => null}
        />
        <ActionButton
          animationDirection="left"
          iconName="arrow-left"
          onClick={() => null}
        />
        <ActionButton
          animationDirection="up"
          iconName="arrow-up"
          onClick={() => null}
        />
        <ActionButton
          animationDirection="down"
          iconName="arrow-down"
          onClick={() => null}
        />
        <ActionButton {...args} />
      </div>
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  iconName: 'plus',
};
