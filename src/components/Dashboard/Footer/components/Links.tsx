import { Link } from 'react-router-dom';
import { footerLinks } from '@/components/Dashboard/Footer/constants/footerLinks.ts';

export default function FooterLinks() {
	return (
		<div className="flex items-center gap-6">
			{footerLinks.map((link) => {
				const urlRegex = new RegExp(
					'https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}([-a-zA-Z0-9()!@:%_+.~#?&/=]*)'
				);
				const isExternalLink = urlRegex.test(link.url);
				return (
					<Link
						key={link.label}
						to={link.url}
						className="text-sm transition opacity-80 hover:opacity-100"
						target={isExternalLink ? '_blank' : '_self'}
						rel={isExternalLink ? 'referrer opener' : undefined}
					>
						{link.label}
					</Link>
				);
			})}
		</div>
	);
}
