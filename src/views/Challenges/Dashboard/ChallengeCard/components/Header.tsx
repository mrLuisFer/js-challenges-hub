type ChallengeCardHeaderProps = {
	title: string;
	level: string | number;
};

export default function ChallengeCardHeader({ title, level }: ChallengeCardHeaderProps) {
	return (
		<div className="flex items-center justify-between flex-wrap gap-2">
			<h2 className="text-2xl font-serif capitalize text-white">{title}</h2>
			<span className="text-xs py-1 px-2 bg-orange-50 rounded-md uppercase hover:bg-orange-200 transition">
				{level}
			</span>
		</div>
	);
}
