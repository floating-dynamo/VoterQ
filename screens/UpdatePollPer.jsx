import {
	View,
	Text,
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
import Boothcomnew from "../components/Boothcomnew";
import Alert from "react-native";
import Accom from "../components/Accom";
import QueueScreen from "./QueueScreen";
import { LogContext } from "../App";
import { BOOTHS } from "../components/defs";
import { SERVER } from "../components/defs";
import { CONSTITUENCY, POLLTIME } from "../components/defs";
import { TextInput } from "react-native-gesture-handler";
import { Dropdown } from "react-native-element-dropdown";

export default function App({ navigation }) {
	const [boothnum, setBoothnum] = useState();
	const { data, setData } = useContext(LogContext);
	const [pollTime, setPollTime] = useState(0);
	let ac = data.acnum;

	let pblist = [];
	for (let i = 0; i < data.poll_booth_list.length; i++) {
		pblist.push(BOOTHS[ac - 1][data.poll_booth_list[i] - 1]);
	}
	const [numOfPpl, setNumOfPpl] = useState(0);
	//const [isLoading,setIsLoading] =useState(true);

	//get the current time
	useEffect(() => {
		var d = new Date();
		let chosen_time = 0;
		let pollt = d.getHours();
		pollt += 1; // WHY IS THIS + 1
		if (pollt < 9) {
			chosen_time = 0;
		}
		if (pollt >= 9 && pollt < 11) {
			chosen_time = 1;
		} else if (pollt >= 11 && pollt < 13) {
			chosen_time = 2;
		} else if (pollt >= 13 && pollt < 15) {
			chosen_time = 3;
		} else if (pollt >= 15 && pollt < 17) {
			chosen_time = 4;
		} else if (pollt >= 17 && pollt < 18) {
			chosen_time = 5;
		} else {
			chosen_time = 6;
		}
		setPollTime(chosen_time);
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

	const handleSubmit = async (e) => {
		e.preventDefault();
		//if(loginId!==null)
		//  {
		const url = SERVER + "myq/api/auth/pup/";
		const Token = "Token " + data.token;
		// console.log(username)
		// console.log(passwword)
		//console.log(url)
		fetch(url, {
			method: "POST",
			body: JSON.stringify({
				acnum: ac,
				boothnum: boothnum,
				count: numOfPpl,
				encoded_time: POLLTIME[pollTime].value,
			}),
			headers: { "Content-Type": "application/json", Authorization: Token },
		})
			.then(function (response) {
				return response.json();
			})
			.then(async (data1) => {
				if (data1.status_code == 200) {
					//await AsyncStorage.setItem("data", JSON.stringify(data));

					//const st={'logged' : true };
					//await AsyncStorage.setItem("logged", JSON.stringify(st));
					// setData(data);
					//    setHasError(false);
					//    setErrorMessage("");

					navigation.push("Home");
					// setLogged(true);
					//  window.location.reload();
					// return data
				}
				/* else   if (data.status_code===500)
                  {
           //       setHasError(true);
//   setErrorMessage(data.error.error[0]);
                  e.target.reset();
                  //setUserName('');
                }
                else*/
				//
			});
	};

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
					<Boothcomnew pblist={pblist} setBoothnum={setBoothnum} />
				</Text>
			</View>
			<View style={styles.inputbox}>
				<Text style={styles.inputlabel}>
					Enter number of votes as of{" "}
					<Text style={{ fontFamily: "Poppins_700Bold" }}>
						{POLLTIME[pollTime].label}
					</Text>
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
		bottom: -40,
	},
	btntextstyle: {
		color: "#fff",
		fontSize: 20,
		fontFamily: "Poppins_500Medium",
	},
	inputbox: {
		alignItems: "center",
		marginBottom: 15,
		bottom: -40,
	},
	inputlabel: {
		fontFamily: "Poppins_400Regular",
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
