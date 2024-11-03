import FooterLogo from '@/components/Dashboard/Footer/components/Logo.tsx';
import FooterLinks from '@/components/Dashboard/Footer/components/Links.tsx';

export default function Footer() {
	return (
		<div className="absolute bottom-0 left-0 w-full bg-slate-900 text-white max-h-28 sm:max-h-20">
			<div className="max-w-5xl mx-auto px-8 py-4 flex justify-between sm:items-center flex-col sm:flex-row gap-4 sm:gap-0">
				<FooterLogo />
				<FooterLinks />
			</div>
		</div>
	);
}
