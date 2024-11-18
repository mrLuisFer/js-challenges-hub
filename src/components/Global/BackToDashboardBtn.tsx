import { useNavigate } from 'react-router-dom';
import { AllRoutes } from '@/lib/enums/AllRoutes.ts';
import { Button } from '@/components/ui/button.tsx';
import { GoHome } from 'react-icons/go';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function BackToDashboardBtn() {
	const navigate = useNavigate();

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<Button
						className="flex items-center transition p-3 rounded-lg transform active:scale-95 capitalize filter hover:brightness-95 text-sm active:bg-orange-400 active:dark:bg-orange-200 dark:bg-slate-200"
						onClick={() => {
							navigate(AllRoutes.root);
						}}
					>
						<GoHome />
					</Button>
				</TooltipTrigger>
				<TooltipContent>Back to Dashboard</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
