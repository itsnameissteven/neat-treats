import React from 'react';
import { createPortal } from 'react-dom';
export type NTPortalProps = {
  children: React.ReactNode;
  container: Element | DocumentFragment;
  key?: string | null | undefined;
};
export const Portal = ({ children, container, key }: NTPortalProps) => {
  return createPortal(children, container, key);
};
