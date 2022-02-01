import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import CheckConstiScreen from "../screens/CheckConstiScreen";
import LoginScreen from "../screens/LoginScreen";
import UpdateScreen from "../screens/UpdateScreen";
import UpdateQueueScreen from "../screens/UpdateQueueScreen";
import FlashScreen from "../screens/FlashScreen";
import { useState } from "react";
import UpdatePollPer from "../screens/UpdatePollPer";

const screens = {
	Flash: {
		screen: FlashScreen,
	},

	Home: {
		screen: HomeScreen,
	},
	Login: {
		screen: LoginScreen,
	},
	CheckConst: {
		screen: CheckConstiScreen,
	},
	Update: {
		screen: UpdateScreen,
	},
	UpdateQ: {
		screen: UpdateQueueScreen,
	},
	UpdateP: {
		screen: UpdatePollPer,
	},
};

const UserHomeStack = createStackNavigator(screens, {
	headerMode: "none",
	navigationOptions: {
		headerVisible: false,
	},
});

export default createAppContainer(UserHomeStack);
