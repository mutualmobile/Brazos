import React, { Component } from "react";
import { StyleSheet, Image, View, Text } from 'react-native';
import ActiveLink from "../ui/ActiveLink";
import Heading1 from "../../componentsTheme/Heading1";


export default platform = {
	render: function({navigation}) {
		return (
			<View>
				<Heading1>Native Home View</Heading1>
				<ActiveLink navigation={navigation} to='page'></ActiveLink>
			</View>
		);
	}
}

