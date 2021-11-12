import GoogleMapReact from "google-map-react";
// TODO: Add rating
import { FaMapMarkerAlt } from "react-icons/fa";

const Map = () => {
	const coordinates = { lat: 0, lng: 0 };
	return (
		<div className="p-3 h-screen2 w-full md:w-[400px] md:h-full lg:h-full lg:w-full">
			<GoogleMapReact
				bootstrapURLKeys={{
					key: `${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
				}}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				options={""}
				onChange={() => {}}
				onChildClick={() => {}}
				className="rounded-lg"
			></GoogleMapReact>
		</div>
	);
};

export default Map;
