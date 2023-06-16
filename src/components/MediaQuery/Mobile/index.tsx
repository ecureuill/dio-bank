import { PropsWithChildren } from 'react';
import useMediaQueries from '../../../hooks/useMediaQueries';

const Mobile = ({ children } : PropsWithChildren) : JSX.Element =>  {
	const { isSmallVW } = useMediaQueries();
	
	return (
		<>
			{isSmallVW && children}
		</>
	);
};

export default Mobile;