import('./styles/main.scss');
import React from 'react';
import { store } from 'rfx-core';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';
import { rehydrate, hotRehydrate } from 'rfx-core';

import { isProduction } from './utils/constants';
import App from './components/web/App';
import stores from './stores';
store.setup(stores);
const allStores = rehydrate();

const renderApp = Component => {
	render(
		<AppContainer>
			<Router>
				<Provider store={isProduction ? allStores : hotRehydrate()}>
					<App />
				</Provider>
			</Router>
		</AppContainer>,
		document.getElementById('root')
	);
};

renderApp(App);

if (module.hot) {
	module.hot.accept(() => renderApp(App));
}
