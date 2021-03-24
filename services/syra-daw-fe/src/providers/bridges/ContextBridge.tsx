import React, { PropsWithChildren, ReactNode } from 'react';

interface Props {
  Context: React.Context<any>;
  render: (children: ReactNode) => JSX.Element;
}

function ContextBridge({ children, Context, render }: PropsWithChildren<Props>) {
  return (
    <Context.Consumer>
      {(value) => render(<Context.Provider value={value}>{children}</Context.Provider>)}
    </Context.Consumer>
  );
}

export default ContextBridge;
