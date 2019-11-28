import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Navigation from "./navigation";

StatusBar.setBarStyle("dark-content", true);

export default App = () => {
  // Custom Font
  const [loading, setLoading] = useState(true);

  const loadFonts = async () => {
    await Font.loadAsync({
      "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
      "nunito-semibold": require("./assets/fonts/Nunito-SemiBold.ttf"),
      "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
      "nunito-black": require("./assets/fonts/Nunito-Black.ttf")
    });
    setLoading(false);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return loading ? <AppLoading /> : <Navigation />;
};
