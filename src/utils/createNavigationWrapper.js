import { addNavigationHelpers } from 'react-navigation';
import { inject, observer } from 'mobx-react/native';
import React from 'react';

export default function createNavigationWrapper(Component){
  @inject('nav')
  @observer
  class NavigationWrapper extends React.Component {
    render() {
      const { nav } = this.props;
      const navigationHelper = addNavigationHelpers({
        dispatch: nav.dispatchNavigation,
        state: nav.navigationState,
      });
      return <Component navigation={navigationHelper} />;
    }
  }
  return NavigationWrapper;
}