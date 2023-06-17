import { FormEvent, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button, Input, Text } from '../../components';
import { AuthContext } from '../../context/auth.context';
import { LocaleContext } from '../../context/locale.context';

const LoginPage = (): JSX.Element => {

	const { signIn, authenticated } = useContext(AuthContext);
	const { resources } = useContext(LocaleContext);

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
			<Text variant='title-1' size='medium'>{resources['pages.login.heading.title']}</Text>
			<form className='flex-col gap-small' onSubmit={(e) => handleSubmit(e)}>
				<Input 
					required
					name='email'
					type='email'
					label={resources['controls.inputs.email.label']}/>
				<Input
					required
					name='password'
					type='password' 
					label={resources['controls.inputs.password.label']}/>

				<Button type='submit' size='fill'>{resources['controls.buttons.login.label']}</Button>
			</form>
			<Link to='/signup' className='center'>Cadastrar</Link>
		</>
	);
};

export default LoginPage;