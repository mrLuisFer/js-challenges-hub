import { useEffect } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import IpInfo from './components/IpInfo';

export default function IpAddressTracker() {
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.permissions
				.query({ name: 'geolocation' })
				.then((result) => console.log(result))
				.catch((e) => console.error(e));
		} else {
			console.error('Geolocation is not supported');
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
