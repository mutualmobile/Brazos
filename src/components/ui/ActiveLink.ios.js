import React from "react";
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation'

const ActiveLink = ({ to, activeOnlyWhenExact, ...rest }) => (
	<Button
      onPress={() => {
        const navigateAction = NavigationActions.navigate({
          routeName: to,
          params: {}
        });
        navigation.dispatch(navigateAction);
      }}
      title={'Go to '+to}
    />
);

export default ActiveLink;