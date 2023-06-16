import { useMediaQuery as umq } from 'react-responsive';

const useMediaQuery = (query: string): boolean => umq({ query });

const useMediaQueries = () => {
	const isSmallVW = useMediaQuery('(max-device-width: 549px)');
	const isMediumVW = useMediaQuery('(min-device-width: 550px) and (max-device-width: 1043px)');
	const isLargeVW = useMediaQuery('(min-device-width: 1044px)');

	return {
		isSmallVW,
		isMediumVW,
		isLargeVW
	};
};

export default useMediaQueries;