import * as icons from '@mdi/js'

export default function ({size = 20, color = 'black', src = 'Plus', onClick}) {
	return (
		<svg
			className='icon'
			height={size}
			width={size}
			viewBox='0 0 24 24'
			fill={color}
			onClick={onClick}
		>
			<path d={icons['mdi' + src]} />
		</svg>
	)
}
