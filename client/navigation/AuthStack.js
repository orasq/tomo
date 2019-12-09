import React from "react";
import { createStackNavigator } from "react-navigation-stack";

// Theme
import { paddings } from "../styles/theme";

// Components import
import { BackArrow } from "../components/Icons";

// Screens
import LandingScreen from "../screens/LandingScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";

// Stack Navigator
export default AuthStack = createStackNavigator(
  {
    LandingScreen,
    SignupScreen,
    LoginScreen
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
