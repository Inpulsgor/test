import email from '../assets/icons/email.svg';
import google from '../assets/icons/google.svg';
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import github from '../assets/icons/github.svg';

const data = [
	{	id: 0,
		icon: email,
		text: 'Sign in with email',
		color: '#fff',
		fontColor: '#777777',
		url: '/'
	},
	{	id: 1,
		icon: google,
		text: 'Sign in with Google',
		color: '#e8473d',
		fontColor: '#fff',
		url: '/'
	},
	{	id: 2,
		icon: facebook,
		text: 'Sign in with Facebook',
		color: '#405991',
		fontColor: '#fff',
		url: '/'
	},
	{	id: 3,
		icon: twitter,
		text: 'Sign in with Twitter',
		color: '#69a9e6',
		fontColor: '#fff',
		url: '/'
	},
	{	id: 4,
		icon: github,
		text: 'Sign in with Github',
		color: '#636468',
		fontColor: '#fff',
		url: '/'
	}
]

const links = [
	{
		id: 0,
		class: 'left',
		link: '/learn',
		text: 'Learn'
	},
	{
		id: 1,
		class: 'right',
		link: '/register',
		text: 'Register'
	}
]

export {
	data,
	links
};