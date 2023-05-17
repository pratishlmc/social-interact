import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import Home from "./pages/Home";
import Framework from "./pages/Framework";
import Language from "./pages/Language";
import Other from "./pages/Other";
import Platforms from "./pages/Platforms";
import Test from "./tests/test";
import Contents from "./components/Contents";
import axios from "axios";

const App = (props) => {

	const [data, setData] = useState([])

	let { id } = useParams();

	useEffect(() => {
		fetchData();
	})

	function fetchData() {
		axios
			.get("https://cabecho.herokuapp.com/api/platforms/")
			.then((response) => setData(response.data))
			.catch((error) => console.log(error));
	}


	return (
		<div>
			<Routes>
				<Route path="/" element={<Home platform={data}/>} />
				<Route path="/frameworks" element={<Framework />} />
				<Route path="/languages" element={<Language />} />
				<Route path="/others" element={<Other />} />
				<Route path="/framework/:id" element={<Platforms />} />
				<Route path="/language/:id" element={<Platforms />} />
				<Route path="/other/:id" element={<Platforms />} />
				<Route path="/tests" element={<Test />} />
			</Routes>
		</div>
	);
};

export default App;
