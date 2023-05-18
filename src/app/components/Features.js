import Button from '@/components/Button.js'
import Section from '@/components/Section.js'

export default function () {
	return (
		<Section>
			<div className='grid tablet:grid-cols-[1fr_1fr] text-center items-center justify-items-center bg-sa p-10 tablet:p-20 gap rounded'>
				<div className='max-w-[300px] '>
					<h2>Faster. Better. Stronger.</h2>
					<br />
					<p>
						With the new A5 Chip you can play the whole day long...
						on a single charge.
					</p>
					<br />
					<Button onClick={e => alert('hey')}>Explore</Button>
				</div>
				<img
					src='./graphic/pic2.png'
					className='w-full max-w-[400px]'
				/>
			</div>
		</Section>
	)
}
