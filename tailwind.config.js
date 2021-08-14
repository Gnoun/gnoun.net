module.exports = {
  purge: [
    './components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
  ],
  theme: {
    backgroundColor: {
      main: '#1E1C35',
      topbar: '#996633',
      'topbar-hover': '#AC7339',
      'topbar-active': '#663300',
      sidenav: '#171628',
    },
    textColor: {
      main: '#D3D3D3',
      topbar: '#F2F2F2',
      link: '#ADD8E6',
      black: '#000000'
    },
    fontFamily: {
      main: ['Inter']
    },
    textIndent: theme => theme('spacing'),
  },
  plugins: [
    require('tailwindcss-text-indent')(),
  ]
}
