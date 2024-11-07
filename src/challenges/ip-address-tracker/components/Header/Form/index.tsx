import { FormEvent, useState } from 'react';
import iconArrow from '../../../images/icon-arrow.svg';
import { validateIsIpAddress } from '../../utils/isIpAddress';
import { useMapStore } from '../../../lib/store/useMapStore';
import { LatLngExpression } from 'leaflet';
import { getIpAddress } from '../../../lib/api/getIpAddress';
import Input from './Input';
import { logger } from '@/utils/Logger.ts';

export default function Form() {
	const [inputValue, setInputValue] = useState<string | undefined>('');
	const { map, setUserLocation } = useMapStore();

	const handleSubmitIp = async (e: FormEvent) => {
		e.preventDefault();
		if (!inputValue || !inputValue.length) return;
		const isIpAddress = validateIsIpAddress(inputValue);

		try {
			if (isIpAddress) {
				const { data, status } = await getIpAddress(inputValue);
				if (status !== 200 || !Object.keys(data).length) return;
				const mapData: LatLngExpression = {
					lat: data?.location?.lat,
					lng: data?.location?.lng,
				};
				setUserLocation(data);
				map?.setView(mapData, 13);
			}
		} catch (error) {
			logger.error(error);
		}
	};

	return (
		<form className="flex h-11 w-80 md:w-auto mx-auto md:m-0" onSubmit={handleSubmitIp}>
			<Input value={inputValue} setValue={setInputValue} />
			<button className="bg-[var(--ip-very-dark-gray)] w-12 flex items-center justify-center rounded-r-lg filter hover:brightness-95 active:brightness-90 transition">
				<img src={iconArrow} alt="Search" />
			</button>
		</form>
	);
}
