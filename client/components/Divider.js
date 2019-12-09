import React from "react";
import styled from "styled-components";

// Theme
import { colors } from "../styles/theme";

const Divider = () => {
  return (
    <Block>
      <Bar />
    </Block>
  );
};

export default Divider;

const Block = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
`;
const Bar = styled.View`
  width: 24px;
  height: 4;
  background-color: rgba(95, 232, 153, 0.3);
  border-radius: 2;
`;
