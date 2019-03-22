import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import RF from "react-native-responsive-fontsize";

// **************************************************
// COMPONENT: LISTE DES BOUTEILLES
// **************************************************

// title: le titre à afficher en haut. A remplacer par une propriété de item, mais laquelle ?
// image: le lien de l'image à afficher. A remplacer par une propriété de item.
// item: la bouteille concernée
const Produit_Liste = ({ title, image, item }) => (
  <View style={styles.container}>
    <View style={styles.image}>
      <Image
            style={{width: '100%', height: '100%'}}
            source={{uri: item.image1}}
            resizeMode= "contain"
            />
    </View>
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.caracteristique}>
        <Text>{item.region}</Text>
        <Text> / </Text>
        <Text>{item.appelation}</Text>
        <Text> / </Text>
        <Text>{item.encepagement}</Text>
        <Text> / </Text>
        <Text>{item.couleur} </Text>
      </View>
      <View>
        <Text>Température du service: {item.temperature_degustation}</Text>
      </View>
    </View>
  </View>
);

// Définition des types
Produit_Liste.propTypes = {
  title: PropTypes.string,
  image: PropTypes.number,
  item: PropTypes.object
};

// Définition des valeurs par défaut
Produit_Liste.defaultProps = { title: 'Inconnu' };

// **************************************************
// FIN COMPONENT: LISTE DES BOUTEILLES
// **************************************************

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(52, 52, 52, 0.3)',
  },
  header: {
    paddingBottom: 10
  },
  image: {
    width: 100,
    height: 100
  },
  title: {
    alignSelf: 'center', 
    fontWeight: 'bold',
    fontSize: RF(3)
  },
  caracteristique: {
    alignItems: 'center', 
    fontSize: RF(3),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  }
};

export default Produit_Liste;
