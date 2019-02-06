import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
// import 'Home' from 'Home.js';
import PresentationalComponent from './PresentationalComponent'

export default class App extends Component {
  
  state= {
    myState: 'This is my state'
  }

 
    
  render() {
    return (
      <View style={styles.container}>
        <PresentationalComponent myState = {this.state.myState}/>
        <Text>Mike and Ange and Matt and Wendy are going to kick some ass!</Text>
        <Text>{this.state.name}</Text>
      </View>
    ); 
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

