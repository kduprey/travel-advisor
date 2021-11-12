import { FaSearch } from "react-icons/fa";
import Autocomplete from "@react-google-maps/api";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center bg-blue-100 p-2 md:p-3">
			<h1 className="text-xl md:text-3xl font-semibold text-gray-700">
				Travel Advisor
			</h1>
			<div className="flex justify-end items-center w-screen2 lg:w-3/4 md:w-auto">
				<h3 className="invisible md:visible md:text-md lg:text-lg">
					Explore New Places
				</h3>
				<div className="flex items-center justify-center flex-shrink">
					{/* <Autocomplete> */}
					<FaSearch className="mr-3 md:text-xl md:mx-3 text-blue-300" />
					<input
						className="w-[10em] md:w-[15em] border-2 border-blue-300 rounded-lg bg-gray-50 active:border-blue-400 focus:border-blue-400"
						type="text"
						placeholder="Search..."
					/>
					{/* </Autocomplete> */}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
