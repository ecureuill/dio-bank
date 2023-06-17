import { PropsWithChildren } from 'react';
import {Button} from '../.';
import './styles.css';

type CarouselProps = {
	current: number
	total: number
	handleNext: () => void
	handlePrevious: () => void
};

const Carousel = ( {children, current, total, handleNext, handlePrevious}: PropsWithChildren<CarouselProps>): JSX.Element => {
	return (
		<div className='Carousel flex-col'>
			{children}
			<div className='flex-row Carousel__controls'>
				<Button disabled={current===0} onClick={handlePrevious}>Previous</Button>
				<Button disabled={current===total-1} onClick={handleNext}>Next</Button>
			</div>
		</div>
	);
};

export default Carousel;