import { useContext, useId, useState } from 'react';
import { Avatar, Button, Icons, Text } from '../.';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { AuthContext } from '../../context/auth.context';
import { LocaleContext } from '../../context/locale.context';
import ThemeSwitcher from '../ThemeSwitcher';
import './styles.css';
const Header = (): JSX.Element => {

	const { resources } = useContext(LocaleContext);
	const { authenticated, user } = useContext(AuthContext);

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
							<Avatar src={user!.avatar} alt={user!.name}/>
							<Icons>notifications</Icons>
						</div>
						<div className={'Header__salut'}>
							<Text size='medium'>
								{resources['components.heading.salut'].replace('%s', user!.name)}
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