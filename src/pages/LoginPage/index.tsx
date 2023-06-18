import { FormEvent, useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button, Form, Header, Icons, Input } from '../../components';
import { AuthContext } from '../../context/auth.context';
import { LocaleContext } from '../../context/locale.context';
import { FormDataState } from '../../utils/types';

const LoginPage = (): JSX.Element => {

	const { resources } = useContext(LocaleContext);
	const { signIn, error, authenticated } = useContext(AuthContext);
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

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		await signIn(data.get('email') as string, data.get('password') as string);
	};

	if (authenticated) {
		return <Navigate to="/" replace />;
	}

	return (
		<>
			<Header bg='transparent' />
			<main>
				<Icons size='medium'>fingerprint</Icons>
				<Form 
					title={resources['pages.login.heading.title']}
					handleSubmit={handleSubmit}
					setFormData={setFormData}
					error={error}
				>
					<>
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

						<Button type='submit' size='fill'>{resources['controls.buttons.login.label']}</Button>
					</>
				</Form>
				<Link to='/signup' className='center'>Cadastrar</Link>
			</main>
		</>
	);
};

export default LoginPage;