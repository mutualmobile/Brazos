import React, { Component } from "react";
import { Text, StyleSheet } from 'react-native';
import base from "../base";

const styles = StyleSheet.create({
  heading1: {
    fontSize: 20,
    color: base.primaryTextColor
  }
});

export default platformCode = {
	render: function() {
		return (
			<Text style={styles.heading1}>Web Page View</Text>
		);
	}
}