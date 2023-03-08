import React from 'react';
import { CodeBlock, DarkModeButton } from '@neat-treats/core/src';
import { usePreventAnimation } from '@neat-treats/utils/src';
import '../.storybook/index.scss';

export default {
  component: DarkModeButton,
  title: 'Components/DarkModeButton',
};

const css = `.dark-mode-demo {
  padding: 20px;
  height: 100vh;
  width: 100%;
  background: #fff;
  transition: all 0.3s ease-out;
  color: #1f2028;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 0 20px 16px;
    border-bottom: 2px solid #ced1d4;
  }
}
// dark mode styles
.dark-mode {
  .dark-mode-demo {
    background: #1f2028;
    color: #fff;
    &__header {
      border-bottom: 2px solid #4b4c52;
    }
  }
}`;

const Template = (args) => {
  const { noTransitionClass } = usePreventAnimation();
  return (
    <div className={`dark-mode-demo ${noTransitionClass}`}>
      <div className="dark-mode-demo__header">
        <h1>Dark Mode Button Demo</h1>
        <DarkModeButton {...args} />
      </div>
      <p className="dark-mode-demo__about">
        The Dark Mode button allows users to switch between light and dark
        modes. Clicking the button toggles the class name{' '}
        <strong>'dark-mode'</strong> on the <strong>body</strong> element.
        Developers can utilize this parent class to add styles specific to the
        dark view see scss styles below. Local storage is utilized to remember
        the users preference so styles should persist between pages.
      </p>
      <CodeBlock className="dark-mode-demo__code" code={css} language="css" />
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  size: 40,
};
