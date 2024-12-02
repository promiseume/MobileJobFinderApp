import React from "react";
import {
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text
} from "react-native";
import { COLORS, SIZES } from "../constants";

export default function ScreenHeaderBtn({
  iconUrl,
  dimension,
  handlePress,
}: {
  iconUrl: ImageSourcePropType;
  dimension: any;
  handlePress: () => void
}) {
  return (
    <>
    <TouchableOpacity>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={{
          width: dimension,
          height: dimension,
          borderRadius: SIZES.small / 1.25,
        }}
      />
    </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  }
});
