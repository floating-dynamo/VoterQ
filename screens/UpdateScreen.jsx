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
export default function UpdateScreen({ navigation }) {
	const { data, setData } = useContext(LogContext);
	function goToupdQ() {
		navigation.navigate("UpdateQ");
	}
	function goToupdP() {
		navigation.navigate("UpdateP");
	}
	async function goToLogout() {
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
			<TouchableOpacity onPress={goToLogout} style={styles.btnstyle1}>
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
	btntextstyle: {
		textAlign: "center",
		fontSize: 23,
		color: "#5e17eb",
		fontFamily: "Poppins_700Bold",
	},
});

//export default UpdateScreen;
