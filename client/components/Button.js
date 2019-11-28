import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";

// Theme
import { fonts } from "../styles/theme";

const Button = props => {
  const {
    text,
    bgColor,
    textColor,
    marginVertical,
    shadow,
    onPress,
    loading
  } = props;

  const buttonStyles = [
    shadow && {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 10
    },
    { backgroundColor: bgColor },
    { marginVertical: marginVertical }
  ];

  return (
    <Btn style={buttonStyles} onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" color={textColor} />
      ) : (
        <Text style={{ color: textColor }}>{text}</Text>
      )}
    </Btn>
  );
};

export default Button;

const Btn = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  border-radius: 28px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-family: ${fonts.bold};
  font-size: 14px;
  color: white;
  text-transform: uppercase;
`;
