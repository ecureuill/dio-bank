import { PropsWithChildren } from 'react';
import './styles.css';

const Icons = ( {children}: PropsWithChildren): JSX.Element => {
	return (
		<span className='material-icon'>{children}</span>
	);
};

export default Icons;