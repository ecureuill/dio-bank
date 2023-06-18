//style sheets
import './styles/elements/base.css';
import './styles/generics/normalize.css';
import './styles/settings/settings.css';
import './styles/utilities/utils.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { LocaleContextProvider } from './context/locale.context';
import { ThemeProvider } from './context/theme.context';
import { AuthProvider } from './context/auth.context';
import Router from './routers';

if (process.env['NODE_ENV'] !== 'production') {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<LocaleContextProvider>
			<AuthProvider>
				<ThemeProvider>
					<Router />
				</ThemeProvider>
			</AuthProvider>
		</LocaleContextProvider>
	</React.StrictMode>
);