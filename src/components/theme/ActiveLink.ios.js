import React,{Component} from 'react';
import { Button } from 'react-native';
import { inject } from 'mobx-react/native';
import { NavigationActions } from 'react-navigation'

@inject('nav')
export default class ActiveLink extends Component {
  render(){
    let {to,nav} = this.props;
  	return (
      <Button
        onPress={() => {
          nav.navigate(to, {});
        }}
        title={'Go to '+to}
      />)
  }
}