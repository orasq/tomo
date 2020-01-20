import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";

// Components import
import UserProfilePlan from "./UserProfilePlan";
import Title from "./Title";

const ProfilePlans = props => {
  const { user } = props;

  const fakePlans = [
    { id: "1", plan: "Have a drink", image: user.photo },
    { id: "2", plan: "Discover the city", image: user.photo },
    {
      id: "3",
      plan: "Go to a concert: Denzel Curry (20/12/2019)",
      image: user.photo
    },
    { id: "4", plan: "Learn Spanish", image: user.photo }
  ];

  return (
    <Wrapper>
      <Title colorText="darkGrey" center h2>
        Plans
      </Title>
      <Title colorText="mediumGrey" center h4>
        {user.name} is looking for friends to ...
      </Title>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 20
        }}
        data={fakePlans}
        renderItem={({ item }) => (
          <UserProfilePlan image={item.image}>{item.plan}</UserProfilePlan>
        )}
        keyExtractor={item => item.id}
      />
    </Wrapper>
  );
};

export default ProfilePlans;

// Styles

const Wrapper = styled.View``;
