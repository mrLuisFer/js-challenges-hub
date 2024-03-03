import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { mapTiler } from '../mapTiler';
import { useMapStore } from '../lib/store/useMapStore';

export default function Map() {
	const { data, setMap } = useMapStore();
	const zoomLevel = 4;

	return (
		<MapContainer center={data} zoom={zoomLevel} ref={setMap} className="h-[600px]">
			<TileLayer url={mapTiler.url} attribution={mapTiler.attribution} />
		</MapContainer>
	);
}
