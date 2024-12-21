import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

export default function Container(props: ContainerProps) {
	return (
		<article
			{...props}
			className={clsx(
				props.className,
				"group max-w-80 scale-100 rounded-md border-2 border-neutral-300 border-opacity-50 bg-white filter transition-all hover:border-opacity-75 hover:shadow-md hover:shadow-yellow-100 active:scale-95 active:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:shadow-neutral-800"
			)}
		>
			{props.children}
		</article>
	);
}
