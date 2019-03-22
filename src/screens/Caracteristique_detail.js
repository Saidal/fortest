import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import RF from "react-native-responsive-fontsize";
import { Data } from "../API/Data.js";
import { Security } from "../API/Security.js";
import Images from "../../assets/img/index";
import Produit_Caracteristique from "../components/Produit_Description";

export default class Caracteristique_detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation.getParam("item", null)
        };
    }

    render() {
        let obj = {
            title: "PETRUS 1988",
            description:
                "La légende de Bordeaux, un vin majestueux, concentré, voluptueux et souple"
        };
        console.warn(this.state.item)
        return (
            <ImageBackground source={Images.background} style={styles.container}>
                
            </ImageBackground>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'yellow',
        height: '100%',
        width: '100%',
        alignItems: "center",
        alignContent: "center",
        textAlign: "center"
    }
};
