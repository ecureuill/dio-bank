import { PropsWithChildren } from 'react';
import './styles.css';

type IconsProps = {
	className?: string
	size?: 'large' | 'medium' | 'small' | 'tiny'
};

const Icons = ( {children, className, size}: PropsWithChildren<IconsProps>): JSX.Element => {
	return (
		<span aria-hidden='true' 
			className={`material-icon 
				${className? className: ''}
				${size? `material-icon--${size}`: ''}`}
		>
			{children}
		</span>
	);
};

export default Icons;