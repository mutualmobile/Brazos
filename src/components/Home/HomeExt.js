import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import ActiveLink from "../ui/ActiveLink";
import Heading1 from "../../componentsTheme/Heading1";

export default platformCode = {
	render: function() {
		const store = this.store;
		return (
			<div className="page home">
        <Heading1>Web Home View</Heading1>
				<ActiveLink activeOnlyWhenExact={true} to="/page">Page</ActiveLink>
			</div>
		);
	}
}

