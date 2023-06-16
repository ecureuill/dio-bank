import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import './styles.css';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	depth?: '3d' | '2d'
	shape?: 'pill' | 'rectangle' | 'icon'
	size?: 'fill' | 'tiny' | 'default'
	align?: 'space-between' | 'center'
}

const Button = ( {align = 'center', children, size='default', shape='rectangle', depth= '3d', className,...props}: PropsWithChildren<ButtonProps>): JSX.Element => {
	return (
		<button 
			className={`
				Button 
				Button--${shape} 
				Button--${depth} 
				Button--${size} 
				${className}`} 
			{...props} >
			<div className={`
				Button__content
				Button__content--${align}
			`} 
			>
				{children}
			</div>
		</button>
	);
};

export default Button;