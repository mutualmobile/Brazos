import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import ActiveLink from '../../theme/ActiveLink';


export default platform = {
	render: function({navigation}) {
		return (
			<View>
				<Text>Native Page View</Text>
				<ActiveLink navigation={navigation} to='home'></ActiveLink>
			</View>
		);
	}
}

