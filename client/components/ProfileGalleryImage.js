import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components";

// Theme
import { sizes, paddings } from "../styles/theme";

// Misc. variables
const { width } = Dimensions.get("window");
const imageWidth = (width - paddings.main * 4) / 3;

const ProfileGalleryImage = () => {
  return <Wrapper></Wrapper>;
};

export default ProfileGalleryImage;

// Styles

const Wrapper = styled.View`
  height: ${imageWidth};
  width: ${imageWidth};
  margin-bottom: ${paddings.main}px;
  background-color: yellow;
  border-radius: ${sizes.mainRadius};
`;
