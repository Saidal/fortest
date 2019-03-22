import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class DrawerContent extends Component {
  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={{width: '100%'}} >
        <ImageBackground source={require('./assets/img/Background.png')} style={{width: '100%', height: '100%' }}>
          <Image source={require('./assets/img/logo_2.png')} style={{width: '40%', height: '15%', marginTop: '20%', marginLeft: '25%' }}/>
          <ScrollView style={{marginTop: '20%'}}>
			      	<Text style={styles.myline}></Text>
              <TouchableOpacity
                title='IDENTIFICATION'
                color="#FF3C52"
                style={styles.container}
                onPress={() => navigate('IDENTIFICATION')}
              >
                <Text style={styles.text}>IDENTIFICATION</Text>
              </TouchableOpacity>
			      	<Text style={styles.myline}></Text>
              <TouchableOpacity
                title='VINOTHEQUE'
                style={styles.container}
                onPress={() => navigate('Vinotheque')}
              >
              <Text style={styles.text}>VINOTHEQUE</Text>
              </TouchableOpacity>
              <Text style={styles.myline}></Text>
              <TouchableOpacity
                title='CERTIFICATS'
                color="#FF3C52"
                style={styles.container}
                //onPress={() => this.props.navigation.navigate('')}
              >
                <Text style={styles.text}>MES CERTIFICATS</Text>
              </TouchableOpacity>             
              <Text style={styles.myline}></Text>
              <TouchableOpacity
                title='TUTORIEL'
                color="#FF3C52"
                style={styles.container}
                onPress={() => navigate('Tuto_1') }
              >
                <Text style={styles.text}>TUTORIEL</Text>
              </TouchableOpacity>
              <Text style={styles.myline}></Text>
              <TouchableOpacity
                title='APROPOS'
                color="#FF3C52"
                style={styles.container}
               // onPress={() => this.props.navigation.navigate('')}
              >
                <Text style={styles.text}>A PROPOS</Text>
              </TouchableOpacity>
              <Text style={styles.myline}></Text>
          </ScrollView>
        </ImageBackground>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection : 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  text : {
    fontFamily: 'Raleway',
    fontSize: 15, 
    color: 'grey',
    marginLeft: '25%'
  },
  myline: {
    marginBottom: '5%',
  	width: '100%',
  	borderColor: 'grey',
  	borderBottomWidth: 1,
  }
})