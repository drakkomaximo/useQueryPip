import { useEffect, useRef, useReducer } from 'react';
import { InitialStateProps, useQueryPipProps } from '../interfaces/useQueryPip.interface';

export const useQueryPip = ({ cacheKey }: useQueryPipProps): InitialStateProps => {
	const cache = useRef<any>({});

	const initialState: InitialStateProps = {
		status: 'idle',
		error: null,
		data: null,
	};

	const [state, dispatch] = useReducer((state: InitialStateProps, action: any) => {
		switch (action.type) {
			case 'FETCHING':
				return { ...initialState, status: 'fetching' };
			case 'FETCHED':
				return { ...initialState, status: 'fetched', data: action.payload };
			case 'FETCH_ERROR':
				return { ...initialState, status: 'error', error: action.payload };
			default:
				return state;
		}
	}, initialState);

	useEffect(() => {
		let cancelRequest = false;
		if (!cacheKey || !cacheKey.trim()) return;

		const fetchData = async () => {
			dispatch({ type: 'FETCHING' });
			if (cache.current[cacheKey]) {
				const data = cache.current[cacheKey];
				dispatch({ type: 'FETCHED', payload: data });
			} else {
				try {
					const response = await fetch(`https://randomuser.me/api/?gender=${cacheKey}&results=5&inc=name,nat&noinfo`);
					const data = await response.json();
					cache.current[cacheKey] = data;
					if (cancelRequest) return;
					dispatch({ type: 'FETCHED', payload: data });
				} catch (error: any) {
					if (cancelRequest) return;
					dispatch({ type: 'FETCH_ERROR', payload: error.message });
				}
			}
		};

		fetchData();

		return function cleanup() {
			cancelRequest = true;
		};
	}, [cacheKey]);

	console.log(cache)

	return { ...state };
};
