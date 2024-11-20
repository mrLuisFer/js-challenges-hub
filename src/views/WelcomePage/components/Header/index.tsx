import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from '@/components/ui/navigation-menu.tsx';
import HeaderLogo from '@/views/WelcomePage/components/Header/components/Logo.tsx';
import HeaderLink from '@/views/WelcomePage/components/Header/components/Link.tsx';
import { AllRoutes } from '@/lib/enums/AllRoutes.ts';

export default function WelcomePageHeader() {
	return (
		<header className="px-10 sticky pt-5 flex justify-between items-center">
			<HeaderLogo />
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<HeaderLink href={AllRoutes.challenges}>
							Challenges
						</HeaderLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
}
