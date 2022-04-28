import React from "react";
import { Text, View, Linking, StyleSheet, Image } from "react-native";

const ImagePicsum = (props) => {
  if (props.img) {
    return (
      <View>
        <Image
          style={css.image}
          source={{
            uri: props.img,
          }}
        />
        <Text
          style={css.auteur}
          onPress={() => Linking.openURL(props.author_url)}
        >
          Auteur: {props.author}
        </Text>
      </View>
    );
  } else {
    return (
      <View>
        <Image
          style={css.image}
          source={require('./assets/collage_photos.jpg')}
        />
      </View>
    );
  }
};
const css = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
    marginBottom: 10,
    borderRadius: 10
  },
  auteur: {
    color: "white",
  },
});
export default ImagePicsum;
