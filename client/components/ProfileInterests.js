import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons";

// Components import
import Tag from "./Tag";
import Title from "./Title";
import Divider from "./Divider";
import EditButton from "./EditButton";

// Constants
const meJSON = require("../constants/me.json");

// Gather app user's personnal plans to compare with user profile currently displayed
const myInterests = Object.values(meJSON.interests);
// Dirty ... for tests purposes. Get every elements of different arrays and 'flat' them to a new array
const dirtyFlatInterestsList = myInterests.map((el) => el.elements).flat();

const ProfileInterests = (props) => {
  const { category, elements, last, self } = props;

  // Check if current info is in common with app user's ones
  const commonCheck = (item) => {
    // Don't run if on personnal profile page
    if (!self) {
      return dirtyFlatInterestsList.includes(item);
    }
  };

  const renderEditButton = () => {
    if (self) {
      return <EditButton positionTop={20} />;
    } else {
      return null;
    }
  };

  const renderDivider = () => {
    if (!last) {
      return <Divider />;
    }
  };

  const renderIcon = () => {
    switch (category) {
      case "music":
        return <MaterialCommunityIcons name="music" size={20} />;
      case "sport":
        return <Ionicons name="ios-football" size={20} />;
      case "books":
        return <Entypo name="book" size={20} />;
    }
  };
  // To optimize: icon + text should me in ONE function
  const titleTextRender = () => {
    switch (category) {
      case "music":
        return "Music";
      case "sport":
        return "Sport";
      case "books":
        return "Books";
    }
  };

  return (
    <Wrapper>
      {renderEditButton()}
      <Title colorText="darkGrey" marginTop={20} marginBottom={20} center h3>
        {renderIcon()} {titleTextRender()}
      </Title>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          marginBottom: 10,
        }}
      >
        {elements.map((item) => {
          return (
            <Tag common={commonCheck(item)} key={item}>
              {item}
            </Tag>
          );
        })}
      </ScrollView>
      {renderDivider()}
    </Wrapper>
  );
};

export default ProfileInterests;

// Styles

const Wrapper = styled.View``;
