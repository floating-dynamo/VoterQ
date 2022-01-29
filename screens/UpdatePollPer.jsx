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
import { Dropdown } from "react-native-element-dropdown";

export default function App({ navigation }) {
	const [ac, setAc] = useState(1);
	const [counter, setCounter] = useState(1);
	const [boothnum, setBoothnum] = useState(1);

	const [numOfPpl, setNumOfPpl] = useState(0);
	const [pollTime, setPollTime] = useState("9:00 am");
	//get the current time
	useEffect(() => {
		var d = new Date();
		pollt = d.getHours();
		pollt += 1;
		if (pollt >= 9 && pollt < 11) {
			setPollTime("9:00 am");
		}
		if (pollt >= 11 && pollt < 13) {
			setPollTime("11:00 am");
		}
		if (pollt >= 15 && pollt < 17) {
			setPollTime("3:00 pm");
		}
		if (pollt >= 17) {
			setPollTime("5:00 pm");
		}
	}, []);

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
			<View style={{ marginBottom: 55, flex: 0.7 }}>
				<Text
					style={{
						textAlign: "center",
						fontFamily: "Poppins_500Medium",
						fontSize: 20,
						borderBottomWidth: 2,
						borderBottomColor: "#5e17eb",
						marginBottom: 10,
						paddingBottom: 10,
					}}
				>
					Your Assembly Constituency is
					<Text style={{ fontFamily: "Poppins_800ExtraBold" }}>
						{" Mandrem"}
					</Text>
				</Text>
				<Text
					style={{
						textAlign: "center",
						fontFamily: "Poppins_500Medium",
						fontSize: 20,
					}}
				>
					Your Polling Booth is {"\n"}
					<Boothcom ac={1} setBoothnum={setBoothnum} />
				</Text>
			</View>
			<View style={styles.inputbox}>
				<Text style={styles.inputlabel}>
					Enter number of votes as of{" "}
					<Text style={{ fontFamily: "Poppins_700Bold" }}>{pollTime}</Text>
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
		padding: 35,
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
	inputbox: {
		alignItems: "center",
		marginBottom: 15,
	},
	inputlabel: {
		fontFamily: "Poppins_500Medium",
		fontSize: 22,
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
