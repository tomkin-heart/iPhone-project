import Icon from '@/components/Icon.js'
import Section from '@/components/Section.js'

const cards = [
	{
		icon: 'Phone',
		text: 'Our service is 24/7 available, call us if you face any problems with a device',
		color: '#FFC997, #FF7CC3',
	},
	{
		icon: 'School',
		text: 'Make a deal for startups and universities',
		color: '#FF97C3, #C7DDFF',
	},
	{
		icon: 'CreditCardFast',
		text: 'Get 3% daily cash back with Apple Card.',
		color: '#C7FFF5, #FFE297',
	},
]

export default function () {
	return (
		<Section>
			<div className='flex flex-col gap-10'>
				<h2>Our Services</h2>
				<div className='grid tablet:grid-cols-[1fr_1fr_1fr] gap'>
					{cards.map(card => {
						return (
							<div
								key={card.icon}
								className='grid grid-rows-[auto_1fr] items-center justify-items-center text-center gap-10 p-10 rounded-10'
								style={{
									backgroundImage: `linear-gradient(135deg, ${card.color})`,
								}}
							>
								<Icon src={card.icon} size='32' />
								<p className='max-w-[170px]'>{card.text}</p>
							</div>
						)
					})}
				</div>
			</div>
		</Section>
	)
}
