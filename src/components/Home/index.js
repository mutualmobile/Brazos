import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import platformCode from "./Extensions";

//@inject("store")
@observer
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
		navigation = this.props.navigation;
	}

	render() {
		return platformCode.render({navigation});
	}

}
