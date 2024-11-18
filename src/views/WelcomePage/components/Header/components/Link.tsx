import { Link } from 'react-router-dom';
import { NavigationMenuLink } from '@/components/ui/navigation-menu.tsx';
import { ReactNode } from 'react';

type HeaderLinkProps = {
	href: string,
	children?: ReactNode;
	title?: string;
}
export default function HeaderLink({ href, children, title }: HeaderLinkProps) {
	return (
		<Link to={href}
					className="font-bold italic uppercase text-sm md:text-base border-b-2 border-transparent border-solid hover:border-pink-700 transition">
			<NavigationMenuLink>{children ?? title}</NavigationMenuLink>
		</Link>
	);
}
