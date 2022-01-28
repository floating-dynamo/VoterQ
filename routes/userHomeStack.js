import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import CheckConstiScreen from "../screens/CheckConstiScreen";
import LoginScreen from "../screens/LoginScreen";
import UpdateQueueScreen from "../screens/UpdateQueueScreen";
import QueueScreen from "../screens/QueueScreen";
import UpdateScreen from "../screens/UpdateScreen";
import CheckLogin from "../screens/CheckLogin";

const screens = {
	Home: {
		screen: HomeScreen,
	},
	LoginCheck: {
		screen: CheckLogin,
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
