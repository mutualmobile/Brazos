import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import platformCode from "./PageExt";

//@inject("store")
//@observer
export default class Page extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
		navigation = this.props.navigation;
	}

	render() {
		return platformCode.render({navigation});
	}

}
