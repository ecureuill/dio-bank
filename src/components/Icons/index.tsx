import { PropsWithChildren } from 'react';
import './styles.css';

const Icons = ( {children}: PropsWithChildren): JSX.Element => {
	return (
		<span aria-hidden='true' className='material-icon'>{children}</span>
	);
};

export default Icons;