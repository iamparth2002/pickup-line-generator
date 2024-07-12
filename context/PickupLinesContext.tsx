import { createContext, Dispatch, SetStateAction } from 'react';

// Define the type for the context value
type PickupLineContextType = [string[], Dispatch<SetStateAction<string[]>>];

// Create context with an initial value of an empty array and a no-op function
export const PickupLineContext = createContext<PickupLineContextType>([[], () => {}]);