import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Button', () =>{

	it('should render a button element', () => {
		render(<Button />);

		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('should render a button element with text', () => {
		render(
			<Button>
				Teste
			</Button>
		);
		expect(screen.getByText('Teste', { selector: 'button' })).toBeInTheDocument();
	});

	it('should render a button element with Button--fill class', () => {
		render(
			<Button size='fill' />
		);

		expect(screen.getByRole('button')).toHaveClass('Button Button--fill');
	});

	it('should render a button element with Button--icon class', () => {
		render(
			<Button size='icon' />
		);

		expect(screen.getByRole('button')).toHaveClass('Button Button--icon');
	});
});