import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";

const user = {
  id: "u1",
  username: "VadimNotJustDev",
  name: "Vadim",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
};

const NewTweet = () => {
  const [text, setText] = useState("");
  const router = useRouter();
  const onTweetPress = () => {
    console.warn("test");
    setText("");
    router.back();
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href="../" style={{ fontSize: 18 }}>
            Cancel
          </Link>

          <Pressable onPress={onTweetPress} style={styles.button}>
            <Text style={styles.buttonText}>Tweet</Text>
          </Pressable>
        </View>

        <View style={styles.inputContainer}>
          <Image source={{ uri: user.image }} style={styles.image} />
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="What's happending?"
            multiline
            numberOfLines={5}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewTweet;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#1C9BF0",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
