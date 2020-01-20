import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";

// Theme
import { colors, fonts } from "../styles/theme";

const Input = props => {
  const {
    label,
    error,
    secure,
    placeholder,
    marginVertical,
    defaultValue,
    onChangeText,
    value
  } = props;

  // States
  const [toggleSecure, setToggleSecure] = useState(false);

  const isSecure = toggleSecure ? false : secure;

  // Password visibility toggle button
  const renderToggle = () => {
    if (secure) {
      return (
        <ToggleIcon onPress={() => setToggleSecure(!toggleSecure)}>
          <FontAwesome
            name={toggleSecure ? "eye-slash" : "eye"}
            size={22}
            color={colors.mediumGrey}
          />
        </ToggleIcon>
      );
    }
  };

  return (
    <Wrapper marginVertical={marginVertical}>
      <Label error={error}>{label}</Label>
      <InputField
        error={error}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        value={value}
      />
      {renderToggle()}
    </Wrapper>
  );
};

export default Input;

// Styles

const Wrapper = styled.View`
  width: 100%;
  ${props => props.marginVertical && `margin: ${props.marginVertical}px 0`};
`;

const InputField = styled.TextInput`
  width: 100%;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  border-width: 0;
  border-bottom-width: 1px;
  border-color: ${props =>
    props.error ? `${colors.error}` : `${colors.lightGrey}`};
  font-size: 16px;
  font-weight: 300;
  color: ${colors.darkGrey};
  background: white;
`;

const ToggleIcon = styled.Text`
  position: absolute;
  top: 50%;
  right: 0;
`;

const Label = styled.Text`
  font-family: ${fonts.bold};
  font-size: 16px;
  color: ${colors.darkGrey};
  /* ${props => props.error && "color: red"}; */
`;
