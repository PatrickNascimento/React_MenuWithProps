import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground

} from 'react-native';

import MenuItem from './components/MenuItem';

export default class App extends React.Component {
  render() {
    return (
   
      <ImageBackground
          source={require('./img/bg.jpg')}   
          style={styles.container}>

          <View style={styles.overlayContainer}>

              <View style={styles.top}>
                    <Text style={styles.header}>H O M E</Text>
              </View>

              <View style={styles.menuContainer}>
                  <MenuItem itemImage={require('./img/icon1.png')}/>
                  <MenuItem itemImage={require('./img/icon2.png')}/>
                  <MenuItem itemImage={require('./img/icon3.png')}/>
                  <MenuItem itemImage={require('./img/icon4.png')}/>
                  <MenuItem itemImage={require('./img/icon5.png')}/>
                  <MenuItem itemImage={require('./img/icon6.png')}/>
              </View>

              <View style={styles.top}>
                  <Text style={styles.header}>FOOTER</Text>
              </View>
            
          </View>

          </ImageBackground>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:  1,
    width: '100%',
    height: '100%', 
  },
  overlayContainer:{
    flex: 1,
    backgroundColor: 'rgba(47,163,218, .4)',    
  },
  top: {
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',  
  },
  header:{
    color: '#fff',
    fontSize: 28,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40  ,
    backgroundColor: 'rgba(255,255,255, .1)',
  },
  menuContainer:{
    height: '40%',
    flexDirection: 'row',
    flexWrap: 'wrap' 
  }  
});

