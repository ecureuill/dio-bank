import Text from '../Text';
import './styles.css';

type BalanceProps = {
	amount: number
	title: string
};

const Balance = ( {amount, title}: BalanceProps): JSX.Element => {
	return (
		<div className='Balance wrapper shadow flex-col'>
			<Text className='Balance__title' size='tiny'>{title}</Text>
			<Text className={`Balance__value ${amount < 0 && 'Balance__value--negative'}`} size='medium'>R${amount.toFixed(2)}</Text>
		</div> 
	);
};

export default Balance;