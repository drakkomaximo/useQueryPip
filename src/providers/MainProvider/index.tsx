import { createContext, useState } from 'react';

import { IMainContext } from './types';

export const MainContext = createContext<IMainContext<any>>({
  globalCache: {},
  setGlobalCache: () => null,
});

type MainProviderProps = {
  children?: React.ReactNode;
};
export const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const [globalCache, setGlobalCache] = useState<any>(null);

  return <MainContext.Provider value={{ globalCache, setGlobalCache }}>{children}</MainContext.Provider>;
};
