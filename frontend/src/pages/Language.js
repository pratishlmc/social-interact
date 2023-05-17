import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AllPlatforms from "../components/AllPlatforms";
function Language() {
	return (
		<>
			<NavBar />
			<h1>Languages;</h1>
			<div className="main-contents">
				<AllPlatforms type={"language"} />
			</div>
			<Footer />
		</>
	);
}

export default Language;
