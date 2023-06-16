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
		expect(screen.getByText('Teste', { selector: 'div' })).toBeInTheDocument();
	});

	it('should render a button element with Button--fill class', () => {
		render(
			<Button size='fill' />
		);

		expect(screen.getByRole('button')).toHaveClass('Button Button--fill');
	});

	it('should render a button element with Button--tiny class', () => {
		render(
			<Button size='tiny' />
		);

		expect(screen.getByRole('button')).toHaveClass('Button Button--tiny');
	});

	it('should render a button element with Button--default class', () => {
		render(
			<Button size='default' />
		);

		expect(screen.getByRole('button')).toHaveClass('Button Button--default');
	});

	it('should render a button element with Button--3d class', () => {
		render(
			<Button depth='3d' />
		);

		expect(screen.getByRole('button')).toHaveClass('Button Button--3d');
	});

	it('should render a button element with Button--3d class as default', () => {
		render(
			<Button/>
		);

		expect(screen.getByRole('button')).toHaveClass('Button Button--3d');
	});

	it('should render a button element with Button--2d class', () => {
		render(
			<Button depth='2d' />
		);

		expect(screen.getByRole('button')).toHaveClass('Button Button--2d');
	});

	it('should render a button element with Button--icon class', () => {
		render(
			<Button shape='icon' />
		);

		expect(screen.getByRole('button')).toHaveClass('Button Button--icon');
	});

	it('should render a button element with Button--pill class', () => {
		render(
			<Button shape='pill' />
		);

		expect(screen.getByRole('button')).toHaveClass('Button Button--pill');
	});

	it('should render a button element with Button--rectangle class', () => {
		render(
			<Button shape='rectangle' />
		);

		expect(screen.getByRole('button')).toHaveClass('Button Button--rectangle');
	});

	it('should render a button element with Button__content--center class', () => {
		render(
			<Button align='center'>content</Button>
		);

		expect(screen.getByText('content')).toHaveClass('Button__content--center');
	});

	it('should render a button element with Button__content--space-between class', () => {
		render(
			<Button align='space-between'>content</Button>
		);

		expect(screen.getByText('content')).toHaveClass('Button__content--space-between');
	});
});