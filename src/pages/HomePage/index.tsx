import { useContext } from 'react';
import { Balance, Button, Icons, Text } from '../../components';
import PaymentCard from '../../components/PaymentCard';
import { LocaleContext } from '../../context/locale.context';

const HomePage = (): JSX.Element => {

	const { resources } = useContext(LocaleContext);

	return (
		<>
			<Balance title={resources['pages.home.heading.account_balance']} amount={-200}/>
			<Balance title={resources['pages.home.heading.card_balance']} amount={5045.87}/>
			<PaymentCard />
			<div className='flex-row gap-small all-center wrap'>
				<Button className='flex-col' size='narrow'><Icons>pix</Icons><Text size='tiny'>{resources['controls.buttons.pix.label']}</Text></Button>
				<Button className='flex-col' size='narrow'><Icons>payments</Icons><Text size='tiny'>{resources['controls.buttons.payment.label']}</Text></Button>
				<Button className='flex-col' size='narrow'><Icons>savings</Icons><Text size='tiny'>{resources['controls.buttons.savings.label']}</Text></Button>
				<Button className='flex-col' size='narrow'><Icons>credit_card</Icons><Text size='tiny'>{resources['controls.buttons.credit_cards.label']}</Text></Button>
				<Button className='flex-col' size='narrow'><Icons>currency_bitcoin</Icons><Text size='tiny'>{resources['controls.buttons.bitcoin.label']}</Text></Button>
				<Button className='flex-col' size='narrow'><Icons>atm</Icons><Text size='tiny'>{resources['controls.buttons.withdraw.label']}</Text></Button>
				<Button className='flex-col' size='narrow'><Icons>attach_money</Icons><Text size='tiny'>{resources['controls.buttons.attach_money.label']}</Text></Button>
			</div>
		</>
	);
};

export default HomePage;