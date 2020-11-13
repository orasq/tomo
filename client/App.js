import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

// Navigation import
import Navigation from "./navigation";
// Set the status bar to dark tones, as the app's background is white
StatusBar.setBarStyle("dark-content", true);

// *import* for "Get rid of warning message :: to delete when Scrollview / Flatlist issue has been fixed"
import { LogBox } from "react-native";

export default App = () => {
  // Get rid of warning message :: to delete when Scrollview / Flatlist issue has been fixed
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  // Custom Font
  const [loading, setLoading] = useState(true);

  const loadFonts = async () => {
    await Font.loadAsync({
      "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
      "nunito-semibold": require("./assets/fonts/Nunito-SemiBold.ttf"),
      "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
      "nunito-black": require("./assets/fonts/Nunito-Black.ttf"),
    });
    setLoading(false);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return loading ? <AppLoading /> : <Navigation />;
};
