import React from "react";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";

// Theme
import { colors, sizes, paddings } from "../styles/theme";

const PreviewProfileButton = (props) => {
  const { user, onPress } = props;
  return (
    <Wrapper onPress={onPress}>
      <HeaderLinkIcon name="eye" size={14} color="white" />
      <HeaderLinkAvatar source={{uri: user.picture}} />
    </Wrapper>
  );
};

export default PreviewProfileButton;

// Styles

const Wrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: ${sizes.smallRadius};
  background-color: #000000;
  overflow: hidden;
`;

const HeaderLinkAvatar = styled.ImageBackground`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colors.lightGrey};
  border-color: ${colors.whiteGrey};
  opacity: 0.5;
`;

const HeaderLinkIcon = styled(FontAwesome)`
  z-index: 10;
`;
