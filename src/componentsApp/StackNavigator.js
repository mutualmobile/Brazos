import React from 'react';
import { Button, ScrollView, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../components/Home';
import Page from '../components/Page';
import {nav} from '../stores/navigator';

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
debugger;
nav.setNavigator(StackNavigation);
export default StackNavigation;