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

export default function CheckConstiScreen({ navigation }) {
	const [ac, setAc] = useState(1);
	const [counter, setCounter] = useState(1);
	const [boothnum, setBoothnum] = useState(1);

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
				<Text style={styles.actextstyle}>Select Assembly Constituency</Text>
				<Accom setAc={setAc} />
			</View>
			{/* <Text> AC chosen is {ac} </Text> */}
			<View>
				<Text style={styles.pbtextstyle}>Select Polling Booth</Text>
				<Boothcom ac={ac} setBoothnum={setBoothnum} />
			</View>
			<TouchableOpacity
				onPress={() => {
					navigation.push("Queue");
				}}
				style={styles.btnstyle}
			>
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
});
