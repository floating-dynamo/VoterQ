import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Button,
	Image,
	Text,
	Alert,
	BackHandler,
} from "react-native";
import CheckConstiScreen from "./screens/CheckConstiScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import QueueScreen from "./screens/QueueScreen";
import UpdateQueueScreen from "./screens/UpdateQueueScreen";
import Navigator from "./routes/userHomeStack";
import { SecureStore } from "expo";
import { UserProvider } from "./components/userContext";
import { AsyncStorage } from "react-native";
import UpdateScreen from "./screens/UpdateScreen";

export const LogContext = React.createContext();

export default function App() {
	useEffect(() => {
		async function fetchAccounts() {
			const credentials = JSON.parse(await AsyncStorage.getItem("data"));
			//   console.log('value of credentials: ', credentials);

			if (credentials !== null && credentials !== undefined) {
				setData(credentials);
			} else {
				setData({});
			}
		}

		fetchAccounts();
	}, []);

	/*const read = async () => {
   
      const credentials = await AsyncStorage.getItem('token');
   //   console.log('value of credentials: ', credentials);

      if (credentials !== null && credentials !==undefined) {
        return true
      }
      else 
      {
        return false
        }
    } */
	const [data, setData] = useState({});

	return (
		<LogContext.Provider value={{ data, setData }}>
			<Navigator />
			{/* <UpdateScreen /> */}
		</LogContext.Provider>
	);
}
