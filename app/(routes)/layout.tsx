'use client'
import { PickupLineContext } from '@/context/PickupLinesContext';
import React, { useState, ReactNode } from 'react';

// Define the type for the component props
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [pickupLines, setPickupLines] = useState<string[]>([]);

  return (
    <PickupLineContext.Provider value={[pickupLines, setPickupLines]}>
      <div>{children}</div>
    </PickupLineContext.Provider>
  );
};

export default Layout;
