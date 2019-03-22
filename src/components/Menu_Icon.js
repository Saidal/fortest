import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { DrawerActions } from 'react-navigation-drawer';

// **************************************************
// COMPONENT: MENU ICON
// **************************************************

// image: l'image à afficher
// onClick: la fonction à exécuter lorsque le Menu_Icon est selectionné
// left: true si le menu se trouve à gauche, false s'il se trouve à droite
const Menu_Icon = ({ image, onClick, left }) => (
  <View style={[left ? styles.container_left : styles.container_right]}>
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}
    >
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  </View>
);

// Définition des types
Menu_Icon.propTypes = {
  image: PropTypes.number,
  onClick: PropTypes.func,
  left: PropTypes.bool
};

// **************************************************
// FIN COMPONENT: MENU ICON
// **************************************************

const styles = StyleSheet.create({
  container_left: {
    marginLeft: 10
  },
  container_right: {
    marginRight: 10
  },
  image: {
    width: 20,
    height: 20
  }
});

export default Menu_Icon;
