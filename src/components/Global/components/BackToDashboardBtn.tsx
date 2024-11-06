import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { AllRoutes } from '@/lib/enums/AllRoutes.ts';
import { Button } from '@/components/ui/button.tsx';

export default function BackToDashboardBtn() {
	const navigate = useNavigate();

	return (
		<Button
			className="flex items-center transition p-2 rounded-lg transform active:scale-95 capitalize filter hover:brightness-95 text-sm active:bg-orange-400"
			onClick={() => {
				navigate(AllRoutes.root);
			}}
		>
			<IoIosArrowBack />
			Back to Dashboard
		</Button>
	);
}
