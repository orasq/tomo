import React from "react";
import styled from "styled-components";
import { Entypo, Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

// Theme
import { colors, fonts } from "../styles/theme";

const Tag = props => {
  const { children, type, common } = props;

  const renderIcon = () => {
    const iconColor = common ? "white" : colors.mediumGrey;

    switch (type) {
      case "temp":
        return <Feather name="clock" size={15} color={colors.primary} />;
      case "home":
        return <Entypo name="home" size={15} color={iconColor} />;
      case "job":
        return <Ionicons name="md-briefcase" size={15} color={iconColor} />;
      case "character":
        return <MaterialIcons name="face" size={15} color={iconColor} />;
      case "language":
        return <MaterialIcons name="language" size={15} color={iconColor} />;
      case "smoke":
        return (
          <MaterialIcons name="smoking-rooms" size={15} color={iconColor} />
        );
      default:
        return null;
    }
  };

  return (
    <Container {...props}>
      <Icon>{renderIcon()}</Icon>
      <Text {...props}>{children}</Text>
    </Container>
  );
};

export default Tag;

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 26px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 10px;
  border: 1px solid ${colors.mediumGrey};
  border-radius: 14px;
  ${props => props.common && "border: none"};
  ${props => props.common && `background-color: ${colors.primary}`};
  ${props => props.type === "temp" && `border-color: ${colors.primary}`};
  ${props => props.type === "temp" && "border-style: dashed"};
`;

const Icon = styled.Text``;

const Text = styled.Text`
  ${props => props.type && "padding-left: 8px"};
  font-family: ${fonts.semibold};
  font-size: 13px;
  line-height: 28;
  color: ${colors.darkGrey};
  ${props => props.common && "color: white"};
  ${props => props.type === "temp" && `color: ${colors.primary}`};
  ${props => props.type === "temp" && `font-family: ${fonts.bold}`};
`;
