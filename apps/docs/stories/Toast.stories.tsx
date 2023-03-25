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
    <Button onClick={() => toast({ msg: 'I am a toast' })}>
      Click to toast
    </Button>
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
