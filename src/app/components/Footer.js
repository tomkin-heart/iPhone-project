import Section from '@/components/Section.js'

const footer_columns = [
	{
		header: 'Shop and Learn',
		items: [
			'Store',
			'Mac',
			'iPad',
			'iPhone',
			'Watch',
			'AirPods',
			'TV & Home',
			'AirTag',
			'Accessories',
			'Gift Cards',
		],
	},
	{
		header: 'Apple Wallet',
		items: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'],
	},
	{
		header: 'Account',
		items: ['Manage Apple ID', 'Apple store Account', 'iCloud.com'],
	},
	{
		header: 'Apple Store',
		items: [
			'Find a Store',
			'Genius Bar',
			'Todav at Apple',
			'Apple Camp',
			'Apple Store App',
			'Financing',
			'Carrier Deals',
			'Order Status',
		],
	},
]

export default function () {
	return (
		<Section last>
			<footer className='bg-sa rounded'>
				<div className='grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap p tablet:p-20'>
					{footer_columns.map(column => {
						return (
							<div key={column.header} className='flex flex-col'>
								<h6>{column.header}</h6>
								{column.items.map(name => (
									<a href='' key={name}>
										{name}
									</a>
								))}
							</div>
						)
					})}
				</div>

				<small className='block text-center p border-t-2 border-sa'>
					Copyright © 2023 Apple Inc. All rights reserved.
				</small>
			</footer>
		</Section>
	)
}
