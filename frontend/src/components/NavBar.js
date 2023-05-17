import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
	render() {
		return (
			<>
				<nav className="container w-full p-2 flex justify-between">
					<header className=""><Link to="/" style={{ textDecoration: 'none' }}>
						<span className="text-4xl font-semibold text-purple-900" >EnterAct</span>
						<p className="font-thin text-gray-600">by Cabbage 🥬</p>
					</Link></header>
					<div className="nav-links"><ul>
						<Link to="/contact" style={{ textDecoration: 'none' }}>
							<li>
								<button className="bg-purple-700 text-white p-2 pl-3 pr-3 rounded-md font-medium hover:bg-purple-600">Get Started</button>
							</li>
						</Link>
					</ul></div>

				</nav>
			</>
		);
	}
}

export default NavBar;
