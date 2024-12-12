import React from "react";
type ChallengeCardHeaderProps = {
	title: string;
	level: string | number;
};

export default function ChallengeCardHeader({ title, level }: ChallengeCardHeaderProps) {
	return (
		<div className="flex items-center justify-between flex-wrap gap-2">
			<h2 className="text-2xl font-serif capitalize text-white">{title}</h2>
			<span className="text-xs py-1 px-2 bg-orange-200 dark:bg-orange-300 rounded-md uppercase group-hover:bg-orange-300 group-hover:dark:bg-orange-400 dark:text-slate-950 font-bold transition">
				{level}
			</span>
		</div>
	);
}
