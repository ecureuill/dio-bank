import { FormEvent, PropsWithChildren, SetStateAction } from 'react';
import { Icons, Text} from '../.';
import { FormDataState } from '../../utils/types';
import './styles.css';

type FormProps = {
	title: string;
	error: string;
	handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
	setFormData: React.Dispatch<SetStateAction<{[key: string]: FormDataState}>>
};

const Form = ( {children, title, error, handleSubmit, setFormData}: PropsWithChildren<FormProps>): JSX.Element => {

	const updateFormState = (event: FormEvent<HTMLFormElement>) => {
		if(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)
		{
			const target = event.target as HTMLInputElement;

			setFormData((prev) => {

				return {
					...prev,
					[target.name]: {
						value: target.value,
						valid: target.validity.valid,
						errormessage: target.validationMessage
					},
				};
			});
		}
	};


	return (
		// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
		<form className='flex-col gap-small' 
			onSubmit={handleSubmit}
			onChange={updateFormState}
			onBlur={updateFormState}
		>
			<Text variant='title-1' size='medium'>{title}</Text>
			{error !== '' && <>
				
				<Text className='Form__errortext'><Icons>warning</Icons>{error}</Text>
			</>
			}
				
			{children}
		</form>
	);
};

export default Form;