import React, { useState, useEffect, useContext } from "react";
import { Text, View } from "react-native";
//import * as Permissions from "expo-permissions";
//import axios from "axios";
//import { AsyncStorage } from "react-native";
//import registerForPushNotificationsAsync from "../Hooks/registerForPushNotifications";
//import Constants from "expo-constants";

const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

//export default UserContext;

export function useUser() {
	return useContext(UserContext);
}

export function useUserUpdate() {
	return useContext(UserUpdateContext);
}

/* const get_logged_status = async () =>
{
  const signed_in = await AsyncStorage.getItem('secure_token');
  if (signed_in == null ) 
  return false
  else return true
}*/
export function UserProvider({ children }) {
	const [logstatus, setLogstatus] = useState("false");
	// const [didAuthenticate, setAuthenticated] = useState(null);

	return (
		<UserContext.Provider value={{ logstatus, setLogstatus }}>
			{children}
		</UserContext.Provider>
	);
}
