// import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
	useFonts,
	Poppins_700Bold,
	Poppins_400Regular,
	Poppins_800ExtraBold,
	Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { CONSTITUENCY } from "./defs";
export default function Accom({ setAc }) {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	/*	const data = [
		{ label: "01 Mandrem", value: 1 },
		{ label: "02 Pernem", value: 2 },
		{ label: "03 Bicholim", value: 3 },
		{ label: "04 Tivim", value: 4 },
	];*/

	let [fontsLoaded, error] = useFonts({
		Poppins_700Bold,
		Poppins_400Regular,
		Poppins_800ExtraBold,
		Poppins_500Medium,
	});
	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Dropdown
				style={styles.dropdown}
				placeholderStyle={styles.placeholderStyle}
				selectedTextStyle={styles.selectedTextStyle}
				inputSearchStyle={styles.inputSearchStyle}
				iconStyle={styles.iconStyle}
				data={CONSTITUENCY}
				search
				maxHeight={300}
				labelField="label"
				valueField="value"
				placeholder="Select item"
				searchPlaceholder="Search..."
				value={value}
				onChange={(item) => {
					setValue(item.value);
					setAc(item.value);
				}}
				renderLeftIcon={() => (
					<AntDesign
						style={styles.icon}
						color="black"
						name="Safety"
						size={20}
					/>
				)}
			/>
			{/* <Text> Value {value} </Text> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.3,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		width: 300,
	},
	dropdown: {
		margin: 16,
		height: 50,
		borderBottomColor: "gray",
		borderBottomWidth: 0.5,
		width: 200,
	},
	icon: {
		marginRight: 5,
	},
	placeholderStyle: {
		fontSize: 16,
		fontFamily: "Poppins_400Regular",
	},
	selectedTextStyle: {
		fontSize: 16,
		fontFamily: "Poppins_400Regular",
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},
});
