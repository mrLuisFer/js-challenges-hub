export default function CountryLabel({
	label,
	value,
}: {
	label: string | undefined;
	value: string | number | undefined;
}) {
	if (!value || !label) return null;
	return (
		<p className="flex items-center gap-1">
			<span className="font-semibold">{label}:</span>
			<span className="dark:text-[var(--rest-very-light-gray)]">{value}</span>
		</p>
	);
}
