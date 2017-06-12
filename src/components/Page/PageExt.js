import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import ActiveLink from "../ui/ActiveLink";

export default platformCode = {
	render: function() {
		const store = this.store;
		return (
			<div className="page page">
        <h1>Page View</h1>
				<ActiveLink activeOnlyWhenExact={true} to="/">Go to Home</ActiveLink>
			</div>
		);
	}
}

