import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";

// Components import
import UserProfilePlan from "./UserProfilePlan";
import Title from "./Title";
import EditButton from "./EditButton";

// Constants
const meJSON = require("../constants/me.json");

// Gather app user's personnal plans to compare with user profile currently displayed
const myPlans = meJSON.plans.map((el) => el.plan);

const ProfilePlans = (props) => {
  const { image, name, data, self } = props;

  const renderEditButton = () => {
    if (self) {
      return <EditButton positionTop={10} />;
    } else {
      return null;
    }
  };

  // Check if current plan is in common with app user's ones
  const commonCheck = (item) => {
    // Don't run if on personnal profile page
    if (!self) {
      return myPlans.includes(item.plan);
    }
  };

  return (
    <Wrapper>
      {renderEditButton()}
      <Title colorText="darkGrey" center h2>
        Plans
      </Title>
      <Title colorText="mediumGrey" center h4>
        {self
          ? "You're looking for friends to ..."
          : `${name} is looking for friends to ...`}
      </Title>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 20,
        }}
        data={data}
        renderItem={({ item }) => (
          <UserProfilePlan common={commonCheck(item)} image={image}>
            {item.plan}
          </UserProfilePlan>
        )}
        keyExtractor={(item) => item.id}
      />
    </Wrapper>
  );
};

export default ProfilePlans;

// Styles

const Wrapper = styled.View``;
