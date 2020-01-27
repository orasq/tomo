import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";

// Components import
import UserProfilePlan from "./UserProfilePlan";
import Title from "./Title";
import EditButton from "./EditButton";

const ProfilePlans = props => {
  const { image, name, data, self } = props;

  const renderEditButton = () => {
    if (self) {
      return <EditButton positionTop={10} />;
    } else {
      return null;
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
          marginTop: 20
        }}
        data={data}
        renderItem={({ item }) => (
          <UserProfilePlan image={image}>{item.plan}</UserProfilePlan>
        )}
        keyExtractor={item => item.id}
      />
    </Wrapper>
  );
};

export default ProfilePlans;

// Styles

const Wrapper = styled.View``;
