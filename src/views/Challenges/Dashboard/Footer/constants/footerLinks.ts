import { FooterLink } from '@/lib/types/FooterLink.ts';
import { frontendMentorUrl } from '@/lib/enums/AllRoutes.ts';

export const footerLinks: FooterLink[] = [
	{
		label: 'Terms & License',
		url: `${frontendMentorUrl}/license`,
	},
	{
		label: 'Github Profile',
		url: 'https://github.com/mrLuisFer',
	},
];

