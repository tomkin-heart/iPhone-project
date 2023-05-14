export default ({children, className, first, last}) => {
	return (
		<section
			className={`
        max-w-[1600px] mx-auto pb-10 px tablet:px-20 tablet:pb-20
        ${className ?? ''}
        ${first ? 'pt-20 tablet:pt-30' : ''}
        ${last ? 'pb-20 tablet:pb-30' : ''}
      `}
		>
			{children}
		</section>
	)
}
