import { fakerPT_BR } from '@faker-js/faker';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Icons, Text } from '../../components';
import { LocaleContext } from '../../context/locale.context';
import './styles.css';

const OnBoardPage = (): JSX.Element => {

	const { resources } = useContext(LocaleContext);
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
				<>
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

					<Link to='/login'>{resources['controls.buttons.onboard.get_started']}</Link>
				</>
				}
			</div>
		</main>
	);
};

export default OnBoardPage;