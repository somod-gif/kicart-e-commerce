"use client";

import { Provider } from 'react-redux';
import { store } from './Store/store';  // Ensure path is correct

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
