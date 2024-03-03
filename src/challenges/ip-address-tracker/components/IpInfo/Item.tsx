export default function Item({ label, value }: { label: string; value?: string }) {
	return (
		<div className="flex flex-col gap-2">
			<span className="text-[var(--dark-gray)] font-bold text-sm uppercase">{label}</span>
			<p className="text-[var(--very-dark-gray)] font-bold text-2xl max-w-48">{value}</p>
		</div>
	);
}
