import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icons, Mobile, NavBar } from '../.';
import useMediaQueries from '../../hooks/useMediaQueries';
import data from '../../l10n/pt-BR.json';
import TabletOrAbove from '../MediaQuery/TabletOrAbove';
import ThemeSwitcher from '../ThemeSwitcher';
import './styles.css';

const Header = (): JSX.Element => {

	const [ opened, setOpened ] = useState(false);

	const { isMediumVW } = useMediaQueries();
	const spanId = useId();

	return (
		<header className={`Header ${isMediumVW? 'Header--tablet': ''}`}>
			<TabletOrAbove>
				<ThemeSwitcher />
			</TabletOrAbove>
			<div className={`Header__menu ${isMediumVW? 'Header__menu--mediumVW': ''}`}>
				<Link to={'/'}>LOGO</Link>
				<Mobile>
					<Button 
						depth='2d'
						size='tiny'
						shape='icon'
						aria-label='menu'
						aria-describedby={spanId}
						onClick={() => setOpened(!opened)}
					>
						<Icons>menu</Icons>
						<span id={spanId} className='visuallyhidden'>
							{opened? data['controls.buttons.menu.close.description'] : data['controls.buttons.menu.open.description']}
						</span>
					</Button>
				</Mobile>
				<TabletOrAbove>
					<NavBar />
				</TabletOrAbove>
			</div>
			<Mobile>
				{opened && <NavBar variant='mobile' />}
			</Mobile>
		</header>
	);
};

export default Header;