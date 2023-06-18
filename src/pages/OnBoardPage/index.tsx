import { fakerPT_BR } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { Carousel, Icons, Text } from '../../components';
import './styles.css';

const OnBoardPage = (): JSX.Element => {

	const [ show, setShow ] = useState(false);

	useEffect(() => {
		const id = setTimeout(() => {
			setShow(true);
		}, 2000);

		return () => clearTimeout(id);
	}, []);

	const data = ['pix','trending_up', 'verified_user'];
	const [current, setCurrent] = useState(0);

	return (
		<main className='OnBoardPage'>
			<div className='OnBoardPage__logo slide-corner  flex-col'>
				<div className='OnBoardPage__header' />
				{show && 
				<Carousel 
					total={data.length} 
					current={current}
					handleNext={()=> setCurrent(current+1)} 
					handlePrevious={()=> setCurrent(current-1)}
				>
					<figure className='OnBoardPage__figure'>
						<Icons className='OnBoardPage__icon'>{data[current]}</Icons>
						<figcaption className='OnBoardPage__caption'>
							<Text size='medium'>{fakerPT_BR.lorem.words({
								min: 1, max: 2	})}</Text><br/>
							<Text>{fakerPT_BR.lorem.sentence()}</Text>
						</figcaption>
					</figure>
				</Carousel>
				}
			</div>
		</main>
	);
};

export default OnBoardPage;