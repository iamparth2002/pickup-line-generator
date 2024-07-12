'use client'
import { PickupLineContext } from '@/context/PickupLinesContext';
import React, { useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Define the type for the context value
type PickupLineContextType = [string[], Dispatch<SetStateAction<string[]>>];

// Define the type for the component props
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [pickupLines, setPickupLines] = useState<string[]>([]);

  return (
    <PickupLineContext.Provider value={[pickupLines, setPickupLines] as PickupLineContextType}>
      <div>{children}</div>
    </PickupLineContext.Provider>
  );
};

export default Layout;
