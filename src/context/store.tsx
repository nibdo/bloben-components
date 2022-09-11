import React, { createContext, useEffect, useReducer } from 'react';
import Reducer from './reducer';

export interface StoreContext {
  isDark: boolean;
  isMobile: boolean;
}

const initialContext: StoreContext = {
  isDark: false,
  isMobile: false,
};

const BlobenComponentsProvider = ({ isDark, isMobile, children }: any) => {
  const [store, dispatch] = useReducer(Reducer, initialContext);

  useEffect(() => {
    dispatch({ type: 'isDark', payload: isDark });
  }, [isDark]);

  useEffect(() => {
    dispatch({ type: 'isMobile', payload: isMobile });
  }, [isMobile]);

  return (
    <Context.Provider value={[store, dispatch]}>{children}</Context.Provider>
  );
};

// @ts-ignore
export const Context: any = createContext();
export default BlobenComponentsProvider;
