import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import styled from "styled-components";
import axios from "axios";

// Theme
import { colors, fonts } from "../styles/theme";

// Components import
import { ContainerWithHeader, Conversation } from "../components";

const MessagesScreen = ({ navigation }) => {
  const [fakeUsers, setFakeUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://uinames.com/api/?ext&amount=14")
      .then(function(response) {
        // handle success
        setFakeUsers(response.data);
        setLoading(false);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <ContainerWithHeader>
      {loading ? (
        <ActivityIndicator size="large" color={colors.mediumGrey} />
      ) : (
        <FlatList
          data={fakeUsers}
          renderItem={({ item }) => (
            <Conversation
              onPress={() =>
                navigation.navigate("ChatScreen", { userInfo: item })
              }
              avatar={item.photo}
              userName={item.name}
              excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              unreadMessages={1}
            />
          )}
          keyExtractor={item => item.phone}
        />
      )}
    </ContainerWithHeader>
  );
};

export default MessagesScreen;

MessagesScreen.navigationOptions = {
  title: "Messages",
  headerTintColor: colors.darkGrey,
  headerTitleStyle: {
    fontWeight: "200" /* use to be able to set custom font */,
    fontFamily: fonts.bold
  },
  headerStyle: {
    /* remove default shadow */
    shadowColor: "#5bc4ff",
    shadowOpacity: 0,
    shadowOffset: {
      height: 0
    },
    shadowRadius: 0,
    elevation: 1
  }
};

const Text = styled.Text`
  color: red;
`;
