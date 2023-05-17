import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AllPlatforms from "../components/AllPlatforms";

function Other() {
	return (
		<>
			<NavBar />
			<h1>Others;</h1>
			<div className="main-contents">
				<AllPlatforms type={"other"} />
			</div>
			<Footer />
		</>
	);
}

export default Other;
