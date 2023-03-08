import { useState, useEffect } from 'react';

interface CopyTextArgs {
  /** Amount of time to display the copy message */
  transitionDuration?: number;
}

export const useCopyText = ({
  transitionDuration = 400,
}: CopyTextArgs = {}) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const hideMessage = setTimeout(
        () => setIsCopied(false),
        transitionDuration
      );
      return () => clearTimeout(hideMessage);
    }
    return;
  });

  // Pass the text you would like to copy.
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  return {
    copyText,
    isCopied,
  };
};

export default useCopyText;
