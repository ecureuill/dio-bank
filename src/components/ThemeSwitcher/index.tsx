import { useContext } from 'react';
import {Button, Icons} from '../.';
import { themeContext } from '../../context/theme.context';

const ThemeSwitcher = (): JSX.Element => {
	const { toogleTheme, isDarkmode } = useContext(themeContext);

	return (
		<Button className='ThemeSwitcher' shape='icon' size='tiny' depth='2d' onClick={() => toogleTheme()} >
			{
				isDarkmode? 
					<Icons>sunny</Icons>
					:
					<Icons>dark_mode</Icons>
			}
		</Button>
	);
};

export default ThemeSwitcher;