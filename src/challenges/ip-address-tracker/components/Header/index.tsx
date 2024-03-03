import patternBgDesktop from '../../images/pattern-bg-desktop.png';
import Input from './Input';

export default function Header() {
	return (
		<header className="flex items-center justify-center relative h-[280px] overflow-hidden">
			<img
				src={patternBgDesktop}
				alt="pattern bg desktop"
				className="absolute inset-0 w-full -z-10"
			/>
			<div className="min-w-80 flex items-center justify-center flex-col gap-6">
				<h1 className="text-white font-bold font-['Rubik'] text-3xl">IP Address Tracker</h1>
				<Input />
			</div>
		</header>
	);
}
