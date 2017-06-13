import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import LazyRoute from 'lazy-route';
import DevTools from 'mobx-react-devtools';
import {withRouter} from 'react-router'

import TopBar from './TopBar';

@inject('store')
@withRouter
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
			<div className='wrapper'>
				{/*<DevTools />*/}
				<TopBar />

				<Route
					exact
					path='/'
					render={props => (
						<LazyRoute {...props} component={import('../shared/Home')} />
					)}
				/>
				<Route
					exact
					path='/page'
					render={props => (
						<LazyRoute {...props} component={import('../shared/Page')} />
					)}
				/>
				<footer>
					
				</footer>
			</div>
		);
	}
}