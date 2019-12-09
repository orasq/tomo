import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

// Theme
import { colors, fonts } from "../styles/theme";

const HomeHeader = props => {
  const { navigation, active } = props;

  return (
    <Container>
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
      <SettingsIcon
        onPress={() => {
          navigation.navigate("UsersFilterScreen");
        }}
      >
        <Icon name="cog" size={30} />
      </SettingsIcon>
    </Container>
  );
};

export default HomeHeader;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  margin-bottom: 10px;
`;

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

const SettingsIcon = styled(TouchableOpacity)`
  position: absolute;
  top: 20;
  right: 0;
`;

const Icon = styled(FontAwesome)`
  color: ${colors.mediumGrey};
`;
