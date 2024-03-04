import { useLocation } from 'react-router-dom';
import BackToDashboardBtn from '../BackToDashboardBtn';

export default function Header() {
	const location = useLocation();
	const title = location.pathname.replace('/', '').split('-').join(' ');

	return (
		<header className="flex py-2 px-2 sm:px-8 justify-between items-center">
			<BackToDashboardBtn />
			<div>
				<div className="flex items-start md:gap-2 flex-col text-xs md:text-md">
					<span>Challenge:</span>
					<h1 className="font-bold text-lg md:text-xl capitalize font-serif">{title}</h1>
				</div>
			</div>
		</header>
	);
}
