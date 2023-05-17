import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class AllPlatforms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            platform: [],
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        axios
            .get("https://cabecho.herokuapp.com/api/platforms/")
            .then((response) => this.setState({ platform: response.data }))
            .catch((error) => console.log(error));

    }

    render() {
        const all = this.state.platform;
        return (
            <>
                <div className="main-contents">
                {
                    this.props.type ? all.filter((filteredItem)=> filteredItem.types === this.props.type).map((platform, index) => (
                        <>
                            <div key={index}>
                                
                                    
                                    <div className="content-wrap">
                                        <Link style={{textDecoration: "none"}} to={`/${platform.types}/${platform.id}`}>
                                        <img
                                            className="content-img"
                                            src={platform.image}
                                            alt={platform.name}
                                            width={"250px"}
                                        />
                                        <br/>
                                        <span>
								{platform.name}
							</span>
                            </Link>
                                  </div>
                                  
                                    </div>

                        </>
                    )):
                        all.map((platform, index) =>(
                            <>
                            <Link style={{textDecoration: "none"}} to={`/${platform.types}/${platform.id}`}>
                                <div key={index}>
                                    
                                            <div className="content-wrap">
                                                <img
                                                    className="content-img"
                                                    src={platform.image}
                                                    alt={platform.name}
                                                    width={"250px"}
                                                />
                                                <br/>
                                                <span>
								{platform.name}
							</span>
                                            </div>
                                    
                                </div>
                                </Link>
                            </>
                        ))
                }
                    </div>
            </>
    )
    }
}

export default AllPlatforms;
