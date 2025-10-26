import React, { FC, ReactNode } from 'react';

interface Props {
  children:ReactNode;
}

const RootLayer: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white">
        <div>
        </div>
        {children}
      </body>
    </html>
  );
};


export default RootLayer;