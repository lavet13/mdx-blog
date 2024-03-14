import { FC, PropsWithChildren } from 'react';
import { MDXProvider as ReactMDXProvider } from '@mdx-js/react';

const MDXProvider: FC<PropsWithChildren> = ({ children }) => {
  const components = {};

  return (
    <ReactMDXProvider components={components}>{children}</ReactMDXProvider>
  );
};

export default MDXProvider;
