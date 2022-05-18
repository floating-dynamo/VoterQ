import {
	View,
	Text,
	TextInput,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import {
	useFonts,
	Poppins_700Bold,
	Poppins_400Regular,
	Poppins_800ExtraBold,
	Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import Boothcom from "../components/Boothcom";

import Boothcomnew from "../components/Boothcomnew";
import Alert from "react-native";
import Accom from "../components/Accom";
import QueueScreen from "./QueueScreen.js";
import { LogContext } from "../App";
import { BOOTHS } from "../components/defs";
import { SERVER } from "../components/defs";
import { CONSTITUENCY } from "../components/defs";

export default function UpdateQueueScreen({ navigation }) {
	const [boothnum, setBoothnum] = useState();
	const { data, setData } = useContext(LogContext);
	const [ac, setAc] = useState(data.acnum);
	let isstaff = data.is_staff;

	let pblist = [];
	for (let i = 0; i < data.poll_booth_list.length; i++) {
		pblist.push(BOOTHS[ac - 1][data.poll_booth_list[i] - 1]);
	}
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

	const handleSubmit = async (e) => {
		e.preventDefault();

		const url = SERVER + "myq/api/auth/qup/";
		const Token = "Token " + data.token;
		let boothn;
		if (pblist.length == 1) boothn = pblist[0].value;
		else boothn = boothnum;

		fetch(url, {
			method: "POST",
			body: JSON.stringify({ acnum: ac, boothnum: boothn, count: numOfPpl }),
			headers: { "Content-Type": "application/json", Authorization: Token },
		})
			.then(function (response) {
				return response.json();
			})
			.then(async (data1) => {
				if (data1.status_code == 200) {
					navigation.navigate("Home");
				}
			});
	};
	return (
		<View style={styles.container}>
			{isstaff == 1 ? (
				<View>
					<Text style={styles.actextstyle}>Select Assembly Constituency</Text>
					<Accom setAc={setAc} />
					<Text style={styles.pbtextstyle}>Select Polling Booth</Text>
					<Boothcom ac={ac} setBoothnum={setBoothnum} />
				</View>
			) : (
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
						Your Assembly Constituency is {"\n"}
						<Text style={{ fontFamily: "Poppins_800ExtraBold" }}>
							{CONSTITUENCY[ac - 1].label}
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
						{pblist.length == 1 ? (
							<Text style={{ fontFamily: "Poppins_800ExtraBold" }}>
								{pblist[0].label}
							</Text>
						) : (
							<Boothcomnew pblist={pblist} setBoothnum={setBoothnum} />
						)}
					</Text>
				</View>
			)}
			<View style={styles.inputbox}>
				<Text style={styles.inputlabel}>
					Enter number of people currently in the Queue
				</Text>
				<TextInput
					onChangeText={(e) => {
						setNumOfPpl(e);
					}}
					placeholder="Enter the number"
					style={styles.input}
				/>
			</View>
			<TouchableOpacity onPress={handleSubmit} style={styles.btnstyle}>
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
		marginBottom: 2,
	},
	inputlabel: {
		fontFamily: "Poppins_500Medium",
		fontSize: 16,
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
