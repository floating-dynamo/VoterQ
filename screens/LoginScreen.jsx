import {
	StyleSheet,
	View,
	TouchableOpacity,
	TextInput,
	Text,
	StatusBar,
	AsyncStorage,
} from "react-native";
import React, { useState } from "react";
import {
	useFonts,
	Poppins_700Bold,
	Poppins_400Regular,
	Poppins_800ExtraBold,
	Poppins_500Medium,
} from "@expo-google-fonts/poppins";

const LoginScreen = ({ navigation, props }) => {
	const [loginId, setLoginId] = useState("");
	const [password, setPassword] = useState("");

	const [loginState, setLoginState] = useState(false);

	let [fontsLoaded, error] = useFonts({
		Poppins_700Bold,
		Poppins_400Regular,
		Poppins_800ExtraBold,
		Poppins_500Medium,
	});
	if (!fontsLoaded) {
		return null;
	}

	const handleLoginSubmit = async () => {
		/*const url='http://127.0.0.1:8000/myq/api/auth/login/';
		fetch(url, {
		   method: 'POST',  headers: {       'Content-Type': 'application/json'    }, body: JSON.stringify({'acnum': ac, 'password' : password }) })
			  useEffect(() => {
		fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
		  .then((response) => response.json())
		  .then((json) => setData(json)
		  
		  
		  json.token)
	
	
		  'token : "adjdsfkjfbjfbjfbv" , "userid": 2
		  .catch((error) => console.error(error))
		  .finally(() => setLoading(false));*/
		// token and it will contain user id
		//useupd
		const token = "adjdsfkjfbjfbjfbv";

		await AsyncStorage.setItem("token", token);
		// await AsyncStorage.setItem('userid',);
		// await AsyncStorage.setItem('pb',pb);
		// pb =[1,4,5,6]
		setLogstatus(true);
		navigation.push("Home");
		//togglestatus
		//  console.log(logstatus)
		//	navigation.push("Home");
	};

	return (
		<View style={styles.loginstyle}>
			<View style={styles.loginformstyle}>
				<StatusBar style="auto" />
				<Text style={styles.title}>Update Queue & Poll</Text>
				<View>
					<Text style={styles.loginidstyle}>Login Id</Text>
					<TextInput
						onChange={(e) => {
							setLoginId(e.target.value);
						}}
						placeholder="Login Id"
						style={styles.input}
						name="Login"
						value={loginId}
					/>
					<TextInput
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						placeholder="Password"
						secureTextEntry={true}
						textContentType="password"
						style={styles.input}
						name="Pass"
						value={password}
					/>
				</View>
				<TouchableOpacity
					disabled={loginId === "" || password === ""}
					style={styles.btnstyle}
				>
					<Text onPress={handleLoginSubmit} style={styles.btntextstyle}>
						Login
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

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

export default LoginScreen;
