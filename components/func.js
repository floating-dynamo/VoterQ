import { SecureStore } from "expo";

import React from "react";

//export const userContext = React.createContext()

//export { userContext };

/*export  async function get_logged_status () =>{

  let token = await SecureStore.getItemAsync('secure_token1');
 // const dt=JSON.parse(localStorage.getItem("dt"));
  console.log("inseide logged status")
 if (token !== null)
  return true
 else
  return false
}*/

module.exports = async function set_logged_status(token) {
	await SecureStore.setItemAsync("secure_token1", token);
};
