import Container from "./challenge-card/components/Container";

export default function BuildingMoreCard() {
	return (
		<Container className="h-[350px]">
			<div className="group-hover flex h-full w-full items-center justify-center rounded-md bg-gradient-to-r from-yellow-50 to-yellow-100 px-4 transition dark:from-yellow-600 dark:to-yellow-500">
				<h1 className="text-3xl font-bold text-yellow-700 transition hover:text-yellow-600 dark:text-yellow-50 dark:hover:text-yellow-100">
					Building more challenges every week!
				</h1>
			</div>
		</Container>
	);
}
