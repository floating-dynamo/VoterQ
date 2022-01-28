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

export default function Boothcom({ ac, setBoothnum }) {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const data = [
		[
			{ label: "Government Primary School, Tiracol", value: 1 },
			{
				label: "Government Primary School, Talwada, Querim (East Wing)",
				value: 2,
			},
			{
				label: "Government Primary School, Talwada, Querim (West Wing)",
				value: 3,
			},
			{
				label: "Government Primary School, Madhalawada, Querim (East Wing)",
				value: 4,
			},
		],
		[
			{ label: "Govt. Primary School, Manshiwada Corgao", value: 1 },
			{ label: "Govt. Primary School, Konadi, Corgao", value: 2 },
			{ label: "Govt. Primary School, Deusu, Corgao", value: 3 },
		],
		[
			{
				label: "Govt. Primary & Middle School Advalpal Gaonkarwada (East Wing)",
				value: 1,
			},
			{
				label: "Govt. Primary & Middle School Advalpal Gaonkarwada (West Wing)",
				value: 2,
			},
			{
				label: "Govt. Primary School Near Mauli Temple (East Wing), Mencurem",
				value: 3,
			},
			{
				label: "Govt. Primary School Near Mauli Temple (West Wing), Mencurem",
				value: 4,
			},
			{ label: "Govt. Primary School, Dhumacem", value: 5 },
		],
		[
			{ label: "Govt. Primary School, Khairat, Camurlim", value: 1 },
			{ label: "Govt. Primary School, Vagali, Camurlim", value: 2 },
			{ label: "Village Panchayt, Camurlim", value: 3 },
			{ label: "Office of Talathi, Camurlim", value: 4 },
			{
				label: "Office of Assistant Engineer SD III, WD VIII WRD, Karaswada",
				value: 5,
			},
			{
				label:
					"Mahatma Jyotiba Phule High School, Mushir Wado, Colvale(South Wing)",
				value: 6,
			},
		],
	];

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
