import React, { ReactNode } from 'react';

function Stepper({ children }:{children:ReactNode}) {
  return (
    <div className="flex flex-row space-x-2 border rounded-lg p-2
    bg-white
    "
    >
      {children}
    </div>
  );
}

export default Stepper;
