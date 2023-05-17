import React, { Component } from "react";
import axios from "axios";
import Zoom from "../img/Zoom.png";
import Meet from "../img/Meet.png";
import Teams from "../img/Teams.png";
import FaceTime from "../img/facetime.png";

class Contents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			details: [],
			platform: this.props.id,
			app: "",
			cid: null,
			password: "",
			link: "",
			activeItem: "zoom",
		};
	}


	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		axios
			.get("https://cabecho.herokuapp.com/api/contents/")
			.then((response) => this.setState({ details: response.data }))
			.catch((error) => console.log(error));
	}

	handleInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
		if (e.target.name === "cid") {
			this.setState({ app: e.target.getAttribute("data") });
			console.log(e.target.getAttribute("data"));
		}
	};

	handleSubmit = (e) => {
		e.preventDefault();
		e.target.reset();
		axios
			.post("https://cabecho.herokuapp.com/api/contents/", { ...this.state })
			.then((res) => this.fetchData());
	};

	renderApplications() {
		return (
			<>
				<div className="applications-pic">
					<img src={Zoom} alt="Zoom" id={"zoom"} className={`platform ${this.state.activeItem ==="zoom" ?  'active': null}`} onClick={()=> this.setState({activeItem: "zoom"})}/>
					<img src={Meet} alt="Meet" id={"meet"} className={`platform ${this.state.activeItem ==="meet" ?  'active': null}`} onClick={()=> this.setState({activeItem: "meet"})}/>
					<img src={Teams} alt="Teams" className={`platform ${this.state.activeItem ==="teams" ?  'active': null}`} onClick={()=> this.setState({activeItem: "teams"})}/>
					<img
						src={FaceTime}
						alt="FaceTime"
						className={`platform ${this.state.activeItem ==="facetime" ?  'active': null}`}
						onClick={()=> this.setState({activeItem: "facetime"})}
					/>
				</div>
			</>
		);
	}


	renderZoom() {
		const items = this.state.details;
		const id = this.props.id;
		return items
			.filter((item) => item.platform === id && item.app === "zoom")
			.slice(0, 5)
			.map((filtered) => (
				<>
						<div className="details">
							<div className="id">
								<span id="Id">Id : {filtered.cid}</span>
								<hr/>
								<span id="password">Password : {filtered.password}</span>
							</div>
							<div className="link">
								<span>Url:</span>
								<hr/>
								<a
									style={{cursor: "pointer"}}
									href={filtered.link}
									target={"_blank"}
								>
									{filtered.link}
								</a>
							</div>
						</div>
				</>
			));
	}

	renderMeet() {
		const items = this.state.details;
		const id = this.props.id;
		return items
			.filter((item) => item.platform === id && item.app === "meet")
			.slice(0, 5)
			.map((filtered) => (
				<>
					<div className="details">
						<div className="id">
							<span id="Id">Id : {filtered.cid}</span>
							<hr />
							<span id="password">Password : {filtered.password}</span>
						</div>
						<div className="link">
							<span>Url:</span>
							<hr />
							<a
								style={{ cursor: "pointer" }}
								href={filtered.link}
								target={"_blank"}
							>
								{filtered.link}
							</a>
						</div>
					</div>
				</>
			));
	}

	renderTeams() {
		const items = this.state.details;
		const id = this.props.id;
		return items
			.filter((item) => item.platform === id && item.app === "teams")
			.slice(0, 5)
			.map((filtered) => (
				<>
					<div className="details">
						<div className="id">
							<span id="Id">Id : {filtered.cid}</span>
							<hr />
							<span id="password">Password : {filtered.password}</span>
						</div>
						<div className="link">
							<span>Url:</span>
							<hr />
							<a
								style={{ cursor: "pointer" }}
								href={filtered.link}
								target={"_blank"}
							>
								{filtered.link}
							</a>
						</div>
					</div>
				</>
			));
	}

	renderFaceTime() {
		const items = this.state.details;
		const id = this.props.id;
		return items
			.filter((item) => item.platform === id && item.app === "facetime")
			.slice(0, 5)
			.map((filtered) => (
				<>
					<div className="details">
						<div className="id">
							<span id="Id">Id : {filtered.cid}</span>
							<hr />
							<span id="password">Password : {filtered.password}</span>
						</div>
						<div className="link">
							<span>Url:</span>
							<hr />
							<a
								style={{ cursor: "pointer" }}
								href={filtered.link}
								target={"_blank"}
							>
								{filtered.link}
							</a>
						</div>
					</div>
				</>
			));
	}

	render() {
		const items = this.state.details;
		return (
			<>
				{this.renderApplications()}
				<div className="community">
					{/*Zoom*/}
					{this.state.activeItem === "zoom" ?
						<>
						<div id="zoom" className="zoom">
							<div className="plat">
								<img src={Zoom} className="plat_pic"/>
								<h2>Zoom</h2>
							</div>
							{this.renderZoom()}
						</div>
						<form onSubmit={this.handleSubmit}>
							<div className="add_id">
								<input
									placeholder="Id"
									type="text"
									className="input_id"
									name="cid"
									data="zoom"
									onChange={this.handleInput}
								/>
								<input
									placeholder="Password"
									type="text"
									className="input_password"
									name="password"
									onChange={this.handleInput}
								/>
								<input
									placeholder="Link/URL"
									type="url"
									className="input_link"
									name="link"
									onChange={this.handleInput}
								/>
							</div>
							<div className="button-div">
								<button type="submit" className="add-btn">
									Add room
								</button>
							</div>
						</form>
						</>

					:null}

					{/* MEET */}
					{this.state.activeItem === "meet" ?
						<>
							<div id="meet" className="meet">
							<div className="plat">
								<img src={Meet} className="plat_pic" />
								<h2>Meet</h2>
							</div>
							{this.renderMeet()}
						</div>
						<form onSubmit={this.handleSubmit}>
							<div className="add_id">
								<input
									placeholder="Id"
									type="text"
									className="input_id"
									name="cid"
									data="meet"
									onChange={this.handleInput}
								/>
								<input
									placeholder="Password"
									type="text"
									className="input_password"
									name="password"
									onChange={this.handleInput}
								/>
								<input
									placeholder="Link/URL"
									type="url"
									className="input_link"
									name="link"
									onChange={this.handleInput}
								/>
							</div>
							<div className="button-div">
								<button type="submit" className="add-btn">
									Add room
								</button>
							</div>
						</form>
						</>
						:null}



					{/* TEAMS */}
					{this.state.activeItem === "teams" ? <>
					<div id="teams" className="teams">
						<div className="plat">
							<img src={Teams} className="plat_pic" />
							<h2>Teams</h2>
						</div>
						{this.renderTeams()}
					</div>
						<form onSubmit={this.handleSubmit}>
							<div className="add_id">
								<input
									placeholder="Id"
									type="text"
									className="input_id"
									name="cid"
									data="teams"
									onChange={this.handleInput}
								/>
								<input
									placeholder="Password"
									type="text"
									className="input_password"
									name="password"
									onChange={this.handleInput}
								/>
								<input
									placeholder="Link/URL"
									type="url"
									className="input_link"
									name="link"
									onChange={this.handleInput}
								/>
							</div>
							<div className="button-div">
								<button type="submit" className="add-btn">
									Add room
								</button>
							</div>
						</form>
					</> : null}
					{this.state.activeItem === "facetime" ? <>
					{/* FACETIME */}

					<div id="facetime" className="facetime">
						<div className="plat">
							<img src={FaceTime} className="plat_pic" />
							<h2>FaceTime</h2>
						</div>
						{this.renderFaceTime()}
					</div>
						<form onSubmit={this.handleSubmit}>
							<div className="add_id">
								<input
									placeholder="Id"
									type="text"
									className="input_id"
									name="cid"
									data="facetime"
									onChange={this.handleInput}
								/>
								<input
									placeholder="Password"
									type="text"
									className="input_password"
									name="password"
									onChange={this.handleInput}
								/>
								<input
									placeholder="Link/URL"
									type="url"
									className="input_link"
									name="link"
									onChange={this.handleInput}
								/>
							</div>
							<div className="button-div">
								<button type="submit" className="add-btn">
									Add room
								</button>
							</div>
						</form>
					</> : null}
				</div>
			</>
		);
	}
}

export default Contents;
