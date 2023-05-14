import Icon from '@/components/Icon.js'

const headerList = ['Store', 'Mac', 'iPad', 'iPhone', 'Support']

export default function () {
	return (
		<>
			<header className='bg-[rgba(255,255,255,0.6)] backdrop-blur-md fixed w-full left-0 top-0'>
				{/* MOBILE VERSION */}
				<div className='tablet:hidden grid gap-01 grid-cols-[1fr_auto] p'>
					<div className='flex gap justify-center items-center'>
						<a href=''>
							<Icon src='Apple' size='32' />
						</a>
					</div>
					<div className='flex gap items-center'>
						<a href='#menu'>
							<Icon src='Menu' />
						</a>
					</div>
				</div>

				{/* DESKTOP VERSION */}
				<div className='hidden tablet:grid gap-01 grid-cols-[1fr_auto] py px-20 max-w-[1600px] mx-auto'>
					<div className='flex gap items-center'>
						<a href=''>
							<Icon src='Apple' size='32' />
						</a>
						{headerList.map(name => (
							<a href='' key={name}>
								{name}
							</a>
						))}
					</div>
					<div className='flex gap items-center'>
						<a href=''>
							<Icon src='CartOutline' />
						</a>
						<a href=''>
							<Icon src='Magnify' />
						</a>
					</div>
				</div>
			</header>

			{/* MENU DIALOG */}
			<div
				id='menu'
				className='fixed hidden target:block left-0 top-0 w-full h-full bg-[rgba(255,255,255,0.6)] backdrop-blur-md'
			>
				<a href='#' className='absolute top-[23px] right'>
					<Icon src='Close' />
				</a>
				<div className='flex flex-col h-full items-center justify-center'>
					{headerList.map(name => (
						<a
							href=''
							key={name}
							className='w-1/2 border-ma border-t first:border-t-0 text-center p'
						>
							{name}
						</a>
					))}
				</div>
			</div>
		</>
	)
}
