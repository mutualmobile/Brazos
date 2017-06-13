import React,{Component} from 'react';
import { Button, ScrollView, Text } from 'react-native';
import { Provider } from 'mobx-react/native';
import { StackNavigator } from 'react-navigation';

import Home from '../shared/Home';
import Page from '../shared/Page';
import stores from '../../stores';
import createNavigationWrapper from '../../utils/createNavigationWrapper'

Home.navigationOptions = {
  title: 'Home',
};
Page.navigationOptions = {
  title: 'Page',
};

const StackNavigation = StackNavigator({
  home: {
    screen: Home,
  },
  page: {
    path: 'page',
    screen: Page,
  },
});

stores.nav.setNavigator(StackNavigation)
let NavigationWrapper = createNavigationWrapper(StackNavigation);
export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <NavigationWrapper />
      </Provider>
    );
  }
}