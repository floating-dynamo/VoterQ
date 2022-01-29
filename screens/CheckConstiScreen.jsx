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
import QueueScreen from "./QueueScreen";

export default function CheckConstiScreen({ navigation }) {
	const [ac, setAc] = useState(1);
	const [counter, setCounter] = useState(1);
	const [boothnum, setBoothnum] = useState(1);

	const [isLoading, setIsLoading] = useState(true);

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
		/*const url='http://127.0.0.1:8000/myq/api/auth/login/';
		fetch(url, {
		   method: 'POST',  headers: {       'Content-Type': 'application/json'    }, body: JSON.stringify({'acnum': ac, 'password' : password }) })
			  useEffect(() => {
		fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
		  .then((response) => response.json())
		  .then((json) => setData(json))
		  .catch((error) => console.error(error))
		  .finally(() => setLoading(false));*/
		// setNumOfPpl(10);
		// setLatitude(15.666346);
		// setLongitude(73.795632);
		//  timestamp  polling percentage and polloing percentage variable
		setIsLoading(false);
		// setPollper();
	};

	return (
		<>
			{isLoading ? (
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
						<Text onPress={handleSubmit} style={styles.btntextstyle}>
							Submit
						</Text>
					</TouchableOpacity>
				</View>
			) : (
				<QueueScreen />
			)}
		</>
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
