'use client'
import { PickupLineContext } from '@/context/PickupLinesContext';

import React, { useState } from 'react';

const layout = ({ children }) => {
  const [pickupLines, setPickupLines] = useState([]);

  return (
    <PickupLineContext.Provider value={[ pickupLines, setPickupLines ]}>
      <div>{children}</div>
    </PickupLineContext.Provider>
  );
};

export default layout;
