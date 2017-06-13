import {
  NavigationAction,
  NavigationActions,
  NavigationNavigator,
  NavigationParams,
  NavigationRoute,
  NavigationRouter,
  NavigationState,
} from 'react-navigation';
import { action, computed, observable } from 'mobx';
import autobind from 'autobind-decorator';

export let HasRouter = {
  router: NavigationRouter,
};
let NavOrHasRouter = NavigationNavigator || HasRouter;

function getCurrentState(state){
  const childRoute = state.routes[state.index];
  if (childRoute.routes) {
    return getCurrentState(childRoute);
  }
  return childRoute;
}

export default class NavigationStore {
  @observable.ref navigationState = null;
  navigator: ?NavOrHasRouter = null;

  @action setNavigator(navigator) {
    this.navigator = navigator;
    this.navigationState = navigator.router.getStateForAction(NavigationActions.init({}));
  }

  @computed get router(){
    if (this.navigator) {
      return this.navigator.router;
    }
    return null;
  }

  @computed get params(){
    return this.state.params || {};
  }

  @action.bound dispatchNavigation(routerAction,reset=false){
    const previousNavState = reset ? null : this.navigationState;
    if (this.router) {
      const newState = this.router.getStateForAction(routerAction, previousNavState);
      if (newState && newState !== previousNavState) {
        this.navigationState = newState;
        return newState;
      }
    }
    return null;
  }

  @computed get state(){
    return getCurrentState(this.navigationState);
  }

  @autobind goBack(key){
    const navKey = this.navigationState ? this.navigationState.key : key;
    return this.dispatchNavigation(
      NavigationActions.back({
        key: key === undefined ? navKey : key,
      }),
    );
  }

  @autobind reset(routeName,params,navAction){
    const resetAction: NavigationAction = NavigationActions.navigate({
      routeName,
      params,
      actions: navAction,
    });

    return this.dispatchNavigation(
      {
        type: NavigationActions.RESET,
        actions: [resetAction],
        index: 0,
      },
      true,
    );
  }

  @autobind navigate(routeName,params,navAction){
    return this.dispatchNavigation(
      NavigationActions.navigate({
        routeName,
        params,
        action: navAction,
      }),
    );
  }

  @autobind setParams(params){
    return this.dispatchNavigation(
      NavigationActions.setParams({
        params,
        key: this.state.key,
      }),
    );
  }
}