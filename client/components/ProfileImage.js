import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo, Ionicons } from "@expo/vector-icons";

// Theme
import { sizes } from "../styles/theme";

const ProfilImage = props => {
  const { images, navigation } = props;

  return (
    <ImageWrap>
      <Image source={{ uri: images }}>
        <FloatingHeader>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              style={{ marginLeft: 15 }}
              name="md-arrow-back"
              size={30}
              color="#ffffff"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo
              style={{ marginRight: 10 }}
              name="dots-three-vertical"
              size={23}
              color="#ffffff"
            />
          </TouchableOpacity>
        </FloatingHeader>
        <LinearGradient
          colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0)"]}
          start={[0, 0]}
          end={[0, 1]}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 60
          }}
        />
      </Image>
    </ImageWrap>
  );
};

export default ProfilImage;

// Styles

const FloatingHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 10;
`;

const ImageWrap = styled.View`
  border-radius: ${sizes.mainRadius};
  overflow: hidden;
`;

const Image = styled.ImageBackground`
  width: 100%;
  height: 300px;
`;
