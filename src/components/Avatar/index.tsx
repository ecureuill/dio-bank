import './styles.css';

type AvatarProps = {
	src: string,
	alt: string
}
const Avatar = ({src, alt}: AvatarProps): JSX.Element => {

	return (
		<img className='Avatar' src={src} alt={alt} />
	);
};

export default Avatar;