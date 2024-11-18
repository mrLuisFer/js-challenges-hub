import { frontendMentorUrl } from '@/lib/enums/AllRoutes.ts';
import { FrontendMentorLogo } from '@/views/WelcomePage/images/FrontendMentorLogo.tsx';

export default function HeaderLogo() {
	return (
		<section className="flex flex-col gap-1 items-start">
			<h1 className="font-bold text-xs italic lowercase opacity-90 hover:opacity-100 transition">My
				Personal</h1>
			<a href={frontendMentorUrl} target="_blank" rel="noopener noreferrer"
				 className="p-2 hover:bg-slate-100 block h-fit max-w-fit transition rounded-lg active:scale-95">
				<FrontendMentorLogo />
			</a>
		</section>
	);
}
