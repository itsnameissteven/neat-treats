import React, { useState } from 'react';
import '../.storybook/index.scss';
import { Icon } from '@neat-treats/core/src';

export default {
  component: Icon,
  title: 'Components/Icon',
};

const iconKeys = [
  'chevron-left',
  'chevron-right',
  'chevron-down',
  'chevron-up',
  'chevron-circle-up',
  'chevron-circle-down',
  'chevron-circle-left',
  'chevron-circle-right',
  'chevron-circle-up-f',
  'chevron-circle-down-f',
  'chevron-circle-left-f',
  'chevron-circle-right-f',
  'plus',
  'plus-circle',
  'plus-circle-f',
  'x',
  'x-circle',
  'x-circle-f',
  'hamburger-round',
  'hamburger-square',
  'hamburger-short',
  'arrow-up',
  'arrow-right',
  'arrow-down',
  'arrow-left',
  'arrow-circle-up',
  'arrow-circle-right',
  'arrow-circle-down',
  'arrow-circle-left',
  'arrow-circle-up-f',
  'arrow-circle-right-f',
  'arrow-circle-down-f',
  'arrow-circle-left-f',
  'moon',
  'sun',
  'meteor',
  'copy',
  'minus',
  'minus-circle',
  'minus-circle-f',
  'shopping-cart',
];

const allIcons = (color: string, size: number) =>
  iconKeys.map((name, i) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        key={i}
      >
        <p
          className="icon__name"
          style={{ marginBottom: '12px', fontSize: '14px' }}
        >
          {name}
        </p>
        <Icon name={name} color={color} size={size} />
      </div>
    );
  });

const Template = ({ color, size }) => {
  return (
    <>
      <h1 className="story__h1">Icon</h1>
      <p className="story__p">Current icons and names used to access them</p>
      <div className="story__icon-grid">{allIcons(color, size)}</div>
    </>
  );
};

export const Collection = Template.bind({});
Collection.args = {
  color: '#000',
  size: '24px',
};
