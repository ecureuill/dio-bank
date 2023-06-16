import { PropsWithChildren, ReactNode, useId, useState } from 'react';
import { Button, Icons, Text } from '../.';
import './styles.css';

type AccordionProps = {
	regions: {
		title: string,
		content: ReactNode
	}[]
};

const Accordion = ( {regions}: PropsWithChildren<AccordionProps>): JSX.Element => {
	return (
		<div className='Accordion'>
			{
				regions.map(region =>
					<Section title={region.title}>
						{region.content}
					</Section>
				)
			}
		</div>
	);
};

type SectionProps = {
	title: string,
	expanded?: boolean
}
const Section = ({title, children}: PropsWithChildren<SectionProps>): JSX.Element => {
	const idTitle = useId();
	const idPannel = useId();
	const [expanded, setExpanded] = useState(false);
	return (
		<>
			<Text variant='title-3' className='Accordion__title'>
				<Button  className='Accordion__trigger'
					size='fill'
					shape='rectangle'
					depth='2d'
					align='space-between'
					id={idTitle}
					aria-expanded={expanded}
					aria-controls={idPannel}
					onClick={() => setExpanded(!expanded)}
				>
					<span>{title}</span>
					<span>
						{expanded? <Icons>expand_less</Icons> : <Icons>expand_more</Icons>}
					</span>
				</Button>
			</Text>
			<div className='Accordion__pannel'
				id={idPannel}
				role='region'
				aria-labelledby={idTitle}
				hidden={!expanded}
			>
				<Text>{children}</Text>
			</div>
		</>
	);
};

export default Accordion;