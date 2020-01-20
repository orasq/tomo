import React from "react";
import styled from "styled-components";

// Theme
import { fonts, colors } from "../styles/theme";

const RadioButton = props => {
  const { selected, first, id, label, onPress } = props;

  const renderTipText = () => {
    if (id === 2) {
      return (
        <TipWrapper>
          <TipText>Will add a</TipText>
          <TipTag>New in town</TipTag>
          <TipText>tag to your profile.</TipText>
        </TipWrapper>
      );
    } else if (id === 3) {
      return (
        <TipWrapper>
          <TipText>Will add a</TipText>
          <TipTag>Leaving in ... days</TipTag>
          <TipText>tag to your profile.</TipText>
        </TipWrapper>
      );
    } else {
      return null;
    }
  };

  const renderRadioButton = () => {
    return (
      <Wrapper
        first={id === 1 ? true : false}
        onPress={onPress}
        activeOpacity={1}
      >
        <RadioButtonWrapper>
          <ButtonBorder>{selected ? <ButtonCenter /> : null}</ButtonBorder>
          <Label>{label}</Label>
        </RadioButtonWrapper>
        {renderTipText()}
      </Wrapper>
    );
  };

  return renderRadioButton();
};

export default RadioButton;

// Styles

const Wrapper = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: flex-start;
  ${props => (props.first ? null : "margin-top: 40px;")};
`;

const RadioButtonWrapper = styled.View`
  flex-direction: row;
  flex-shrink: 1;
  align-self: flex-start;
`;

const ButtonBorder = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border-width: 2;
  border-color: ${colors.mediumGrey};
  align-items: center;
  justify-content: center;
`;

const ButtonCenter = styled.View`
  width: 11px;
  height: 11px;
  border-radius: 3;
  background-color: ${colors.primary};
`;

const Label = styled.Text`
  margin-left: 20px;
  font-family: ${fonts.regular};
  font-size: 17px;
  color: ${colors.darkGrey};
`;

const TipWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  /* NEED TO BE MODIFIED - fixed width to allow centering of container */
  width: 220px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 5px;
  margin-left: 41px;
`;

const TipText = styled.Text`
  font-family: ${fonts.regular};
  font-size: 14px;
  color: ${colors.mediumGrey};
`;

const TipTag = styled(TipText)`
  margin: 0 8px;
  padding: 2px 10px;
  border: 1px dashed ${colors.mediumGrey};
  border-radius: 14px;
`;
