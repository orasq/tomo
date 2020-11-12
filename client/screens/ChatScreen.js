import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity, Keyboard, FlatList } from "react-native";
import styled from "styled-components";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

// Theme
import { colors, paddings } from "../styles/theme";

// Components import
import { ChatBubble, PreviewProfileButton } from "../components";

const ChatScreen = ({navigation}) => {

  // getting data from nav
  const conversation = navigation.getParam("conversation");

  // Keyboard handling
  const [keyboardHeight, setKeyboardHeight] = useState(25);

  useEffect(() => {
    const moveUpInput = (event) => {
      setKeyboardHeight(event.endCoordinates.height + 55);
      this.scrollView.scrollToEnd({ animated: false });
    };

    let moveDownInput = () => {
      setKeyboardHeight(25);
    };

    let setKeyboardWillShowSub = Keyboard.addListener(
      "keyboardDidShow",
      moveUpInput
    );

    let setKeyboardWillHideSub = Keyboard.addListener(
      "keyboardDidHide",
      moveDownInput
    );
    // Clean-up function
    return function cleanup() {
      setKeyboardWillShowSub.remove();
      setKeyboardWillHideSub.remove();
    };
  }, []);

  // Input handling
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState(conversation.messages);

  const handleInput = () => {
    setMessages([
      ...messages,
      {
        id: Math.floor(Math.random() * Math.floor(1000)),
        sender: "Olivier",
        recipient: conversation.contact.name,
        message: inputMessage,
      },
    ]);
    setInputMessage("");
  };

  return (
    <ChatScreenContainer style={{ paddingBottom: keyboardHeight }}>
      <ScrollView
        ref={(ref) => (this.scrollView = ref)}
        onContentSizeChange={(contentWidth, contentHeight) => {
          this.scrollView.scrollToEnd({ animated: false });
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <ChatLog>
          {messages.length > 0 ? (
            <FlatList
              data={messages}
              renderItem={({ item }) => (
                <ChatBubble sender={item.sender} recipient={item.recipient}>
                  {item.message}
                </ChatBubble>
              )}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <Text>No messages</Text>
          )}
        </ChatLog>
      </ScrollView>
      <InputWrap>
        <InputField
          multiline
          textAlignVertical={"center"}
          placeholder="Write message ..."
          value={inputMessage}
          onSubmitEditing={() => handleInput()}
          onChangeText={(text) => setInputMessage(text)}
        />
        <InputButton>
          <TouchableOpacity
            style={{
              height: 55,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => handleInput()}
          >
            <Ionicons name="md-send" size={30} color={colors.primary} />
          </TouchableOpacity>
        </InputButton>
      </InputWrap>
    </ChatScreenContainer>
  );
};

export default ChatScreen;

// navigationOptions = function to be able to use navigation.getParam()
ChatScreen.navigationOptions = ({ navigation }) => {
  const conversation = navigation.getParam("conversation");
  // user infos for top-right profile page link
  const user = {
    name: conversation.contact.name,
    // random age for test purpose
    age: (Math.floor(Math.random() * Math.floor(10))) + 20,
    picture: conversation.contact.picture
  };

  return {
    title: user.name,
    headerRight: (
      <PreviewProfileButton
        user={user}
        onPress={() =>
          navigation.navigate("UsersProfileScreen", { user })
        }
      />
    ),
    headerRightContainerStyle: {
      alignItems: "center",
      paddingRight: paddings.main,
    },
  };
};

// Styles

const ChatScreenContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: ${paddings.main}px;
  padding-top: 0;
`;

const ChatLog = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 20px;
`;

const InputWrap = styled.View`
  flex-direction: row;
  padding-top: 5px;
`;

const InputField = styled.TextInput`
  justify-content: center;
  align-items: center;
  /* text-align: center;
  align-self: center; */
  width: 88%;
  min-height: 55px;
  padding: 10px 20px;
  border-radius: 26px;
  border: 1px ${colors.mediumGrey};
  background-color: white;
`;

const InputButton = styled.View`
  align-self: center;
  width: 12%;
  /* position: absolute;
  top: 20px;
  right: 12px; */
`;

const Text = styled.Text``;