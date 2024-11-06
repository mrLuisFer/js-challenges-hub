import { footerLinks } from '@/components/Dashboard/Footer/constants/footerLinks.ts';
import FooterLink from '@/components/Dashboard/Footer/components/Link.tsx';
import { useMemo } from 'react';

export default function FooterLinks() {
	const hasLinks = useMemo(() => footerLinks.length > 0, []);

	return (
		<div className="flex items-center gap-6">
			{hasLinks
				? footerLinks?.map((link) => (
						<FooterLink url={link.url} label={link.label} key={`${link.url}-${link.label}`} />
					))
				: null}
		</div>
	);
}
