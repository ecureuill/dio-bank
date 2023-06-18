import { FormEvent, useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button, Form, Header, Input } from '../../components';
import { AuthContext } from '../../context/auth.context';
import { LocaleContext } from '../../context/locale.context';
import { FormDataState } from '../../utils/types';

const SignUpPage = (): JSX.Element => {

	const { resources } = useContext(LocaleContext);
	const { authenticated } = useContext(AuthContext);
	const [formData, setFormData] = useState<{
		[key: string]: FormDataState,
	}>({
		email: {
			valid: false,
			value: '', 
		},
		password: {
			valid: false,
			value: '', 
		}
	});

	if (authenticated) {
		return <Navigate to="/" replace />;
	}

	return (
		<>
			<Header bg='transparent'/>
			<main>
				<Form 
					title={resources['pages.signup.heading.title']}
					setFormData={setFormData}
					error={''} 
					handleSubmit={function (event: FormEvent<HTMLFormElement>): void {
						event.preventDefault();
						throw new Error('Function not implemented.');
					} }				
				>
					<>
						<Input 
							required
							name='name'
							type='text'
							label={resources['controls.inputs.fullname.label']}
							aria-required={true}
							aria-errormessage={formData?.['name']?.errormessage}
							errormessage={formData?.['name']?.errormessage}
							aria-invalid={!formData?.['name']?.valid}
						/>
						<Input 
							required
							name='cpf'
							type='text'
							label={resources['controls.inputs.cpf.label']}
							aria-required={true}
							aria-errormessage={formData?.['cpf']?.errormessage}
							errormessage={formData?.['cpf']?.errormessage}
							aria-invalid={!formData?.['cpf']?.valid}
						/>
						<Input 
							required
							name='email'
							type='email'
							label={resources['controls.inputs.email.label']}
							aria-required={true}
							aria-errormessage={formData?.['email']?.errormessage}
							errormessage={formData?.['email']?.errormessage}
							aria-invalid={!formData?.['email']?.valid}
						/>
						<Input
							required
							name='password'
							type='password' 
							label={resources['controls.inputs.password.label']}
							aria-errormessage={formData?.['password']?.errormessage}
							errormessage={formData?.['password']?.errormessage}
							aria-invalid={!formData?.['password']?.valid}
						/>
						<Input
							required
							name='password-redo'
							type='password' 
							label={resources['controls.inputs.password_redo.label']}
							aria-errormessage={formData?.['password-redo']?.errormessage}
							errormessage={formData?.['password-redo']?.errormessage}
							aria-invalid={!formData?.['password-redo']?.valid}
						/>

						<Button type='submit' size='fill'>{resources['controls.buttons.signup.label']}</Button>
					</>
				</Form>
				<Link to='/login' className='center'>{resources['pages.signup.link.already_user']}</Link>
			</main>
		</>
	);
};

export default SignUpPage;