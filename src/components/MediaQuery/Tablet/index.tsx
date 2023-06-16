import { PropsWithChildren } from 'react';
import useMediaQueries from '../../../hooks/useMediaQueries';

const Tablet = ({ children } : PropsWithChildren) : JSX.Element =>  {
	const { isMediumVW } = useMediaQueries();
	
	return (
		<>
			{isMediumVW && children}
		</>
	);
};

export default Tablet;