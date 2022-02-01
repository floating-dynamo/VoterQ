import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
	TouchableHighlight,
} from "react-native";
import React, { useContext } from "react";
import CheckConstiScreen from "./CheckConstiScreen";
import { LogContext } from "../App";
import { AsyncStorage } from "react-native";
import {
	useFonts,
	Poppins_700Bold,
	Poppins_400Regular,
	Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

export default function UpdateScreen({ navigation }) {
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
			<View style={styles.btnstyle2}>
				<TouchableHighlight onPress={goToLogout}>
					<Text style={styles.btntextstylelogout}>LOGOUT</Text>
				</TouchableHighlight>
			</View>
			<TouchableOpacity onPress={goToupdQ} style={styles.btnstyle}>
				<Text style={styles.btntextstyle}>UPDATE QUEUE</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={goToupdP} style={styles.btnstyle1}>
				<Text style={styles.btntextstyle}>UPDATE VOTES POLLED</Text>
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

		bottom: 10,
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
