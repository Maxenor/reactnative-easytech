import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}></View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("App")}
        style={styles.button2}
      >
        <TextInput
          placeholder="Veuillez entrer votre nom"
          style={styles.textInput}
        ></TextInput>
      </TouchableOpacity>
      <Text style={styles.bienvenue}>Bienvenue</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.demarrer}>Démarrer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 132,
    height: 124,
    backgroundColor: "#E6E6E6",
    marginTop: 93,
    alignSelf: "center"
  },
  button2: {
    width: 238,
    height: 50,
    backgroundColor: "#E6E6E6",
    marginTop: 71,
    marginLeft: 68
  },
  textInput: {
    color: "#121212",
    width: 154,
    height: 17,
    marginTop: 17,
    marginLeft: 43
  },
  bienvenue: {
    color: "#121212",
    marginTop: -102,
    marginLeft: 149
  },
  button: {
    width: 109,
    height: 63,
    backgroundColor: "#E6E6E6",
    marginTop: 174,
    marginLeft: 133
  },
  demarrer: {
    color: "#121212",
    marginTop: 23,
    marginLeft: 26
  }
});

export default Login;
