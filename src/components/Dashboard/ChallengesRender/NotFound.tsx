export default function NotFound({ message = 'Challenges not found!' }: { message?: string }) {
	return (
		<div className="flex items-center justify-center h-full w-full mt-20">
			<h2 className="text-2xl font-bold animate-pulse">{message}</h2>
		</div>
	);
}
