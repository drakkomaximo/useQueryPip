import { useEffect, useRef, useReducer } from 'react';
import { InitialStateProps, RefRProps, ActionProps } from '../interfaces/useQueryPip.interface';

export const useQueryPip = <T>(cacheKey: string, fecthFunc: () => Promise<T>): InitialStateProps<T> => {
	const cache = useRef<RefRProps<T>>({});

	const initialState: InitialStateProps<T> = {
		status: false,
		error: null,
		data: null,
	};

	const reducer = (state: InitialStateProps<T>, action: ActionProps<T>): InitialStateProps<T> => {
		switch (action.type) {
			case 'FETCHING':
				return { ...initialState, status: action.status };
			case 'FETCHED':
				return { ...initialState, status: action.status, data: action.result };
			case 'FETCH_ERROR':
				return { ...initialState, status: action.status, error: action.error };
			default:
				return state;
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		let cancelRequest = false;
		if (!cacheKey || !cacheKey.trim()) return;

		const fetchData = async () => {
			dispatch({ type: 'FETCHING', status: false });
			if (cache.current[cacheKey]) {
				const data = cache.current[cacheKey];
				dispatch({ type: 'FETCHED', status: true, result: data });
			} else {
				try {
					const data = await fecthFunc();
					cache.current[cacheKey] = data;
					if (cancelRequest) return;
					dispatch({ type: 'FETCHED', status: true, result: data });
				} catch (error: any) {
					if (cancelRequest) return;
					dispatch({ type: 'FETCH_ERROR', status: false, error: 'Error al cargar los datos' });
				}
			}
		};

		fetchData();

		return function cleanup() {
			cancelRequest = true;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cacheKey]);

	return { ...state };
};
