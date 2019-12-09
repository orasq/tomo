import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";

// Theme
import { fonts, colors, sizes } from "../styles/theme";

const UserProfilePlan = props => {
  const { children, image, common } = props;

  return (
    <Block {...props}>
      <Image source={{ uri: image }} common={common} />
      <Text {...props}>{children}</Text>
    </Block>
  );
};

export default UserProfilePlan;

// Style

const Block = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 5px 0;
  background-color: ${colors.whiteGrey};
  border-radius: ${sizes.mediumRadius};
  ${props => props.common && `background-color: ${colors.primary}`};
`;

const Image = styled.Image`
  width: 50px;
  height: 100%;
  background-color: ${colors.mediumGrey};
  border-radius: ${sizes.mediumRadius};
  border-width: 1px;
  border-color: ${colors.whiteGrey};
  ${props => props.common && `border-color: ${colors.primary}`};
`;

const Text = styled.Text`
  flex-shrink: 1;
  width: 100%;
  margin-left: 15px;
  padding-right: 10px;
  font-family: ${fonts.bold};
  font-size: 16px;
  line-height: 20;
  color: ${colors.darkGrey};
  ${props => props.common && "color: white"};
`;
