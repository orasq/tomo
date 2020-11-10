import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import styled from "styled-components";
import axios from "axios";

// Theme
import { colors, fonts } from "../styles/theme";

// Components import
import { Container, Conversation } from "../components";

const MessagesScreen = ({ navigation }) => {
  const [fakeUsers, setFakeUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=12")
      .then((response) => {
        // handle success
        setFakeUsers(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <Container withHeader>
      {loading ? (
        <ActivityIndicator size="large" color={colors.mediumGrey} />
      ) : (
        <FlatList
          data={fakeUsers}
          renderItem={({ item }) => (
            <Conversation
              onPress={() => navigation.navigate("ChatScreen", { user: item })}
              avatar={item.picture.thumbnail}
              userName={item.name.first}
              excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              unreadMessages={1}
            />
          )}
          keyExtractor={(item) => item.phone}
        />
      )}
    </Container>
  );
};

export default MessagesScreen;

MessagesScreen.navigationOptions = {
  title: "Messages",
};
