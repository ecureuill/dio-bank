import { useContext } from 'react';
import { LocaleContext } from '../../context/locale.context';

const HomePage = (): JSX.Element => {

	const { resources } = useContext(LocaleContext);

	return (
		<>
			<h1>{resources['pages.home.heading.title']}</h1>
			<h2>{resources['pages.home.heading.subtitle']}</h2>
		</>
	);
};

export default HomePage;