import { ReactComponent as Logo } from '../../assets/logo-caption.svg';
import './styles.css';

const OnBoardPage = (): JSX.Element => {
	return (
		<main className='OnBoardPage'>
			<Logo className='OnBoardPage__logo slide-corner'/>
		</main>
	);
};

export default OnBoardPage;