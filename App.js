import React from 'react'
import { createAppContainer } from "react-navigation";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Write from './screens/WriteList'
import ViewList from './screens/ViewList'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    )
  }
}

const AppNavigator = createBottomTabNavigator({
  View: {screen: ViewList},
  Write: {screen: Write}
}, {
  defaultNavigationOptions: ({navigation}) => {
    tabBarIcon: ({}) => {
      const route = navigation.state.routeName
      if (route === 'Write') {
        return(
          <Image source={require("./assets/write.png")}/>
        )
      } else if (route === "ViewList") {
        return(
          <Image source={require("./assets/read.png")}/>
        )
      }
    }
  }
})

const AppContainer = createAppContainer(AppNavigator)