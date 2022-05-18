import {
	StyleSheet,
	View,
	TouchableOpacity,
	TextInput,
	Text,
	StatusBar,
} from "react-native";
import React, { useState, useContext } from "react";
import { useUserUpdate, useUser } from "../components/userContext";
import { SecureStore } from "expo";
import {
	useFonts,
	Poppins_700Bold,
	Poppins_400Regular,
	Poppins_800ExtraBold,
	Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { LogContext } from "../App";
import { AsyncStorage } from "react-native";
import { SERVER } from "../components/defs";

export default function LoginScreen({ navigation }) {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();
	const { data, setData } = useContext(LogContext);

	let [fontsLoaded, error] = useFonts({
		Poppins_700Bold,
		Poppins_400Regular,
		Poppins_800ExtraBold,
		Poppins_500Medium,
	});
	if (!fontsLoaded) {
		return null;
	}

	const handleLoginSubmit = async (e) => {
		e.preventDefault();

		const url = SERVER + "myq/api/auth/login/";

		fetch(url, {
			method: "POST",
			body: JSON.stringify({
				email: username.toLowerCase(),
				password: password,
			}),
			headers: { "Content-Type": "application/json" },
		})
			.then(function (response) {
				return response.json();
			})
			.then(async (data) => {
				if (data.status_code === 500) {
					e.target.reset();
				} else if (data.status_code == 200) {
					await AsyncStorage.setItem("data", JSON.stringify(data));

					setData(data);

					navigation.push("Home");
				}
			});
	};

	return (
		<View style={styles.loginstyle}>
			<View style={styles.loginformstyle}>
				<StatusBar style="auto" />
				<Text style={styles.title}>UPDATE QUEUE</Text>
				<View>
					<Text style={styles.loginidstyle}>Login Id</Text>
					<TextInput
						onChangeText={(e) => setUserName(e)}
						placeholder="Login Id"
						style={styles.input}
						name="Login"
						value={username}
					/>

					<TextInput
						onChangeText={(e) => setPassword(e)}
						placeholder="Password"
						secureTextEntry={true}
						textContentType="password"
						style={styles.input}
						name="Pass"
						value={password}
					/>
				</View>
				<TouchableOpacity onPress={handleLoginSubmit} style={styles.btnstyle}>
					<Text style={styles.btntextstyle}>Login</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	loginstyle: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#5e17eb",
	},
	loginformstyle: {
		backgroundColor: "#fff",
		width: 320,
		padding: 30,
		flex: 0.65,
		borderRadius: 20,
		justifyContent: "space-between",
		alignContent: "center",
	},
	title: {
		fontSize: 26,
		color: "#5e17eb",
		fontFamily: "Poppins_800ExtraBold",
		textAlign: "center",
	},
	btnstyle: {
		backgroundColor: "#5e17eb",
		borderRadius: 5,
	},
	btntextstyle: {
		textAlign: "center",
		fontSize: 23,
		color: "#fff",
		fontFamily: "Poppins_700Bold",
	},
	loginidstyle: {
		marginLeft: 12,
		fontFamily: "Poppins_500Medium",
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		paddingLeft: 10,
		fontFamily: "Poppins_400Regular",
		borderRadius: 5,
	},
});

//export default LoginScreen;
