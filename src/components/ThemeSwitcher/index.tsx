import { useContext } from 'react';
import {Button, Icons} from '../.';
import { ThemeContext } from '../../context/theme.context';

const ThemeSwitcher = (): JSX.Element => {
	const { toogleTheme, isDarkmode } = useContext(ThemeContext);

	return (
		<Button className='ThemeSwitcher' size='icon' onClick={() => toogleTheme()} >
			{
				isDarkmode? 
					<Icons>sunny</Icons>
					:
					<Icons className='material-icon--dark'>dark_mode</Icons>
			}
		</Button>
	);
};

export default ThemeSwitcher;