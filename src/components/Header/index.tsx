import { faker } from '@faker-js/faker/locale/pt_BR';
import { useContext, useId, useState } from 'react';
import { Avatar, Button, Icons, Text } from '../.';
import { AuthContext } from '../../context/auth.context';
import { LocaleContext } from '../../context/locale.context';
import './styles.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import ThemeSwitcher from '../ThemeSwitcher';
const Header = (): JSX.Element => {

	const { resources } = useContext(LocaleContext);
	const { authenticated } = useContext(AuthContext);

	const [ opened, setOpened ] = useState(false);

	const spanId = useId();

	return (
		<header className={'Header'}>
			{
				authenticated? 
					<>
						<div className={'Header__menubar flex-row'}>
							<Button 
								size='icon'
								aria-label={resources['controls.buttons.menu.label']}
								aria-describedby={spanId}
								onClick={() => setOpened(!opened)}
							>
								<Icons>menu</Icons>
								<span id={spanId} className='visuallyhidden'>
									{opened? resources['controls.buttons.menu.close.description'] : resources['controls.buttons.menu.open.description']}
								</span>
							</Button>
							<Avatar />
							<Icons>notifications</Icons>
						</div>
						<div className={'Header__salut'}>
							<Text size='medium'>
								{resources['components.heading.salut'].replace('%s', faker.person.firstName())}
							</Text>
						</div>
					</>
					:
					<Logo />
			}
			<ThemeSwitcher/>
		</header>
	);
};

export default Header;