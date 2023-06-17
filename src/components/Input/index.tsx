import { InputHTMLAttributes, useId } from 'react';
import { Text } from '../.';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string,
	errormessage?: string | undefined
}

const Input = ( {label, errormessage, ...props}: InputProps): JSX.Element => {
	const id = useId();
	return (
		<div className='Input'>
			<label htmlFor={id} className='Input__label'>
				<Text variant='paragraph' size='tiny'>{label}</Text>
			</label>
			<input id={id} className='Input__field' {...props}/>
			<Text className='Input__errortext error' role='alert' aria-live='assertive'>
				{errormessage}
			</Text>
		</div>
	);
};

export default Input;