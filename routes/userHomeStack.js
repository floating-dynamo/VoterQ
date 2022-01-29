import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import CheckConstiScreen from "../screens/CheckConstiScreen";
import LoginScreen from "../screens/LoginScreen";
import UpdateQueueScreen from "../screens/UpdateQueueScreen";
import QueueScreen from "../screens/QueueScreen";
import UpdateScreen from "../screens/UpdateScreen";
import UpdatePollPer from "../screens/UpdatePollPer";

const screens = {
	Home: {
		screen: HomeScreen,
	},
	Login: {
		screen: LoginScreen,
	},
	CheckConst: {
		screen: CheckConstiScreen,
	},
	UpdateSc: {
		screen: UpdateScreen,
	},
	UpdateQ: {
		screen: UpdateQueueScreen,
	},
	UpdateP: {
		screen: UpdatePollPer,
	},
	Queue: {
		screen: QueueScreen,
	},
};

const UserHomeStack = createStackNavigator(screens, {
	headerMode: "none",
	navigationOptions: {
		headerVisible: false,
	},
});

export default createAppContainer(UserHomeStack);
