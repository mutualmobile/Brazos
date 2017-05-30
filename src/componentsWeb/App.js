import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";

import TopBar from "./TopBar";

@inject("store")
@observer
export default class App extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	componentDidMount() {
		this.authenticate();
	}
	authenticate(e) {
		if (e) e.preventDefault();
		this.store.appState.authenticate();
	}
	render() {
		const {
			authenticated,
			authenticating,
			timeToRefresh,
			refreshToken,
			testval
		} = this.store.appState;
		return (
			<div className="wrapper">
				{/*<DevTools />*/}
				<TopBar />

				<Route
					exact
					path="/"
					render={props => (
						<LazyRoute {...props} component={import("../components/Home")} />
					)}
				/>
				<Route
					exact
					path="/posts"
					render={props => (
						<LazyRoute {...props} component={import("../components/SubPage")} />
					)}
				/>
				<Route
					exact
					path="/posts/:id"
					render={props => (
						<LazyRoute {...props} component={import("../components/SubItem")} />
					)}
				/>
				<Route
					exact
					path="/login"
					render={props => (
						<LazyRoute {...props} component={import("../components/Login")} />
					)}
				/>
				<footer>
					{testval}
					
				</footer>
			</div>
		);
	}
}
