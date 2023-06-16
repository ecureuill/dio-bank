import { Link } from 'react-router-dom';
import { Text } from '../.';
import Mobile from '../MediaQuery/Mobile';
import ThemeSwitcher from '../ThemeSwitcher';
import './styles.css';

type NavBarProps = {
	variant?: 'mobile' 
}

const NavBar = ({variant}: NavBarProps) => {
	return (

		<nav className={`NavBar ${variant === undefined? '': `NavBar--${variant}` }`}>
			<Mobile>
				<ThemeSwitcher />
			</Mobile>
			<Link to='/home' className='NavBar__item'>
				<Text bold={true}>Home</Text>
			</Link>
		</nav>
	);
};

export default NavBar;