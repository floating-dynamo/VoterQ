import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import CheckConstiScreen from "./CheckConstiScreen";
import { LogContext } from "../App";
import { AsyncStorage } from "react-native";
import { SERVER } from "../components/defs";
export default function UpdateScreen({ navigation }) {
	const { data, setData } = useContext(LogContext);
	function goToupdQ() {
		navigation.navigate("UpdateQ");
	}
	function goToupdP() {
		navigation.navigate("UpdateP");
	}
	async function goToLogout() {
		const url = SERVER + "myq/api/auth/logout/";
		const Token = "Token " + data.token;
		// console.log(username)
		// console.log(passwword)
		//console.log(url)
		fetch(url, {
			method: "POST",

			headers: { "Content-Type": "application/json", Authorization: Token },
		}).then(function (response) {
			console.log("response", response);
			if (!response.ok) {
				throw Error();
			}
			//sessionStorage.setItem('token', '')
			//sessionStorage.clear();

			//  return response.json()
		});
		await AsyncStorage.removeItem("data");
		setData({});
		navigation.navigate("Home");
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={goToupdQ} style={styles.btnstyle}>
				<Text style={styles.btntextstyle}>UPDATE QUEUE</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={goToupdP} style={styles.btnstyle1}>
				<Text style={styles.btntextstyle}>UPDATE VOTES POLLED</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={goToLogout} style={styles.btnstyle2}>
				<Text style={styles.btntextstyle}>LOGOUT</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#5e17eb",
		alignItems: "center",
		justifyContent: "center",
	},
	btnstyle: {
		backgroundColor: "#fff",
		paddingRight: 30,
		paddingLeft: 30,
		paddingTop: 20,
		paddingBottom: 20,
		borderRadius: 5,

		bottom: 60,
	},
	btnstyle1: {
		backgroundColor: "#fff",
		paddingRight: 30,
		paddingLeft: 30,
		paddingTop: 20,
		paddingBottom: 20,
		borderRadius: 5,

		bottom: 40,
	},
	btnstyle2: {
		backgroundColor: "#E40078",
		paddingHorizontal: 15,
		paddingVertical: 8,
		borderRadius: 5,
		top: "-29%",
		right: "-29%",
	},
	btntextstyle: {
		textAlign: "center",
		fontSize: 23,
		color: "#5e17eb",
		fontFamily: "Poppins_700Bold",
	},
	btntextstylelogout: {
		textAlign: "center",
		fontSize: 18,
		color: "#fff",
		fontFamily: "Poppins_700Bold",
	},
});

//export default UpdateScreen;
