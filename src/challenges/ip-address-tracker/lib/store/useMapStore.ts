import { create } from 'zustand';
import { MapStore } from '../../types/MapStore';
import { Location } from '../../types/Location';

const userLocationExample: Location = {
	isp: 'SpaceX Starlink',
	ip: '192.212.174.101',
	location: {
		timezone: 'UTC -05:00',
		city: 'Brooklyn, NY',
		postalCode: '10001',
		lat: 40.674054,
		lng: -73.943156,
	},
};

export const useMapStore = create<MapStore>()((set) => ({
	map: null,
	setMap: (map) => {
		if (!map) return;
		set(() => ({ map }));
	},
	userLocation: userLocationExample,
	setUserLocation: (data) => {
		if (!data) return;
		set(() => ({ userLocation: data }));
	},
}));
