import { create } from 'zustand';
import { LatLngExpression } from 'leaflet';
import { Map as MapLeaflet } from 'leaflet';

type MapStore = {
	data: LatLngExpression;
	setData: (newData: LatLngExpression) => void;
	map: MapLeaflet | null;
	setMap: (map: MapLeaflet | null) => void;
	userLocation: Location | undefined;
	setUserLocation: (data: Location) => void;
};
export const useMapStore = create<MapStore>()((set) => ({
	data: {
		lat: 20.51395,
		lng: -83.842029,
	},
	setData: (newData) => {
		if (!newData) return;
		set(() => ({ data: newData }));
	},
	map: null,
	setMap: (map) => {
		if (!map) return;
		set(() => ({ map }));
	},
	userLocation: undefined,
	setUserLocation: (data) => {
		if (!data) return;
		set(() => ({ userLocation: data }));
	},
}));
