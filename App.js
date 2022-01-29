import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, Image, Text } from "react-native";
import CheckConstiScreen from "./screens/CheckConstiScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import QueueScreen from "./screens/QueueScreen";
import UpdateQueueScreen from "./screens/UpdateQueueScreen";
import Navigator from "./routes/userHomeStack";
import { SecureStore } from "expo";
import { UserProvider } from "./components/userContext";
import { AsyncStorage } from "react-native";

export const LogContext = React.createContext();

export default function App() {
	//Keeping the Login state
	useEffect(() => {
		async function fetchAccounts() {
			const credentials = await AsyncStorage.getItem("token1");
			//   console.log('value of credentials: ', credentials);

			if (credentials !== null && credentials !== undefined) {
				setLogstatus(true);
			} else {
				setLogstatus(false);
			}
		}

		fetchAccounts();
	}, []);

	const [logstatus, setLogstatus] = useState(false);

	return (
		<LogContext.Provider value={{ logstatus, setLogstatus }}>
			<Navigator />
		</LogContext.Provider>
	);
}
