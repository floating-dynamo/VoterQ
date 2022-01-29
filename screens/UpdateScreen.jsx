import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
} from "react-native";
import React from "react";
import CheckConstiScreen from "./CheckConstiScreen";
import LoginScreen from "./LoginScreen";

export default function UpdateScreen({ navigation }) {
	function goToupdQ() {
		navigation.navigate("UpdateQ");
	}
	function goToupdP() {
		navigation.navigate("UpdateP");
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={goToupdQ} style={styles.btnstyle}>
				<Text style={styles.btntextstyle}>UPDATE QUEUE</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={goToupdP} style={styles.btnstyle1}>
				<Text style={styles.btntextstyle}>UPDATE POLL</Text>
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
		paddingHorizontal: 30,
		paddingVertical: 20,
		borderRadius: 5,

		bottom: 70,
	},
	btnstyle1: {
		backgroundColor: "#fff",
		paddingHorizontal: 30,
		paddingVertical: 20,
		borderRadius: 5,

		bottom: 20,
	},
	btntextstyle: {
		textAlign: "center",
		fontSize: 24,
		color: "#5e17eb",
		fontFamily: "Poppins_700Bold",
	},
});

//export default UpdateScreen;
