import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import {
	useFonts,
	Poppins_700Bold,
	Poppins_400Regular,
	Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

export default function HomeScreen({ navigation }) {
	//Check for login state
	const [loginState, setLoginState] = useState(true);
	let [fontsLoaded, error] = useFonts({
		Poppins_700Bold,
		Poppins_400Regular,
		Poppins_800ExtraBold,
	});
	if (!fontsLoaded) {
		return null;
	}

	//Used to navigate from Home to Select Constituency Screen
	function goToConst() {
		navigation.push("CheckConst");
	}

	//Used to navigate from Home to Check Login Screen(also sending the login state)
	function goToCheckLogin() {
		navigation.navigate("LoginCheck", { login: loginState });
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
			<TouchableOpacity onPress={goToCheckLogin} style={styles.loginbtnstyle}>
				<Text style={styles.loginbtntext}>
					{loginState ? "Update" : "Login"}
				</Text>
			</TouchableOpacity>
			<View style={styles.logotitle}>
				<Text style={styles.title}>Voter Q</Text>
				<Text style={styles.subtitle}>
					Check the Queue at your Polling Booth
				</Text>
			</View>
			<TouchableOpacity onPress={goToConst} style={styles.btnstyle}>
				<Text style={styles.btntext}>Next</Text>
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
		margin: 40,
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
		paddingRight: 65,
		paddingLeft: 65,
		paddingTop: 20,
		paddingBottom: 20,
		borderRadius: 5,
		position: "absolute",
		bottom: 60,
	},
	btntext: {
		color: "#5e17eb",
		fontSize: 22,
		fontWeight: "900",
		fontFamily: "Poppins_700Bold",
	},
	loginbtnstyle: {
		backgroundColor: "#fff",
		paddingRight: 35,
		paddingLeft: 35,
		paddingTop: 10,
		paddingBottom: 10,
		position: "absolute",
		top: 35,
		right: 25,
		borderRadius: 5,
		marginTop: 10,
	},
	loginbtntext: {
		color: "#5e17eb",
		fontSize: 20,
		fontWeight: "900",
		fontFamily: "Poppins_700Bold",
	},
});
