import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

// Theme
import { paddings } from "../styles/theme";

const Container = props => {
  const { children } = props;

  return (
    <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
        start={[0, 1]}
        end={[0, 1]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 30
        }}
      />
      <Content>{children}</Content>
    </ScrollView>
  );
};

export default Container;

const Content = styled.View`
  flex: 1;
  padding: ${paddings.main}px;
  padding-top: ${paddings.safeAreaTop}px;
`;
