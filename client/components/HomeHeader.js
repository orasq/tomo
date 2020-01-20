import React, { useState, useEffect } from "react";
import { TouchableOpacity, Animated, Easing } from "react-native";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";

// Theme
import { colors, fonts } from "../styles/theme";

const HomeHeader = props => {
  const { navigation, active, currentScrollPosition } = props;

  // Check scroll position and scroll direction to hide or show HomeHeader
  const [offset, setOffset] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [headerTranslate] = useState(new Animated.Value(0));

  useEffect(() => {
    const difference = currentScrollPosition - (offset || 0);
    // Fix problem of accuracy causing HomeHeader to show-up then immediately hide
    // if scrollposition is the same number 2 times in a row
    if (Math.abs(difference) < 3) {
      // Do nothing
    } else if (difference < 0) {
      scrollDirection === "down" ? setScrollDirection("up") : null;
    } else {
      scrollDirection === "up" ? setScrollDirection("down") : null;
    }
    setOffset(currentScrollPosition);
  });

  // Animate Header translate
  useEffect(() => {
    if (scrollDirection === "down" && currentScrollPosition > 300) {
      Animated.timing(headerTranslate, {
        toValue: -150,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: true // avoid laggyness in Android
      }).start();
    } else if (scrollDirection === "up") {
      Animated.timing(headerTranslate, {
        toValue: 0,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: true // avoid laggyness in Android
      }).start();
    }
  }, [scrollDirection]);

  // Differents settings buttons in 'Users' and 'Plans' screens
  const renderSettingsIcon = () => {
    // if (navigation.state.routeName === "UsersScreen") {
    if (false) {
      return (
        <UserSettingsIcon
          onPress={() => {
            navigation.navigate("UsersFilterScreen");
          }}
        >
          <Icon name="cog" size={30} />
        </UserSettingsIcon>
      );
    } else {
      return (
        <PlansSettingsIcon
          onPress={() => {
            navigation.navigate("PlansFilterScreen");
          }}
        >
          <Icon name="cog" size={30} />
        </PlansSettingsIcon>
      );
    }
  };

  return (
    <AnimatedContainer style={{ transform: [{ translateY: headerTranslate }] }}>
      <Toggle>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("UsersScreen");
          }}
        >
          <ToggleItem active={active.includes("users")}>People</ToggleItem>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PlansScreen");
          }}
        >
          <ToggleItem active={active.includes("plans")}>Plans</ToggleItem>
        </TouchableOpacity>
      </Toggle>
      {renderSettingsIcon()}
    </AnimatedContainer>
  );
};

export default HomeHeader;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  margin-bottom: 10px;
  background-color: white;
  z-index: 100;
`;

// make the container 'animatable'
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Toggle = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 35px;
  background-color: ${colors.lightGrey};
  border-radius: 17px;
  overflow: hidden;
`;

const ToggleItem = styled.Text`
  align-items: center;
  padding: 0 15px;
  height: 35px;
  border-radius: 17px;
  font-family: ${fonts.bold};
  font-size: 15px;
  line-height: 35px;
  color: white;
  ${props => props.active && `background-color: ${colors.primary}`}
`;

const UserSettingsIcon = styled(TouchableOpacity)`
  position: absolute;
  top: 20;
  left: 0;
`;

const PlansSettingsIcon = styled(TouchableOpacity)`
  position: absolute;
  top: 20;
  right: 0;
`;

const Icon = styled(FontAwesome)`
  color: ${colors.mediumGrey};
`;
