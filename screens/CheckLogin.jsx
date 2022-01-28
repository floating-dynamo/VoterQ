import { View, Text } from "react-native";
import React from "react";
import UpdateScreen from "./UpdateScreen";
import LoginScreen from "./LoginScreen";

const CheckLogin = ({ navigation }) => {
	return (
		<>
			{navigation.getParam("login") ? (
				<UpdateScreen navigation={navigation} />
			) : (
				<LoginScreen
					navigation={navigation}
					isloggedIn={navigation.getParam("login")}
				/>
			)}
		</>
	);
};

export default CheckLogin;
