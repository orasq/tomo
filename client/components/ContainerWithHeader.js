import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";

// Theme
import { paddings } from "../styles/theme";

const ContainerWithHeader = props => {
  const { children } = props;

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Content>{children}</Content>
    </ScrollView>
  );
};

export default ContainerWithHeader;

const Content = styled.View`
  flex: 1;
  padding: ${paddings.main}px;
`;
