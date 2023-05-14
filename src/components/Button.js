export default function ({children, ...otherProps}) {
	return (
		<button
			className='bg-active text-[white] rounded-full text-center py-02 px-10 active:brightness-150'
			{...otherProps}
		>
			{children}
		</button>
	)
}
