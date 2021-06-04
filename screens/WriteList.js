import React from "react";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Header } from "react-native-elements";
import db from "../config";

export default class Write extends React.Component {
  constructor() {
    super();
    this.state = {
      written: false,
      item: "",
      quantity: "",
      cost: "",
    };
  }

  exportData = () => {
    const appdata = db.collection("list");
    appdata.add({
      item: this.state.item,
      cost: this.state.cost,
      quantity: this.state.quantity,
    });
  };

  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: "list-app",
          }}
        />
        <TextInput
          placeholder={"item"}
          style={styles.bar}
          value={this.state.item}
          onChangeText={(text) => {
            this.setState({
              item: text,
            });
          }}
          multiline={10}
        />

        <TextInput
          placeholder={"quantity"}
          style={styles.bar}
          value={this.state.quantity}
          onChangeText={(text) => {
            this.setState({
              quantity: text,
            });
          }}
          multiline={10}
        />

        <TextInput
          placeholder={"cost"}
          style={styles.bar}
          value={this.state.cost}
          onChangeText={(text) => {
            this.setState({
              cost: text,
            });
          }}
          multiline={10}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            this.exportData();
          }}
        >
          Add
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderRadius: 15,
        outline: 'none',
        width: "50%",
        height: 50,
    },
    bar: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderRadius: 15,
        outline: 'none',
        width: '80%',
        height: 70,
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Fira Sans'
    }
})
