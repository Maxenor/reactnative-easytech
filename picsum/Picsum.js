import React, { Component } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import ImagePicsum from "./image";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      img: "",
      author: "",
      post_url: "",
      author_url: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const url = "https://picsum.photos/v2/list";

    const getImg = async () => {
      try {
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
        const random = Math.floor(Math.random() * Object.keys(data).length);
        this.setState({
          author: data[random].author,
          author_url: data[random].url,
          img: data[random].download_url,
        });
        console.log(this.state.img);
      } catch (error) {
        console.log("Erreur : " + error);
      }
    };

    getImg();
  };

  render() {
    return (
      <>
        <View style={css.view}>
          <Pressable style={css.nouvelleImage} onPress={this.handleSubmit}>
            <Text style={css.nouvelleImageText}>
              Générer une nouvelle image
            </Text>
          </Pressable>

          <ImagePicsum
            img={this.state.img}
            post_url={this.state.post_url}
            author={this.state.author}
            author_url={this.state.author_url}
          />
        </View>
      </>
    );
  }
}
const css = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "navy",
  },
  nouvelleImage: {
    width: "100%",
    height: 20,
    color: "white",
    textAlign: "center",
    margin: 100,
    alignItems: "center",
  },
  nouvelleImageText: {
    color: "white",
  },
});
export default Home;
