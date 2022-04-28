import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Picsum';

const [search, updateName] = useState("");

function onEdit(newName) {
  updateName(newName);
  console.log(updateName(newName));
}

function Login({ navigation }) {
  return (
    <View style={css.container}>
      <View style={css.rect}></View>
      <View style={css.rect2}>
        <TextInput
          placeholder="Veuillez entrer votre nom"
          style={css.textInput}
          onChangeText={(text) => onEdit(text)}
        ></TextInput>
      </View>
      <Text style={css.bienvenue}>Bienvenue</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={css.button}
      >
        <Text style={css.demarrer}>Démarrer</Text>
      </TouchableOpacity>
      <Image
        source={require("./assets/react-icon.png")}
        resizeMode="contain"
        style={css.reactLogo}
      ></Image>
    </View>
  );
}

function Homescreen() {
  return (
    <Home />
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Home" component={Homescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const css = StyleSheet.create({
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
  rect2: {
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
    marginLeft: 156
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
  },
  reactLogo: {
    width: 172,
    height: 154,
    marginTop: -424,
    marginLeft: 102
  }
});

export default App;