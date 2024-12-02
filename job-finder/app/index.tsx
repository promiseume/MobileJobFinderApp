import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import {
  JobsNearBy,
  PopularJobs,
  ScreenHeaderBtn,
  WelcomeScreen,
} from "../components";
import { COLORS, icons, images, SIZES } from "../constants";
import { Stack } from "expo-router/stack";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <WelcomeScreen />
          <PopularJobs />
          <JobsNearBy />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
// export const screenOptions = {
//   headerShadowVisible: false,
//   headerStyle: { backgroundColor: COLORS.lightWhite },
//   headerLeft: () => (
//     <ScreenHeaderBtn iconUrl={icons.menu} dimension={60} handlePress={() => {}} />
//   ),
//   headerRight: () => (
//     <ScreenHeaderBtn iconUrl={images.profile} dimension={100} handlePress={() => {}} />
//   ),
//   headerTitle: "",
// };
// HomeScreen.options = screenOptions;

const styles = StyleSheet.create({});
