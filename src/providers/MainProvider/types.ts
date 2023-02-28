import { Dispatch, SetStateAction } from 'react';
import { RefRProps } from '../../interfaces/useQueryPip.interface';

export interface IMainContext<T> {
  globalCache: RefRProps<T>;
  setGlobalCache: Dispatch<SetStateAction<RefRProps<T>>>;
}
