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

const Example = () => {
  const toast = useToast();
  return (
    <div className="toast-btn-container">
      <Button
        onClick={() => toast({ msg: 'I am a toast', position: 'top-left' })}
      >
        Top Left
      </Button>
      <Button
        onClick={() => toast({ msg: 'I am a toast', position: 'top-center' })}
      >
        Top Center
      </Button>
      <Button
        onClick={() => toast({ msg: 'I am a toast', position: 'top-right' })}
      >
        Top Right
      </Button>
      <Button
        onClick={() => toast({ msg: 'I am a toast', position: 'bottom-left' })}
      >
        Bottom Left
      </Button>
      <Button
        onClick={() =>
          toast({ msg: 'I am a toast', position: 'bottom-center' })
        }
      >
        Bottom Center
      </Button>
      <Button onClick={() => toast({ msg: 'I am a toast' })}>
        Bottom Right
      </Button>
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
