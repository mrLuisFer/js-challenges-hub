import { Link } from 'react-router-dom';
import { FooterLink } from '../../../lib/types/FooterLink';
import { AllRoutes } from '../../../lib/enums/AllRoutes';

const footerLinks: FooterLink[] = [
	{
		label: 'Terms & License',
		url: AllRoutes.terms,
	},
	{
		label: 'Github Profile',
		url: 'https://github.com/mrLuisFer',
	},
];

export default function Footer() {
	return (
		<div className="absolute bottom-0 left-0 w-full bg-[var(--app-blue)] max-h-20">
			<div className="max-w-5xl mx-auto px-8 py-4 flex justify-between items-center">
				<div className="flex items-center gap-4">
					<img src="/favicon-mentor.png" alt="frontend-mentor" />
					<div className="flex flex-col">
						<span className="text-sm opacity-55">Challenges from</span>
						<span className="font-semibold">© Frontend Mentor</span>
					</div>
				</div>
				<div className="flex items-center gap-6">
					{footerLinks.map((link) => {
						const urlRegex = new RegExp(
							'https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}([-a-zA-Z0-9()!@:%_+.~#?&//=]*)'
						);
						const isExternalLink = urlRegex.test(link.url);
						return (
							<Link
								key={link.label}
								to={link.url}
								className="text-sm transition opacity-80 hover:opacity-100"
								target={isExternalLink ? '_blank' : '_self'}
								rel={isExternalLink ? 'noreferrer noopener' : undefined}
							>
								{link.label}
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}
