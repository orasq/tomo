import React from "react";
import styled from "styled-components";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Theme
import { colors, fonts } from "../styles/theme";

const Wip = () => {
  
  return (
    <Wrapper>
    <MaterialCommunityIcons name="sign-caution" size={25} color={colors.wipGrey} />
      <Text>Work in progress ...</Text>
    </Wrapper>
  );
};

export default Wip;

// Styles

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const Text = styled.Text`
  margin-left: 10px;
  font-size: 20px;
  font-family: ${fonts.semibold};
  color: ${colors.wipGrey};
`;
