import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { StatusBar } from 'react-native'

const App = () => {
    return (
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
    )
}

const PresentationalComponent = (props) => {
   return (
      <View>
         <Text style = {styles.myState}>
            {props.myState}
         </Text>
      </View>
   )
}
export default PresentationalComponent


const styles = StyleSheet.create ({
   myState: {
      marginTop: 20,
      textAlign: 'center',
      color: 'orange',
      fontWeight: 'bold',
      fontSize: 29
   }
})

// export default App

