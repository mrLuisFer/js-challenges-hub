import { useEffect } from 'react';
import Header from './components/Header';
import Map from './components/Map.tsx';
import IpInfo from './components/IpInfo';
import { logger } from '@/utils/Logger.ts';

export default function IpAddressTracker() {
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.permissions
				.query({ name: 'geolocation' })
				.then((result) => logger.info(result))
				.catch((e) => logger.error(e));
		} else {
			logger.error('Geolocation is not supported');
		}
	}, []);

	return (
		<div className="relative">
			<Header />
			<IpInfo />
			<Map />
		</div>
	);
}
