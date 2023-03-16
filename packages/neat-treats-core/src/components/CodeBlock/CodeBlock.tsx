import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { Icon } from '../Icon/Icon';
import { useCopyText, usePreventAnimation } from '@neat-treats/utils/src';
import './CodeBlock.scss';

export type NTCodeBlockProps = {
  /** Place your code inside template literals*/
  code: string;
  /** language of your code */
  language: string;
  /** Optional class name for the parent element */
  className?: string;
};

export const CodeBlock = ({
  className = '',
  code,
  language,
}: NTCodeBlockProps) => {
  const { noTransitionClass } = usePreventAnimation();
  const { copyText } = useCopyText({});

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={`code code-block ${className} ${noTransitionClass}`}>
      <div className="code-block__copy">
        {/* {showMessage()} */}
        <Icon
          className="code-block__copy__icon"
          name="copy"
          size={34}
          onClick={() => copyText(code)}
        />
      </div>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};
