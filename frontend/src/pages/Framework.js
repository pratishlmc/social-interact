import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AllPlatforms from "../components/AllPlatforms";
function Framework() {
	return (
		<>
			<NavBar />
			<h1>Frameworks;</h1>
			<div className="main-contents">
				<AllPlatforms type={"framework"} />
			</div>
			<Footer />
		</>
	);
}

export default Framework;
