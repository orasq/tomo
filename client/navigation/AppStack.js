import React from "react";
import styled from "styled-components";
import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation-tabs";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

// Theme
import { colors, fonts } from "../styles/theme";

// Components
import { TomoLogo } from "../components/Icons";

//Screens
import UsersScreen from "../screens/UsersScreen";
import UsersProfileScreen from "../screens/UsersProfileScreen";
import UsersFilterScreen from "../screens/UsersFilterScreen";
import PlansScreen from "../screens/PlansScreen";
import PlansFilterScreen from "../screens/PlansFilterScreen";
import AccountScreen from "../screens/AccountScreen";
import AccountSettingsScreen from "../screens/AccountSettingsScreen";
import AccountProfileScreen from "../screens/AccountProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ChatScreen from "../screens/ChatScreen";

// Home

const UsersStack = createStackNavigator(
  {
    UsersScreen,
    UsersProfileScreen,
    UsersFilterScreen
  },
  { headerLayoutPreset: "center" }
);

UsersStack.navigationOptions = {
  tabBarVisible: false
};

const PlansStack = createStackNavigator(
  {
    PlansScreen,
    PlansFilterScreen
  },
  { headerLayoutPreset: "center" }
);

PlansStack.navigationOptions = {
  tabBarVisible: false
};

const HomeStack = createBottomTabNavigator({
  UsersStack,
  PlansStack
});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  // Check if on the same level as TabBar
  if (navigation.state.routes[0].index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <TomoLogo color={focused ? colors.primary : colors.mediumGrey} />
    )
  };
};

// Account

const AccountStack = createStackNavigator(
  {
    AccountScreen,
    AccountSettingsScreen,
    AccountProfileScreen
  },
  { headerLayoutPreset: "center" }
);

AccountStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  // Check if on the same level as TabBar
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <FontAwesome
        name="user"
        size={30}
        color={focused ? colors.primary : colors.mediumGrey}
      />
    )
  };
};

// Messages

const MessagesStack = createStackNavigator(
  {
    MessagesScreen,
    ChatScreen
  },
  { headerLayoutPreset: "center" }
);

MessagesStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  // Check if on the same level as TabBar
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <MessageIconWrap>
        <NotificationBubble>14</NotificationBubble>
        <MaterialCommunityIcons
          name="message"
          size={30}
          color={focused ? colors.primary : colors.mediumGrey}
        />
      </MessageIconWrap>
    )
  };
};

// Notification Bubble

const MessageIconWrap = styled.View``;
const NotificationBubble = styled.Text`
  position: absolute;
  top: -4px;
  right: -6px;
  padding: 1px 6px;
  background-color: ${colors.primary};
  border-radius: 10px;
  border: 1px white;
  font-family: ${fonts.bold};
  font-size: 10px;
  color: white;
  z-index: 100;
`;

// Bottom Tab Navigator

export default AppStack = createBottomTabNavigator(
  {
    AccountStack,
    HomeStack,
    MessagesStack
  },
  {
    tabBarOptions: { showLabel: false, style: { height: 70 } }
  }
);
