import { useLocation } from 'react-router-dom';
import BackToDashboardBtn from '../BackToDashboardBtn.tsx';
import HeaderHistory from '@/components/Global/Header/components/History.tsx';
import { useMemo } from 'react';
import HeaderDarkModeButton from '@/components/DarkModeButton/index.tsx';

export default function Header() {
	const location = useLocation();
	const title = useMemo(() => location.pathname.replace('/', '').split('-').join(' '), []);

	return (
		<header className="flex py-2 px-2 sm:px-8 justify-between items-center">
			<section className="flex gap-4 items-center">
				<BackToDashboardBtn />
				<HeaderHistory currentLocation={title} />
			</section>
			<div className="flex gap-5 justify-evenly items-end">
				<div className="flex items-start md:gap-1 flex-col">
					<span className="font-semibold opacity-70 text-xs">Challenge:</span>
					<h1 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl capitalize font-serif">
						{title}
					</h1>
				</div>
				<HeaderDarkModeButton />
			</div>
		</header>
	);
}
