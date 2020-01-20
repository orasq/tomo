import React, { useState } from "react";
import { Dimensions, Picker, FlatList } from "react-native";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";

// Theme
import { colors, sizes, fonts, paddings } from "../styles/theme";

// Components import
import { Container, Title, Divider, RadioButton, Tag } from "../components";

// Misc. variables
const { width } = Dimensions.get("window");
const cardWidth = (width - paddings.main * 3) / 2;

const AccountScreen = props => {
  const { navigation } = props;

  const [checkedRadio, setCheckedRadio] = useState(0);

  const radioButtonsLabel = [
    { id: 1, label: "I'm living here" },
    { id: 2, label: "I just moved in here" },
    { id: 3, label: "I'm still ... days in this area" }
  ];
  const renderRadioButtonList = () => {
    return (
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={radioButtonsLabel}
        renderItem={({ item }) => (
          <RadioButton
            id={item.id}
            selected={checkedRadio === item.id ? true : false}
            first={item.id === 1}
            label={item.label}
            onPress={() => setCheckedRadio(item.id)}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    );
  };

  return (
    <Container withHeader>
      <ButtonWrapper>
        <AccountButton
          onPress={() => navigation.navigate("AccountSettingsScreen")}
          padding="20px 10px"
        >
          <FontAwesome name="cog" size={30} color={colors.darkGrey} />
          <ButtonText textColor={colors.darkGrey}>General Settings</ButtonText>
        </AccountButton>
        <AccountButton
          onPress={() => navigation.navigate("AccountProfileScreen")}
          padding="0"
        >
          <ProfileImage source={require("../assets/images/alice.jpg")}>
            <Overlay />
            <FontAwesome name="edit" size={30} color="white" />
            <ButtonText textColor="white">Edit Your Profile</ButtonText>
          </ProfileImage>
        </AccountButton>
      </ButtonWrapper>
      <GeoStatusWrapper>
        <Title colorText="darkGrey" center h2>
          Geo Status
        </Title>
        <Title colorText="mediumGrey" center h4>
          What’s your status in this area ?
        </Title>
        <Divider />
        <RadioButtonForm>{renderRadioButtonList()}</RadioButtonForm>
      </GeoStatusWrapper>
      <PremiumWrapper>
        <PremiumText>Become a premium member 👑</PremiumText>
      </PremiumWrapper>
    </Container>
  );
};

export default AccountScreen;

AccountScreen.navigationOptions = {
  title: "Your Account"
};

// Styles

const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const AccountButton = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${cardWidth};
  padding: ${props => props.padding};
  border-radius: ${sizes.mainRadius};
  /* background-color: ${colors.whiteGrey}; */
  border: 1px solid ${colors.lightGrey};
  overflow: hidden;
`;

const ProfileImage = styled.ImageBackground`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;

const ButtonText = styled.Text`
  margin-top: 8px;
  font-family: ${fonts.semibold};
  font-size: 14px;
  color: ${props => props.textColor};
`;

const GeoStatusWrapper = styled.View`
  align-items: center;
  width: 100%;
  margin: ${paddings.main}px 0;
  padding: 30px;
  border-radius: ${sizes.mainRadius};
  /* background-color: ${colors.whiteGrey}; */
  border: 1px solid ${colors.lightGrey};
`;

const RadioButtonForm = styled.View`
  flex: 1;
  align-self: center;
`;

const PremiumWrapper = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: ${sizes.mainRadius};
`;

const PremiumText = styled.Text`
  padding: 5px 30px;
  font-family: ${fonts.bold};
  font-size: 18px;
  color: white;
`;
