import React,{Component} from 'react';
import { Button } from 'react-native';
import { inject } from 'mobx-react/native';
import { NavigationActions } from 'react-navigation'
// import {nav} from '../../stores/navigator'
@inject('nav')
export default class ActiveLink extends Component {
  render(){
    let {to,nav} = this.props;
    console.log(nav);
  	return (<Button
            onPress={() => {
              // console.log(nav.navigator)
              // debugger;
              nav.navigate(to, {});
            }}
            title={'Go to '+to}
          />)
  }
}

// export default ActiveLink;