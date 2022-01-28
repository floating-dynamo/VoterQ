import React, { useState } from "react";
import { StyleSheet, View, Button, Image } from "react-native";
import CheckConstiScreen from "./screens/CheckConstiScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import QueueScreen from "./screens/QueueScreen";
import UpdateQueueScreen from "./screens/UpdateQueueScreen";
import Navigator from "./routes/userHomeStack";

export default function App() {
	//Keeping the Login state
	const [loginState, setLoginState] = useState(false);
	//Creating context
	export const UserContext = React.createContext();

	return (
		<UserContext.Provider value={loginState}>
			<Navigator />
		</UserContext.Provider>
	);
	//<LoginScreen />;
	// <HomeScreen />
	// <QueueScreen />
	// <CheckConstiScreen />
	// <UpdateQueueScreen />
}
