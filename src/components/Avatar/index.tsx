import { faker } from '@faker-js/faker/locale/pt_BR';
import './styles.css';

const Avatar = (): JSX.Element => {

	return (
		<img className='Avatar' src={faker.internet.avatar()} alt={faker.person.firstName()} />
	);
};

export default Avatar;