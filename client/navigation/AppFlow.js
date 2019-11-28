import React from "react";
import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

// Theme
import { colors } from "../styles/theme";

// Components
import { TomoLogo } from "../components/Icons";

//Screens
import Users from "../screens/Users";
import FiltersUsers from "../screens/FiltersUsers";
import UserProfile from "../screens/UserProfile";
import Plans from "../screens/Plans";
import FiltersPlans from "../screens/FiltersPlans";
import Account from "../screens/Account";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";
import Messages from "../screens/Messages";
import Chat from "../screens/Chat";

// Home

const UsersFlow = createStackNavigator({
  Users,
  UserProfile,
  FiltersUsers
});

UsersFlow.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  // Detect which screen is displayed
  const routeName = navigation.state.routes[navigation.state.index].routeName;
  console.log(navigation.state.routes[navigation.state.index].routeName);
  if (routeName == "UserProfile") {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

const PlansFlow = createStackNavigator({
  Plans,
  FiltersPlans
});

const HomeFlow = createSwitchNavigator({
  UsersFlow,
  PlansFlow
});

HomeFlow.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TomoLogo color={focused ? colors.primary : colors.mediumGrey} />
  )
};

// Account

const AccountFlow = createStackNavigator({
  Account,
  Settings,
  Profile
});

AccountFlow.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <FontAwesome
      name="user"
      size={30}
      color={focused ? colors.primary : colors.mediumGrey}
    />
  )
};

// Messages

const MessagesFlow = createStackNavigator({
  Messages,
  Chat
});

MessagesFlow.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons
      name="message"
      size={30}
      color={focused ? colors.primary : colors.mediumGrey}
    />
  )
};

// Bottom Tab Navigator

export default AppFlow = createBottomTabNavigator(
  {
    AccountFlow,
    HomeFlow,
    MessagesFlow
  },
  {
    tabBarOptions: { showLabel: false, style: { height: 70 } }
  }
);
