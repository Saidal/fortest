import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image
} from 'react-native';
import { NFC_MANAGER } from './NFC_API';
import { Data } from '../API/Data.js';
import RF from 'react-native-responsive-fontsize';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

export default class Scan_rfid extends Component {
  state = {
            supported: true,
            manager: new NFC_MANAGER(),
            d: new Data(),
            username: ""
  }
  beep = new Sound('beep1.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.warn('failed to load the sound', error);
        return;
    }
  })

    async componentDidMount() {
        var manager = new NFC_MANAGER();
        if (await manager.isSupported("")) {
        }

        await manager.isEnabled(Platform.OS, true);
        //manager.startDetection();
    }

    async componentWillMount() {
      let result;
      let d = new Data();
      try {
          // Récupération du nom de l'utilisateur
          result = await d.getUser();
          if (result.success) {
              this.setState({ username: result.data });
          }
          // Récupération de la liste des vins de l'utilisateur
          result = await d.getListProducts(result.data);
          if (result.success) {
              this.setState({ dataSource: result.data });
              if (this.state.dataSource == []) {
                  this.setState({ dataEmpty: true });
              }
          }
      } catch (err) {
          console.warn("err", err);
      }
  }
		
    render() {
        const {navigate} = this.props.navigation
        if (this.state.manager.supported) {
            return (
              <ImageBackground source={require('../../assets/img/Background.png')} style={styles.container}>
	          		<Text style={styles.text1}>IDENTIFICATION</Text>
                <Image
                  resizeMode="contain"
                  style={{width: 250, height: 250, marginTop: '10%'}}
                  source={require('../../assets/img/logo.png')}
                />
                <Text style={styles.myline}></Text>
                <Text style={styles.text2}>Approchez votre smartphone</Text>
                <Text style={styles.text2}>de l'étiquette éléctronique</Text>
                <Text style={styles.text2}>afin d'identifier votre produit</Text>
								<Text>
										{this.state.manager.startDetection(async () => {
                      
											this.setState({ update: !this.state.update });
											this.beep.play((success) => {
													console.log(success)
												});
                      var res = await this.state.d.getProductByRfid(
                        this.state.username,
                        this.state.manager.tag.id
                      );
                      navigate('Product', { item: res.data });
									})}
								</Text>
							</ImageBackground>
            )
        } else {
            return (
                <View>
                    <Text>Votre téléphone ne peut pas fonctionner avec cette technologie</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text1: {
    fontSize: RF(5),
    fontFamily: 'Raleway-Light',
    marginTop: '20%'
  },
  myline: {
  	marginTop: '8%',
  	marginBottom: '10%',
  	width: '80%',
  	borderColor: 'grey',
  	borderBottomWidth: 1,
  },
  text2: {
  	justifyContent: 'center',
  	textAlign: 'center',  
  	fontSize: RF(2.5),
  }
});