import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
  Image,
  StyleSheet,
} from "react-native";
import { useRouter } from 'expo-router';
import { COLORS, FONT, SIZES, icons  } from "@/constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];
export default function WelcomeScreen() {
  const [activeJobType, setActiveJobType] = useState('Full-time');
  const router = useRouter();
    return <View>
   <View style={styles.container}>
    <Text style={styles.userName}>Hello Anna</Text>
    <Text style={styles.welcomeMessage}>Find Your perfect job</Text>
   </View>
   <View style={styles.searchContainer}>
   <View style={styles.wrapper}>
    <TextInput style={styles.input} value="" onChange={() => {}}
      placeholder="enter your next role"/>
    </View>
    <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
      <Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage}/>
    </TouchableOpacity>
   </View>
   <View style={styles.tabsContainer}>
     <FlatList data={jobTypes} renderItem={({ item }) => (<TouchableOpacity style={tabStyle(activeJobType, item)}
     onPress={() => {
      setActiveJobType(item);
      router.push({
        pathname: '/search',
        query: { type: item },
      });
    }}>
      <Text>{item}</Text>
     </TouchableOpacity>)}/>
   </View>
  </View>;
}
const tabStyle = (activeJobType:string, item:any) => ({
  paddingVertical: SIZES.small / 2,
  paddingHorizontal: SIZES.small,
  borderRadius: SIZES.medium,
  borderWidth: 1,
  borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
});

const tabTextStyle = (activeJobType:string, item:any) => ({
  fontFamily: FONT.medium,
  color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
});
  const styles = StyleSheet.create({
    container: {
      width: "100%",
    },
    userName: {
      fontFamily: FONT.regular,
      fontSize: SIZES.large,
      color: COLORS.secondary,
    },
    welcomeMessage: {
      fontFamily: FONT.bold,
      fontSize: SIZES.xLarge,
      color: COLORS.primary,
      marginTop: 2,
    },
    searchContainer: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginTop: SIZES.large,
      height: 50,
    },
    wrapper: {
      flex: 1,
      backgroundColor: COLORS.white,
      marginRight: SIZES.small,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: SIZES.medium,
      height: "100%",
    },
    input: {
      fontFamily: FONT.regular,
      width: "100%",
      height: "100%",
      paddingHorizontal: SIZES.medium,
    },
    searchBtn: {
      width: 50,
      height: "100%",
      backgroundColor: COLORS.tertiary,
      borderRadius: SIZES.medium,
      justifyContent: "center",
      alignItems: "center",
    },
    searchBtnImage: {
      width: "50%",
      height: "50%",
      tintColor: COLORS.white,
    },
    tabsContainer: {
      width: "100%",
      marginTop: SIZES.medium,
    },
  });

