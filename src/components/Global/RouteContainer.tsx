import { PropsWithChildren } from 'react';
import Header from './Header';

export default function RouteContainer({ children }: PropsWithChildren) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
