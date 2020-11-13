import React from "react";
import { Platform } from "react-native";
import styled from "styled-components";

// Theme
import { colors } from "../styles/theme";

// Composants import
import { VennIcon } from "./Icons";

const UserCardInterestTag = (props) => {
  const { number } = props;

  if (number != "0") {
    return (
      <Wrapper>
        <VennIcon size="30" />
        <Text>{number}</Text>
      </Wrapper>
    );
  } else {
    return <EmptyTag />;
  }
};

export default UserCardInterestTag;

// Styles

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-end; /* width of element depends on its content */
  width: auto;
  height: 25px;
  padding: 0 8px;
  background-color: ${colors.primary};
  border-radius: 13px;
`;

const Text = styled.Text`
  margin-top: ${Platform.OS === "android" ? -2 : 0}px;
  margin-left: 5px;
  font-family: "nunito-bold";
  font-size: 14px;
  color: white;
`;

const EmptyTag = styled.View`
  height: 25px;
  width: 10px;
`;
