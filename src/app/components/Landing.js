import Button from '@/components/Button.js'
import Section from '@/components/Section.js'

export default function () {
	return (
		<Section first>
			<div className='flex flex-col text-center pt px gap-10 tablet:gap-20 tablet:pt-20 tablet:px-10 bg-sa rounded items-center'>
				<div className='max-w-[500px] tablet:max-w-[800px] desktop:max-w-[1000px]'>
					<h1>The new iPhone you've never seen before</h1>
					<br />
					<p>The power of internet on tip of your finger</p>
					<br />
					<Button onClick={e => alert('https://www.apple.com')}>
						Buy
					</Button>
				</div>
				<img
					src='./graphic/pic1.png'
					className='w-full max-w-[500px]'
				/>
			</div>
		</Section>
	)
}
