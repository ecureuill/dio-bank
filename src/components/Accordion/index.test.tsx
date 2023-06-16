import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Accordion from '.';

describe('Accordion', () => {

	it('should render a button within title', () => {
		render(
			<Accordion regions={[
				{
					title: 'Section 1',
					content: <p>Hello Section 1</p>
				}
			]}
			/>
		);

		expect(within(screen.getByRole('heading')).getByRole('button', {
			name: 'Section 1',
		})).toBeInTheDocument();
	});

	it('should render a button wthin title with aria-expanded=false attribute', () => {
		render(
			<Accordion regions={[
				{
					title: 'Section 1',
					content: <p>Hello Section 1</p>
				}
			]}
			/>
		);

		expect(within(screen.getByRole('heading')).getByRole('button', {
			name: 'Section 1',
			expanded: false
		})).toBeInTheDocument();
	});

	it('should render a button within title with aria-controls attribute', () => {
		render(
			<Accordion regions={[
				{
					title: 'Section 1',
					content: <p>Hello Section 1</p>
				}
			]}
			/>
		);

		expect(within(screen.getByRole('heading')).getByRole('button', {
			name: 'Section 1',
		})).toHaveAttribute('aria-controls');
	});

	it('should render accordion content when button within title is clicked', async () => {
		const user = userEvent.setup();

		render(
			<Accordion regions={[
				{
					title: 'Section 1',
					content: <p>Hello Section 1</p>
				}
			]}
			/>
		);

		const button = screen.getByRole('button', {name: 'Section 1' });
		await user.click(button);

		expect(within(await screen.findByRole('region')).getByText('Hello Section 1')).toBeInTheDocument();

	});
	
	it('should render a button wthin title with aria-expanded=true attribute after button is clicked', async () => {
		const user = userEvent.setup();

		render(
			<Accordion regions={[
				{
					title: 'Section 1',
					content: <p>Hello Section 1</p>
				}
			]}
			/>
		);

		const button = screen.getByRole('button', {name: 'Section 1' });
		await user.click(button);

		expect(within(screen.getByRole('heading')).getByRole('button', {
			name: 'Section 1',
			expanded: true
		})).toBeInTheDocument();
	});
});