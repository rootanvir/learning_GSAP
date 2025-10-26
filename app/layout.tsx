import React, { FC, ReactNode } from 'react';

interface Props {
  children:ReactNode;
}

const RootLayer: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="ico" type="images/svg+xml" href='/images/logo.png'/>
      </head>
      <body className="bg-white">
        <div>
        </div>
        {children}
      </body>
    </html>
  );
};


export default RootLayer;