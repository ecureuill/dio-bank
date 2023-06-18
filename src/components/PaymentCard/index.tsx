import { useContext } from 'react';
import { Icons, Text } from '../.';
import { LocaleContext } from '../../context/locale.context';
import './styles.css';

const PaymentCard = (): JSX.Element => {
	const { resources } = useContext(LocaleContext);

	return (
		<div className='PaymentCard wrapper shadow flex-row space-between gap-small'>
			<Icons className='PaymentCard__add' size='tiny'>add_circle</Icons>
			<Text size='tiny' className={'PaymentCard__description'}>{resources['components.payment_card.description']}</Text>
			<Icons className='PaymentCard__calendar' size='small'>today</Icons>
		</div> 
	);
};

export default PaymentCard;