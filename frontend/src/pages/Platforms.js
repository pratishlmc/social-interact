import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Contents from "../components/Contents";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Platforms = () => {

	let params = useParams();

	const [self, setSelf] = useState([])

	useEffect(()=>{
		fetchData();
	})

	const fetchData= () => {
		axios
			.get(`https://cabecho.herokuapp.com/api/platforms/${params.id}/`)
			.then((response) => setSelf(response.data));
	}

		// const self = this.state.self;
		return (
			<>
				<NavBar />
				<div className="item_info">
					<img
						alt={self.name +"-" + self.type}
						src={self.image}
					/>
				</div>
				<Contents id={params.id}/>
				<Footer />
			</>
		)

}

export default Platforms;
