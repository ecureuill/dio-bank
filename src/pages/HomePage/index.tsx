import { useContext } from 'react';
import { localeContext } from '../../context/locale.context';

const HomePage = (): JSX.Element => {

	const { resources } = useContext(localeContext);

	return (
		<>
			<h1>{resources['pages.home.heading.title']}</h1>
			<h2>{resources['pages.home.heading.subtitle']}</h2>
		</>
	);
};

export default HomePage;