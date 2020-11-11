import React from "react";
import { Dimensions, TouchableOpacity, Platform } from "react-native";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";

// Theme
import { colors, sizes, paddings } from "../styles/theme";

// Misc. variables
const { width } = Dimensions.get("window");
const imageWidth = (width - paddings.main * 4) / 3;

const ProfileGalleryImage = (props) => {
  const { url } = props;

  const renderImage = () => {
    if (url) {
      return (
        <>
          <Image source={{uri:url}} />
          <DeleteButton>
            <CloseIcon name="close" size={15} color="white" />
          </DeleteButton>
        </>
      );
    } else {
      return (
        <EmptyBlock>
          <AddButton>
            <AddIcon name="plus" size={15} color="white" />
          </AddButton>
        </EmptyBlock>
      );
    }
  };

  return <Wrapper>{renderImage()}</Wrapper>;
};

export default ProfileGalleryImage;

// Styles

const Wrapper = styled.View`
  height: ${imageWidth};
  width: ${imageWidth};
  margin-bottom: ${paddings.main}px;
  border-radius: ${sizes.mainRadius};
  overflow: hidden;
`;

const Image = styled.ImageBackground`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const EmptyBlock = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: ${sizes.mainRadius};
  border: 2px dashed;
  border-color: ${colors.primary};
`;

const AddButton = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  border-radius: 12px;
  background-color: ${colors.primary};
`;

const DeleteButton = styled(AddButton)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const CloseIcon = styled(FontAwesome)`
  margin-top: ${Platform.OS === "android" ? -1 : 0}px;
`;

const AddIcon = styled(FontAwesome)`
  margin-top: ${Platform.OS === "android" ? 1 : 0}px;
`;
