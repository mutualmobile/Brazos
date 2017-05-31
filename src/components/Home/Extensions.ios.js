import React, { Component } from "react";
import { StyleSheet, Image, View, Text } from 'react-native';
import ActiveLink from "../ui/ActiveLink";


export default platform = {
	render: function({navigation}) {
		return (
			<View>
				<Text>Native Home View</Text>
				<ActiveLink navigation={navigation} to='posts'></ActiveLink>
			</View>
		);
	}
}

