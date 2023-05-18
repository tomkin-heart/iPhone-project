/* module.exports = {
	experimental: {appDir: true},
	output: 'export',
	distDir: 'build',
	trailingSlash: true,
} */

module.exports = {
	experimental: {appDir: true},
	output: 'export',
	assetPrefix:
		process.env.NODE_ENV === 'production' ? '/iPhone-project/' : '',
	images: {unoptimized: true},
}
