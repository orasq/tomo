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

  const isSecure = toggleSecure ? false : secure;

  return (
    <Wrapper style={{ marginVertical: marginVertical }}>
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
`;

const InputField = styled.TextInput`
  width: 100%;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  border-width: 0;
  border-bottom-width: 1px;
  border-color: ${colors.lightGrey};
  ${props => props.error && "border-color: red"};
  font-size: 16px;
  font-weight: 300;
  color: ${colors.darkGrey};
  background: white;
`;

const ToggleIcon = styled.Text`
  position: absolute;
  top: 32px;
  right: 0;
`;

const Label = styled.Text`
  font-family: ${fonts.bold};
  font-size: 16px;
  color: ${colors.darkGrey};
  /* ${props => props.error && "color: red"}; */
`;
