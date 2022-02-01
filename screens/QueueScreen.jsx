import { Text, StyleSheet, View, Image, StatusBar } from "react-native";
import React, { useState } from "react";
//import MapView, { Marker } from "react-native-maps";
import { Constants, MapView } from "expo";
//import MapView from 'react-native-maps';
import {
	useFonts,
	Poppins_700Bold,
	Poppins_400Regular,
	Poppins_800ExtraBold,
	Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { CONSTITUENCY, POLLTIME, BOOTHS } from "../components/defs";

export default function QueueScreen({
	numOfPpl,
	latitude,
	longitude,
	encodedtime,
	boothaddr,
	lastupdated,
	pollper,
	ac,
	boothnum,
}) {
	//let pollper = votespolled/maxvotes
	//DecimalFormat  df = new DecimalFormat("#.00");
	// String pf = df.format(pollper);

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
		<View style={styles.querypage}>
			<StatusBar style="dark" />

			<Text style={styles.textstyle}>
				There are {numOfPpl} people in the Queue
			</Text>

			<Text style={styles.updatetextstyle}> Last Updated {lastupdated} </Text>
			<View style={styles.polling}>
				<Text style={styles.pollingtext}>
					Polling Percentage is{" "}
					<Text style={{ fontFamily: "Poppins_800ExtraBold" }}>{pollper}</Text>
				</Text>
				<Text style={styles.pollingpercent}>
					{" "}
					{POLLTIME[encodedtime].label}{" "}
				</Text>
			</View>
			{numOfPpl > 0 && numOfPpl <= 10 && (
				<Image
					style={styles.imgstyle}
					source={require("../assets/LessPpl.png")}
				/>
			)}
			{numOfPpl >= 11 && numOfPpl <= 20 && (
				<Image
					style={styles.imgstyle}
					source={require("../assets/MediumPpl.png")}
				/>
			)}
			{numOfPpl >= 21 && (
				<Image
					style={styles.imgstyle}
					source={require("../assets/ManyPpl.png")}
				/>
			)}

			<View>
				<Text style={styles.maptitle}>Your Polling Booth</Text>
				<Text style={styles.addressstyle}>{boothaddr}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	querypage: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#5e17eb",
		padding: 20,
	},
	textstyle: {
		fontSize: 23,
		color: "#fff",
		fontWeight: "900",
		fontFamily: "Poppins_700Bold",
		padding: 25,
		marginTop: 45,
		textAlign: "center",
	},
	imgstyle: {
		width: 200,
		height: 200,
	},
	map: {
		width: 150,
		height: 150,
		justifyContent: "center",
		alignContent: "center",
		marginHorizontal: 50,
		marginVertical: 15,
	},
	maptitle: {
		color: "#fff",
		textAlign: "center",
		marginBottom: 15,
		fontSize: 20,
		fontFamily: "Poppins_500Medium",
	},
	addressstyle: {
		color: "#fff",
		textAlign: "center",
		fontFamily: "Poppins_400Regular",
	},
	updatetextstyle: {
		color: "#fff",
		fontFamily: "Poppins_400Regular",
		marginBottom: 25,
	},
	polling: {
		margin: 5,
		textAlign: "center",
		alignItems: "center",
		marginBottom: 20,
	},
	pollingtext: {
		color: "#fff",
		fontFamily: "Poppins_400Regular",
	},
	pollingpercent: {
		color: "#fff",
		fontFamily: "Poppins_400Regular",
	},
});
