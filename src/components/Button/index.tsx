import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import './styles.css';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	size?: 'fill' | 'icon'
}

const Button = ( {size, children, className,...props}: PropsWithChildren<ButtonProps>): JSX.Element => {
	return (
		<button 
			className={`
				Button 
				${size? `Button--${size}`: ''} 
				${className? className: ''}`} 
			{...props} >
			{children}
		</button>
	);
};

export default Button;