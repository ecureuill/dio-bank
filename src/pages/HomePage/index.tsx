import { Balance, Button, Icons, Text } from '../../components';
import PaymentCard from '../../components/PaymentCard';

const HomePage = (): JSX.Element => {

	// const { resources } = useContext(LocaleContext);

	return (
		<>
			<Balance title='Seu saldo' amount={-200}/>
			<Balance title='Sua fatura atual' amount={5045.87}/>
			<PaymentCard />
			<div className='flex-row gap-small all-center wrap'>
				<Button className='flex-col' size='narrow'><Icons>pix</Icons><Text size='tiny'>PIX</Text></Button>
				<Button className='flex-col' size='narrow'><Icons>payments</Icons><Text size='tiny'>Pagar</Text></Button>
				<Button className='flex-col' size='narrow'><Icons>savings</Icons><Text size='tiny'>Cofrinho</Text></Button>
				<Button className='flex-col' size='narrow'><Icons>credit_card</Icons><Text size='tiny'>Cartões</Text></Button>
				<Button className='flex-col' size='narrow'><Icons>currency_bitcoin</Icons><Text size='tiny'>Bitcoin</Text></Button>
				<Button className='flex-col' size='narrow'><Icons>atm</Icons><Text size='tiny'>Saque</Text></Button>
				<Button className='flex-col' size='narrow'><Icons>attach_money</Icons><Text size='tiny'>Depósito</Text></Button>
			</div>
		</>
	);
};

export default HomePage;