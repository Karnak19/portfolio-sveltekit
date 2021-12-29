module.exports = {
	content: ['./src/**/*.{html,svelte}'],
	safelist: [
		'group-hover:text-react',
		'group-hover:text-nestjs',
		'group-hover:text-typescript',
		'group-hover:text-white',
		'group-hover:text-black',
		'group-hover:text-prisma',
		'group-hover:text-graphql',
		'group-hover:bg-typescript',
		'group-hover:bg-white',
		'group-hover:bg-black'
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
