module.exports = {
	content: ['./src/**/*.{html,svelte}'],
	safelist: [
		'lg:group-hover:text-react',
		'lg:group-hover:text-nestjs',
		'lg:group-hover:text-typescript',
		'lg:group-hover:text-white',
		'lg:group-hover:text-black',
		'lg:group-hover:text-prisma',
		'lg:group-hover:text-graphql',
		'lg:group-hover:bg-typescript',
		'lg:group-hover:bg-white',
		'lg:group-hover:bg-black'
	],

	theme: {
		extend: {
			fontFamily: {
				open: ['Open Sans Condensed', 'sans-serif'],
				prompt: ['Prompt', 'sans-serif']
			},
			colors: {
				react: '#61DAFB',
				nestjs: '#E0234E',
				typescript: '#3178C6',
				graphql: '#E10098',
				prisma: '#2D3748'
			}
		}
	},
	plugins: []
};
