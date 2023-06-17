import { faker } from '@faker-js/faker/locale/pt_BR';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Context as ResponsiveContext } from 'react-responsive';
import Header from '.';
import { AllTheProvidersAutheticated } from '../../@types/wrapper';


describe('Header', () => {
	
	const MOBILE_MAX_WIDTH = 480;
	
	it('should render a header', () => {
		render(<Header/>);

		expect(screen.getByRole('banner')).toBeInTheDocument();
	});
	
	describe('on Mobile', () => {
		
		it('should render a button named menu', () => {
			render(
				<ResponsiveContext.Provider value={{ width: faker.number.int({max: MOBILE_MAX_WIDTH}) }}>
					<AllTheProvidersAutheticated>
						<Header />
					</AllTheProvidersAutheticated>
				</ResponsiveContext.Provider>
			);

			expect(screen.getByRole('button', { name: 'menu'})).toBeInTheDocument();
		});
		
		it('should render a button with description [abrir menu]', () => {
			render(
				<ResponsiveContext.Provider value={{ width: faker.number.int({max: MOBILE_MAX_WIDTH}) }}>
					<AllTheProvidersAutheticated>
						<Header />
					</AllTheProvidersAutheticated>
				</ResponsiveContext.Provider>
			);

			expect(screen.getByRole('button', { description: 'abrir menu'})).toBeInTheDocument();
		});
		
		it('should render a button with description [fechar menu] after click on menu button', async () => {
			const user = userEvent.setup();
			
			render(
				<ResponsiveContext.Provider value={{ width: faker.number.int({max: MOBILE_MAX_WIDTH}) }}>
					<AllTheProvidersAutheticated>
						<Header />
					</AllTheProvidersAutheticated>
				</ResponsiveContext.Provider>
			);

			const menu = screen.getByRole('button', { name: 'menu' });
			await user.click(menu);

			expect(screen.getByRole('button', { description: 'fechar menu'})).toBeInTheDocument();
		});
		
		it('should render navigation menu after click on menu button', async () => {
			const user = userEvent.setup();
			
			render(
				<ResponsiveContext.Provider value={{ width: faker.number.int({max: MOBILE_MAX_WIDTH}) }}>
					<AllTheProvidersAutheticated>
						<Header />
					</AllTheProvidersAutheticated>
				</ResponsiveContext.Provider>
			);

			const menu = screen.getByRole('button', { name: 'menu' });
			await user.click(menu);

			const nav = await screen.findByRole('navigation');

			expect(nav).toBeInTheDocument();
		});
		
		it('should render a button with description [abrir menu] after click on menu button 2 times', async () => {
			const user = userEvent.setup();
			
			render(
				<ResponsiveContext.Provider value={{ width: faker.number.int({max: MOBILE_MAX_WIDTH}) }}>
					<AllTheProvidersAutheticated>
						<Header />
					</AllTheProvidersAutheticated>
				</ResponsiveContext.Provider>
			);

			const menu = screen.getByRole('button', { name: 'menu' });
			await user.click(menu);

			await user.click(menu);

			expect(screen.getByRole('button', { description: 'abrir menu'})).toBeInTheDocument();
		});
	});

});