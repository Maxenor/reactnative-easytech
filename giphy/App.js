import { useState } from "react";
import {
  Linking,
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { apiKey, apiUrl } from "./const";
import ShareButton from "./ShareButton";

export default function App() {
  const [gifs, setGifs] = useState([]);
  const [search, updateSearch] = useState("");

  async function searchGif() {
    try {
      const repGiphy = await fetch(`${apiUrl}?api_key=${apiKey}&q=${search}`);
      const response = await repGiphy.json();
      setGifs(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function onEdit(newSearch) {
    updateSearch(newSearch);
    searchGif();
  }

  const OpenUrl = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert("Erreur lors de l'ouverture du lien");
    }
  };

  return (
    <View style={css.view}>
      <TextInput
        placeholder="Cherchez un GIF"
        placeholderTextColor="#fff"
        style={css.textInput}
        onChangeText={(text) => onEdit(text)}
      />
      <FlatList
        data={gifs}
        renderItem={({ item }) => (
          <View style={css.share}>
            <TouchableOpacity
              style={css.gifs}
              onPress={() => OpenUrl(item.url)}
            >
              <Image
                style={css.image}
                source={{ uri: item.images.original.url }}
              />
            </TouchableOpacity>
            <ShareButton url={item.url}></ShareButton>
          </View>
        )}
      />
    </View>
  );
}
const css = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "darkgreen",
  },
  textInput: {
    width: "100%",
    height: 150,
    color: "white",
    textAlign: 'center'
  },
  image: {
    width: 300,
    height: 150,
    borderWidth: 3,
    marginBottom: 4,
  },
  gifs: {
    marginBottom: 4,
  },
  OpenUrl: {
    backgroundColor: "lightblue",
    width: "45%",
    alignItems: "center",
    borderRadius: 10,
  },
  share: {
    marginBottom: 20,
    alignItems: 'center',
    width: '100%'
  },
});
