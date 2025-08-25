export const profile = {
	fullName: 'Hikmat Khan',
	title: 'Dr.',
	institute: 'American University of Sharjah',
	author_name: 'Yasir Turk', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'dr@hikmatkhan.com',
	linkedin: 'https://',
	x: 'https://www.x.com/',
	github: 'https://github.com/yasirmturk/hikmatkhan.com',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://localhost:51677', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Hikmat Khan',
	default_description: 'Hikmat Khan is a doctor for artificial intelligence.',
	default_image: '/images/astro-academia.png',
}
