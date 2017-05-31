import React from 'react';
import { Button, ScrollView, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from "../components/Home";

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <Text>{banner}</Text>
    <Button
      onPress={() => navigation.navigate('posts', { name: 'Post' })}
      title="Go to a posts screen"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <Home navigation={navigation} />
);
MyHomeScreen.navigationOptions = {
  title: 'Welcome',
};

const MyPostsScreen = ({ navigation }) => (
  <MyNavScreen
    banner={'Posts'}
    navigation={navigation}
  />
);
MyPostsScreen.navigationOptions = {
  title: 'Posts',
};

const StackNavigation = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  posts: {
    path: 'posts',
    screen: MyPostsScreen,
  },
});

export default StackNavigation;