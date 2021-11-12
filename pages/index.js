import Header from "./components/Header";
import Navbar from "./components/Navbar";
import List from "./components/List";
import Map from "./components/Map";

const Home = () => {
	return (
		<div className="">
			{/* Header */}
			<Header title="Next.js Tailwind Template" />

			<main className="">
				<Navbar />
				<div className="flex justify-between md:flex-row flex-col">
					<div className="w-3/4 order-2 md:order-none">
						<List />
					</div>
					<div className="w-full md:w-[500px] md:h-[500px] lg:h-[600px] lg:w-[800px] container order-1 md:order-none">
						<Map />
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
