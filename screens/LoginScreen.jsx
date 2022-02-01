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
import set_logged_status from "../components/func";
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

export default function LoginScreen({ navigation }) {
	const SERVER = "http://210.212.162.134:8000/";
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();
	const { data, setData } = useContext(LogContext);
	//const [haserror,setHasError] = useState(false)
	//  const [errormessage,setErrorMessage]=useState("")
	//const logstatus=useUser()
	let [fontsLoaded, error] = useFonts({
		Poppins_700Bold,
		Poppins_400Regular,
		Poppins_800ExtraBold,
		Poppins_500Medium,
	});
	if (!fontsLoaded) {
		return null;
	}

	/*function updatePassword(e) {
		setPassword(e.target.value);
	}

	function updateLoginId(e) {
		setUserName(e.target.value);
	}

  */
	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		//if(loginId!==null)
		//  {
		const url = SERVER + "myq/api/auth/login/";
		// console.log(username)
		// console.log(passwword)
		//console.log(url)
		fetch(url, {
			method: "POST",
			body: JSON.stringify({ email: username, password: password }),
			headers: { "Content-Type": "application/json" },
		})
			.then(function (response) {
				return response.json();
			})
			.then(async (data) => {
				if (data.status_code === 500) {
					//       setHasError(true);
					//   setErrorMessage(data.error.error[0]);
					e.target.reset();
					//setUserName('');
				} else if (data.status_code == 200) {
					await AsyncStorage.setItem("data", JSON.stringify(data));

					//const st={'logged' : true };
					//await AsyncStorage.setItem("logged", JSON.stringify(st));
					setData(data);
					//    setHasError(false);
					//    setErrorMessage("");
					navigation.push("Home");
					// setLogged(true);
					//  window.location.reload();
					// return data
				}
				//
			});
		///if(token !=undefined)
		//{
		//  navigate('/')
	};
	//}

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
	// const token = "adjdsfkjfbjfbjfbv";

	//await AsyncStorage.setItem('token',token);
	// await AsyncStorage.setItem('userid',);
	// await AsyncStorage.setItem('pb',pb);
	// pb =[1,4,5,6]
	// setLogstatus(true);

	//togglestatus
	//  console.log(logstatus)
	//	navigation.push("Home");

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
					<Text style={styles.btntextstyle}>LOGIN</Text>
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
