import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import styled from "styled-components";
import axios from "axios";

// Theme
import { colors, fonts } from "../styles/theme";

// Components import
import { Container, Conversation } from "../components";

// Constants
var messagesJSON = require("../constants/messages.json");

const MessagesScreen = ({ navigation }) => {
  const [conversation, setConversation] = useState(messagesJSON);
  const [loading, setLoading] = useState(true);
  
  // Fake loading time
  useEffect(() => {
    setTimeout(() => { setLoading(false); }, 1000);
  }, []);

  return (
    <Container withHeader>
      {loading ? (
        <ActivityIndicator size="large" color={colors.mediumGrey} />
      ) : (
        <FlatList
          data={conversation}
          renderItem={({ item }) => (
            <Conversation
              onPress={() => navigation.navigate("ChatScreen", { conversation: item })}
              avatar={item.contact.picture}
              userName={item.contact.name}
              excerpt={item.messages[item.messages.length - 1].message}
              unreadMessages={item.unreadMessages}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </Container>
  );
};

export default MessagesScreen;

MessagesScreen.navigationOptions = {
  title: "Messages",
};
