import { useMapStore } from '../../lib/store/useMapStore';
import Item from './Item';
import Separator from './Separator';

export default function IpInfo() {
	const { userLocation } = useMapStore();

	return (
		<div className="absolute top-1/4 h-[135px] max-w-5xl left-0 right-0 mx-auto bg-white py-6 px-8 z-[1000] rounded-xl flex items-start justify-between">
			<Item label="IP Address" value={userLocation?.ip} />
			<Separator />
			<Item
				label="Location"
				value={`${userLocation?.location.city} ${userLocation?.location.postalCode}`}
			/>
			<Separator />
			<Item label="Timezone" value={userLocation?.location.timezone} />
			<Separator />
			<Item label="isp" value={userLocation?.isp} />
		</div>
	);
}
