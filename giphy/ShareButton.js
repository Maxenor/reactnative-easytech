import React from "react";
import { Share, View, StyleSheet, Pressable, Text } from "react-native";

const ShareButton = (props) => {
  const url = props.url;
  const onShare = async () => {
    try {
      await Share.share({
        message:
            "Regarde ce super GIF que j'ai trouvé grace à ma super appli react native : " +
            url + " envoyé depuis ma super appli react native développée par moi même",
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View>
      <Pressable style={css.share} onPress={onShare}>
        <Text>Partager</Text>
      </Pressable>
    </View>
  );
};

const css = StyleSheet.create({
  share: {
    backgroundColor: "lightblue",
    width: 100,
    alignItems: "center",
    borderRadius: 10,
  },
});

export default ShareButton;
