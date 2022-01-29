// import DropDownPicker from "react-native-dropdown-picker";
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
import data from "./PollingBoothData";

export default function Boothcom({ ac, setBoothnum }) {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);

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
				data={data[ac - 1]}
				search
				maxHeight={400}
				labelField="label"
				valueField="value"
				placeholder="Select item"
				searchPlaceholder="Search..."
				value={value}
				onChange={(item) => {
					setValue(item.value);
					setBoothnum(item.value);
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
		width: 300,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 5,
	},
	dropdown: {
		margin: 16,
		height: 50,
		borderBottomColor: "gray",
		borderBottomWidth: 0.5,
		width: 220,
	},
	icon: {
		marginRight: 5,
	},
	placeholderStyle: {
		fontSize: 16,
		fontFamily: "Poppins_400Regular",
	},
	selectedTextStyle: {
		fontSize: 13,
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
