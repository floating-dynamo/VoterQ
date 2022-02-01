import React, { useContext, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

//import {useUser} from "../components/userContext";
import {
	useFonts,
	Poppins_700Bold,
	Poppins_400Regular,
	Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
//import get_logged_status from "../components/func"

import { SecureStore } from "expo";
import { LogContext } from "../App";

export default function FlashScreen({ navigation }) {
	const [show, setShow] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => {
			setShow(true);
		}, 3000);
	}, []);

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.logostyle}>
				{show ? (
					navigation.push("Home")
				) : (
					<Image
						style={styles.ecglogoimagestyle}
						source={require("../assets/goavotes.jpg")}
					/>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	logostyle: {
		width: 220,
		height: 220,
		borderRadius: 220 / 2,
		justifyContent: "center",
		alignContent: "center",
		backgroundColor: "#fff",
		padding: 45,
		flexDirection: "row",
	},

	ecglogoimagestyle: {
		width: 140,
		height: 140,
	},

	container: {
		flex: 1,
		backgroundColor: "#5e17eb",
		alignItems: "center",
		justifyContent: "center",
	},
});
