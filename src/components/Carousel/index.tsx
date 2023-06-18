import { PropsWithChildren, useContext } from 'react';
import { Button } from '../.';
import { LocaleContext } from '../../context/locale.context';
import './styles.css';

type CarouselProps = {
	current: number
	total: number
	handleNext: () => void
	handlePrevious: () => void
};

const Carousel = ( {children, current, total, handleNext, handlePrevious}: PropsWithChildren<CarouselProps>): JSX.Element => {

	const { resources } = useContext(LocaleContext);

	return (
		<div className='Carousel flex-col'>
			{children}
			<div className='flex-row Carousel__controls'>
				<Button disabled={current===0} onClick={handlePrevious}>{resources['controls.buttons.onboard.previous']}</Button>
				<Button disabled={current===total-1} onClick={handleNext}>{resources['controls.buttons.onboard.next']}</Button>
			</div>
		</div>
	);
};

export default Carousel;