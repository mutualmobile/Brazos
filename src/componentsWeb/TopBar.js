import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link, withRouter } from "react-router-dom";

import TopNav from "./TopNav";
import Button from "../components/ui/Button";

@withRouter
@inject("store")
@observer
export default class TopBar extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	authenticate(e) {
		if (e) e.preventDefault();
		console.log("CLICKED BUTTON");
		this.store.authenticate();
	}

	render() {
		const { authenticated } = this.store;
		return (
			<div className="topbar">
				<TopNav location={this.props.location} />
				<Button
					onClick={this.authenticate.bind(this)}
					title={authenticated ? "Log out" : "Sign in"}
				/>
			</div>
		);
	}
}
