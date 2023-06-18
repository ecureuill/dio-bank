import { Text, Icons } from '../.';
import './styles.css';

const PaymentCard = (): JSX.Element => {
	return (
		<div className='PaymentCard wrapper shadow flex-row space-between gap-small'>
			<Icons className='PaymentCard__add' size='tiny'>add_circle</Icons>
			<Text size='tiny' className={'PaymentCard__description'}>Agende um pagamento</Text>
			<Icons className='PaymentCard__calendar' size='small'>today</Icons>
		</div> 
	);
};

export default PaymentCard;