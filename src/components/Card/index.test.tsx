import { render, screen, within } from '@testing-library/react';
import Card from '.';

describe('Card component', () => {

	it('shoould render a title', () => {
		render(
			<Card 
				image={''} 
				title={'Um título'} 
				content={'Um conteúdo'}			
			/>
		);

		expect(within(screen.getByRole('heading')).getByText('Um título')).toBeInTheDocument();
	});

	it('shoould render a title with class Card__title', () => {
		render(
			<Card 
				image={''} 
				title={'Um título'} 
				content={'Um conteúdo'}			
			/>
		);

		expect(within(screen.getByRole('heading')).getByText('Um título')).toHaveClass('Card__title');

	});

	it('shoould render a description', () => {
		render(
			<Card 
				image={''} 
				title={'Um título'} 
				content={'Um conteúdo'}			
			/>
		);

		expect(screen.getByText('Um conteúdo', { selector: 'p' })).toBeInTheDocument();

	});

	it('shoould render a title with class Card__description', () => {
		render(
			<Card 
				image={''} 
				title={'Um título'} 
				content={'Um conteúdo'}			
			/>
		);

		expect(screen.getByText('Um conteúdo', { selector: 'p' })).toHaveClass('Card__description');

	});

	it('shoould render a button', () => {
		render(
			<Card 
				image={''} 
				title={'Um título'} 
				content={'Um conteúdo'}	
				action={<button>Um botão</button>}		
			/>
		);

		expect(screen.getByText('Um botão', { selector: 'button' })).toBeInTheDocument();

	});

	it('shoould render a button with class Card__action', () => {
		render(
			<Card 
				image={''} 
				title={'Um título'} 
				content={'Um conteúdo'}			
				action={<button>Um botão</button>}		
			/>
		);

		expect(screen.getByText('Um botão', { selector: 'button' }).closest('div')).toHaveClass('Card__action');
	});
});