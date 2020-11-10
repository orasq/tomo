import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

// Theme
import { paddings } from "../styles/theme";

const Container = (props) => {
  const { children, home, withHeader, login, safeArea, center } = props;

  const renderContainer = () => {
    if (home) {
      // For the Home (UsersScreen and PlansScreen)
      return <ContainerHome>{children}</ContainerHome>;
    } else if (withHeader) {
      // For screens with React Native header
      return (
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <ContentWithHeader>{children}</ContentWithHeader>
        </ScrollView>
      );
    } else {
      // For fullscreen screens (e.g.: UserProfileScreen )
      return (
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
        >
          {/* Gradient (or solid bloc) behind the status bar for scrolling readability purpose */}
          <LinearGradient
            colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
            start={[0, 1]}
            end={[0, 1]}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: 40,
            }}
          />
          <Content {...props}>{children}</Content>
        </ScrollView>
      );
    }
  };

  return renderContainer();
};

export default Container;

const Content = styled.View`
  flex: 1;
  padding: ${(props) => (props.login ? paddings.login : paddings.main)}px;
  padding-top: ${(props) => (props.safeArea ? paddings.safeAreaTop : "0")}px;
  ${(props) => props.center && `align-items: center`};
`;

const ContentWithHeader = styled.View`
  flex: 1;
  padding: ${paddings.main}px;
`;

const ContainerHome = styled.View`
  flex: 1;
  margin: ${paddings.main}px;
  margin-top: ${paddings.safeAreaTop}px;
  margin-bottom: 0;
  justify-content: center;
`;
