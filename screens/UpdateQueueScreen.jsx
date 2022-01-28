import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
	useFonts,
	Poppins_700Bold,
	Poppins_400Regular,
	Poppins_800ExtraBold,
	Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import Boothcom from "../components/Boothcom";
import Accom from "../components/Accom";
import { TextInput } from "react-native-gesture-handler";

export default function App({ navigation }) {
	const [ac, setAc] = useState(1);
	const [counter, setCounter] = useState(1);
	const [boothnum, setBoothnum] = useState(1);

	const [numOfPpl, setNumOfPpl] = useState(0);

	let [fontsLoaded, error] = useFonts({
		Poppins_700Bold,
		Poppins_400Regular,
		Poppins_800ExtraBold,
		Poppins_500Medium,
	});
	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<View>
				<Text>Your Assembly Constituency is </Text>
				<Text>Your Polling Booth is </Text>
			</View>
			<View style={styles.inputbox}>
				<Text style={styles.inputlabel}>
					Enter number of People Currently in the Queue
				</Text>
				<TextInput
					onChange={(e) => {
						setNumOfPpl(e.target.value);
					}}
					placeholder="Enter the number"
					style={styles.input}
				/>
			</View>
			<TouchableOpacity style={styles.btnstyle}>
				<Text style={styles.btntextstyle}>Submit</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 60,
	},
	btnstyle: {
		backgroundColor: "#5e17eb",
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 35,
		paddingRight: 35,
		borderRadius: 5,
	},
	btntextstyle: {
		color: "#fff",
		fontSize: 20,
		fontFamily: "Poppins_500Medium",
	},
	actextstyle: {
		fontSize: 18,
		fontFamily: "Poppins_700Bold",
		textAlign: "center",
	},
	pbtextstyle: {
		fontSize: 18,
		fontFamily: "Poppins_700Bold",
		textAlign: "center",
	},
	inputbox: {
		alignItems: "center",
		marginBottom: 15,
	},
	inputlabel: {
		fontFamily: "Poppins_700Bold",
		fontSize: 18,
		textAlign: "center",
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		paddingLeft: 10,
		fontFamily: "Poppins_400Regular",
		borderRadius: 5,
		width: 200,
	},
});
