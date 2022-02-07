import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	BackHandler,
	Alert,
} from "react-native";
// import { useFocusEffect } from "@react-navigation";

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

export default function HomeScreen({ navigation }) {
	const { data, setData } = useContext(LogContext);

	let [fontsLoaded, error] = useFonts({
		Poppins_700Bold,
		Poppins_400Regular,
		Poppins_800ExtraBold,
	});

	// output: sahdkfjaskdflas$%^&
	if (!fontsLoaded) {
		return null;
	}

	//Used to navigate from Home to Select Constituency Screen
	function goToConst() {
		navigation.push("CheckConst");
	}

	//Used to navigate from Home to Login Screen
	function goToLogin() {
		navigation.push("Login");
	}
	function goToUpdate() {
		navigation.push("Update");
	}

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.logostyle}>
				<Image
					style={styles.ecglogoimagestyle}
					source={require("../assets/goavotes.jpg")}
				/>
			</View>

			{Object.keys(data).length != 0 ? (
				<TouchableOpacity onPress={goToUpdate} style={styles.loginbtnstyle}>
					<Text style={styles.loginbtntext}>UPDATE </Text>
				</TouchableOpacity>
			) : (
				<TouchableOpacity onPress={goToLogin} style={styles.loginbtnstyle}>
					<Text style={styles.loginbtntext}>LOGIN </Text>
				</TouchableOpacity>
			)}

			<View style={styles.logotitle}>
				<Text style={styles.title}>Voter{"\n"}Q</Text>
				<Text style={styles.subtitle}>
					Check the Queue at your Polling Booth
				</Text>
			</View>
			<TouchableOpacity onPress={goToConst} style={styles.btnstyle}>
				<Text style={styles.btntext}>NEXT</Text>
			</TouchableOpacity>
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
		padding: 25,
		flexDirection: "row",
	},
	logoimagestyle: {
		width: 80,
		height: 110,
		margin: 5,
	},
	ecglogoimagestyle: {
		width: 140,
		height: 165,
	},
	title: {
		textAlign: "center",
		fontSize: 48,
		margin: 20,
		color: "#fff",
		fontWeight: "900",
		fontFamily: "Poppins_800ExtraBold",
		paddingHorizontal: 50,
	},
	subtitle: {
		textAlign: "center",
		color: "#eee",
		fontFamily: "Poppins_400Regular",
		marginBottom: 30,
		fontSize: 16,
	},
	container: {
		flex: 1,
		backgroundColor: "#5e17eb",
		alignItems: "center",
		justifyContent: "center",
	},
	btnstyle: {
		backgroundColor: "#fff",
		paddingRight: 45,
		paddingLeft: 45,
		paddingTop: 15,
		paddingBottom: 15,
		borderRadius: 5,
		position: "absolute",
		bottom: 60,
	},
	btntext: {
		color: "#5e17eb",
		fontSize: 29,
		fontWeight: "900",
		fontFamily: "Poppins_700Bold",
	},
	loginbtnstyle: {
		backgroundColor: "#71C562",
		paddingRight: 15,
		paddingLeft: 15,
		paddingTop: 8,
		paddingBottom: 8,
		position: "absolute",
		top: 35,
		right: 25,
		borderRadius: 5,
		marginTop: 10,
	},
	loginbtntext: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "900",
		fontFamily: "Poppins_700Bold",
	},
});
