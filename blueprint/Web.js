import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

@inject('store')
@observer
export default class /* @echo CLASSNAME */ extends Component {
	render() {
		return (
			<div className='page /* @echo CLASSNAME */'>
				{this.props.store.authenticated &&
					!this.props.store.authenticating &&
					<Redirect to='/' />}
			</div>
		);
	}
}