import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Toast, useToast, Button } from '@neat-treats/core/src';
import { withReactContext } from 'storybook-react-context';
import {
  ToastContext,
  ToastContextProvider,
} from '@neat-treats/core/src/contexts/ToastContext';

export default {
  component: Toast,
  title: 'Components/Toast',
  decorators: [
    withReactContext({
      Context: ToastContext,
      initialState: () => null,
    }),
  ],
} as ComponentMeta<typeof Toast>;

const Container = ({ children }: { children: React.ReactNode }) => {
  return <ToastContextProvider>{children}</ToastContextProvider>;
};
const topButtons = [
  {
    id: crypto.randomUUID(),
    controller: { msg: 'Im a Top Left Toast!!!', position: 'top-left' },
    content: 'Top Left',
  },
  {
    id: crypto.randomUUID(),
    controller: { msg: 'Im a Top Center Toast!!!', position: 'top-center' },
    content: 'Top Center',
  },
  {
    id: crypto.randomUUID(),
    controller: { msg: 'Im a Top Right Toast!!!', position: 'top-right' },
    content: 'Top Right',
  },
] as const;

const bottomButtons = [
  {
    id: crypto.randomUUID(),
    controller: { msg: 'Im a Bottom Left Toast!!!', position: 'bottom-left' },
    content: 'Bottom Left',
  },
  {
    id: crypto.randomUUID(),
    controller: {
      msg: 'Im a Bottom Center Toast!!!',
      position: 'bottom-center',
    },
    content: 'Bottom Center',
  },
  {
    id: crypto.randomUUID(),
    controller: { msg: 'Im a Bottom Right Toast!!!', position: 'bottom-right' },
    content: 'Bottom Right',
  },
] as const;

const Example = () => {
  const toast = useToast();
  return (
    <div className="toast-btn-container">
      <div className="toast-btn-top">
        {topButtons.map((el) => (
          <Button onClick={() => toast(el.controller)} key={el.id}>
            {el.content}
          </Button>
        ))}
      </div>
      <div className="toast-btn-bottom">
        {bottomButtons.map((el) => (
          <Button onClick={() => toast(el.controller)} key={el.id}>
            {el.content}
          </Button>
        ))}
      </div>
    </div>
  );
};

const Template = () => {
  return (
    <Container>
      <Example />
    </Container>
  );
};

export const Default = Template.bind({});
