module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/index.html',
		'**/offline.html',
		'assets/*.*',
	],
	swDest: 'public/serviceworker.js',
	swSrc: 'public/serviceworker.js'
};