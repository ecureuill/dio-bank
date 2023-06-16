import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker/locale/pt_BR';
import Text from '.';

describe('Text component', () => {

	it('should render h1 element when variant=title-1', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='title-1'>
				{ sentence }
			</Text>
		);

		const heading = screen.getByText(sentence, { selector: 'h1'	});

		expect(heading).toBeInTheDocument();
	});

	it('should render h1 element with class Text--big variant=title-1 and size is not defined', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='title-1'>
				{ sentence }
			</Text>
		);

		const heading = screen.getByText(sentence, { selector: 'h1'	});

		expect(heading).toHaveClass('Text--big');
	});

	it('should render h2 element when variant=title-2', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='title-2'>
				{ sentence }
			</Text>
		);

		const heading = screen.getByText(sentence, { selector: 'h2'	});

		expect(heading).toBeInTheDocument();

	});

	it('should render h2 element with class Text--largest when variant=title-2 and size is not defined', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='title-2'>
				{ sentence }
			</Text>
		);

		const heading = screen.getByText(sentence, { selector: 'h2'	});

		expect(heading).toHaveClass('Text--largest');

	});

	it('should render h3 element when variant=title-3', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='title-3'>
				{ sentence }
			</Text>
		);

		const heading = screen.getByText(sentence, { selector: 'h3'	});

		expect(heading).toBeInTheDocument();

	});
	
	it('should render h3 element with class Text--large when variant=title-3 and size is not defined', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='title-3'>
				{ sentence }
			</Text>
		);

		const heading = screen.getByText(sentence, { selector: 'h3'	});

		expect(heading).toHaveClass('Text--large');

	});

	it('should render p element when variant=paragraph', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='paragraph'>
				{ sentence }
			</Text>
		);

		const paragraph = screen.getByText(sentence, { selector: 'p'	});

		expect(paragraph).toBeInTheDocument();

	});

	it('should render p element with class Text--normal when variant=paragraph and size is not defined', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='paragraph'>
				{ sentence }
			</Text>
		);

		const paragraph = screen.getByText(sentence, { selector: 'p'	});

		expect(paragraph).toHaveClass('Text--normal');

	});

	it('should render with class Text--tiny when size=tiny', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='paragraph' size='tiny'>
				{ sentence }
			</Text>
		);

		const paragraph = screen.getByText(sentence, { selector: 'p'	});

		expect(paragraph).toHaveClass('Text--tiny');

	});

	it('should render with class Text--small when size=small', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='paragraph' size='small'>
				{ sentence }
			</Text>
		);

		const paragraph = screen.getByText(sentence, { selector: 'p'	});

		expect(paragraph).toHaveClass('Text--small');

	});

	it('should render with class Text--medium when size=medium', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='paragraph' size='medium'>
				{ sentence }
			</Text>
		);

		const paragraph = screen.getByText(sentence, { selector: 'p'	});

		expect(paragraph).toHaveClass('Text--medium');

	});

	it('should render with class Text--large when size=large', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='paragraph' size='large'>
				{ sentence }
			</Text>
		);

		const paragraph = screen.getByText(sentence, { selector: 'p'	});

		expect(paragraph).toHaveClass('Text--large');

	});

	it('should render with class Text--largest when size=largest', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='paragraph' size='largest'>
				{ sentence }
			</Text>
		);

		const paragraph = screen.getByText(sentence, { selector: 'p'	});

		expect(paragraph).toHaveClass('Text--largest');

	});

	it('should render with class Text--big when size=big', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='paragraph' size='big'>
				{ sentence }
			</Text>
		);

		const paragraph = screen.getByText(sentence, { selector: 'p'	});

		expect(paragraph).toHaveClass('Text--big');

	});
});