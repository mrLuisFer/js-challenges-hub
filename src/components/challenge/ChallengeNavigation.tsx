import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuContent,
} from "../ui/navigation-menu";
import { challengesInitialState } from "@/constants/challenges";
import ChallengeNavigationItem from "./ChallengeNavigationItem";

export default function ChallengeNavigation({ challengeName }: { challengeName: string }) {
	const formattedChallengeName = challengeName.replace(/-/g, " ").toLowerCase();
	const renderedChallenge = challengesInitialState.find(
		(challenge) => challenge.title?.toLowerCase() === formattedChallengeName
	);

	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Explore more challenges</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-2 p-2 md:w-[300px] md:grid-cols-2 lg:w-[350px]">
							{challengesInitialState
								?.slice(0, 5)
								.map((challenge) => (
									<ChallengeNavigationItem key={challenge.title} challenge={challenge} />
								))}
							<li className="h-fit rounded-md p-2 text-sm font-semibold hover:bg-neutral-200">
								<a href="/">Explore more challenges...</a>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						className={cn(
							"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
						)}
						href={renderedChallenge?.originUrl}
					>
						Visit original challenge
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
