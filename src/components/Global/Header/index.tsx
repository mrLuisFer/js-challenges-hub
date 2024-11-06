import { useLocation } from 'react-router-dom';
import BackToDashboardBtn from '../components/BackToDashboardBtn.tsx';

export default function Header() {
	const location = useLocation();
	const title = location.pathname.replace('/', '').split('-').join(' ');

	return (
		<header className="flex py-2 px-2 sm:px-8 justify-between items-center">
			<BackToDashboardBtn />
			<div>
				<div className="flex items-start md:gap-1 flex-col">
					<span className="font-semibold opacity-70 text-xs">Challenge:</span>
					<h1 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl capitalize font-serif">
						{title}
					</h1>
				</div>
			</div>
		</header>
	);
}
