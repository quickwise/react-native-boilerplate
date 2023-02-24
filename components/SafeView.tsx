import type { FC, ReactNode } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const SafeScreenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
interface SafeScreenProps {
  children: ReactNode;
}

export const SafeScreen: FC<SafeScreenProps> = ({ children }) => {
  return <View style={SafeScreenStyles.screen}>{children}</View>;
};
