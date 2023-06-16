import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

interface IThemeContext {
	isDarkmode: boolean,
	toogleTheme: () => void
}

export const themeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = ({children}: PropsWithChildren) => {

	const [isDarkmode, setIsDarkmode] = useState(false);
	const theme = isDarkmode ? 'borealTheme' : 'summerTheme';

	const toogleTheme = () => {
		localStorage.setItem('@APP:theme', JSON.stringify((!isDarkmode)));
		setIsDarkmode(!isDarkmode);
	};

	useEffect(() => {
		const val = localStorage.getItem('@codechella:theme');
		if(val!== null)
			setIsDarkmode(JSON.parse(val));
	}, []); 
	
	return (
		<themeContext.Provider value={{isDarkmode, toogleTheme}}>
			<Helmet>
				<body className={theme}/>
			</Helmet>
			{children}
		</themeContext.Provider>
	);
};