import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";

// Theme
import { colors, paddings } from "../styles/theme";

// Components import
import { BackArrow } from "../components/Icons";

// Screens
import Landing from "../screens/Landing";
import Signup from "../screens/Signup";
import Login from "../screens/Login";

// Stack Navigator
export default LoginFlow = createStackNavigator(
  {
    Landing,
    Signup,
    Login
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: 60,
        backgroundColor: "white", // or 'white
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
      headerBackImage: <BackArrow />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: paddings.main,
        paddingRight: 2
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: 3
      }
    }
  }
);
