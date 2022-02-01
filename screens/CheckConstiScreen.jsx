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
import { SERVER } from "../components/defs";
export default function CheckConstiScreen() {
	const [ac, setAc] = useState(1);
	const [counter, setCounter] = useState(1);
	const [boothnum, setBoothnum] = useState(1);
	const [latitude, setLatitude] = useState();
	const [longitude, setLongitude] = useState();
	const [boothaddr, setBoothaddr] = useState("");
	const [lastupdated, setLastupdated] = useState();
	const [pollper, setPollper] = useState();
	const [encodedtime, setEncodedtime] = useState(0);

	const [numOfPpl, setNumOfPpl] = useState(21);
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
		const url = SERVER + "myq/getboothdet/" + ac + "/" + boothnum;
		fetch(url, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
			//body: JSON.stringify({'acnum': ac, 'password' : password })
		})
			.then(function (response) {
				return response.json();
			})
			.then((data1) => {
				setNumOfPpl(data1.num_people);
				setBoothaddr(data1.booth_address);

				setLatitude(data1.lat);
				setLongitude(data1.longt);
				const dt_time = data1.updated_at.split("T");
				const dt1 = dt_time[1].split(".");

				//let time=dt_time[1].split('.')
				setLastupdated(dt1[0]);
				setPollper((data1.votes_polled / data1.max_votes) * 100);
				setEncodedtime(parseInt(data1.encoded_time_votes_polled));
				//  timestamp  polling percentage and polloing percentage variable
				setIsLoading(false);
				//s//etPollper()
			});
	};
	//.catch((error) => console.error(error))
	// .finally(() => setLoading(false));*/

	return (
		<View style={{ flex: 1, padding: 1 }}>
			{isLoading ? (
				<View style={styles.container}>
					<View>
						<Text style={styles.actextstyle}>Select Assembly Constituency</Text>
						<Accom setAc={setAc} />
					</View>

					<View>
						<Text style={styles.pbtextstyle}>Select Polling Booth</Text>
						<Boothcom ac={ac} setBoothnum={setBoothnum} />
					</View>
					<TouchableOpacity onPress={handleSubmit} style={styles.btnstyle}>
						<Text style={styles.btntextstyle}>Submit</Text>
					</TouchableOpacity>
				</View>
			) : (
				<QueueScreen
					numOfPpl={numOfPpl}
					latitude={latitude}
					longitude={longitude}
					encodedtime={encodedtime}
					boothaddr={boothaddr}
					lastupdated={lastupdated}
					pollper={pollper}
					ac={ac}
					boothnum={boothnum}
				/>
			)}
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
