import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    ImageBackground,
    Image
} from "react-native";
import RF from "react-native-responsive-fontsize";
import Images from "../../assets/img/index";

export default class Splash_Screen extends Component {
    constructor(props) {
        super(props);
        this.props.navigation.setParams({
            hideHeader: true
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        setTimeout(() => {
            navigate("RegisterStack");
        }, 1700);
        return (
            <ImageBackground source={Images.background} style={styles.container}>
                <Text style={styles.text1}>IDENTIFICATION</Text>
                <Image
                    resizeMode="contain"
                    style={{ width: 250, height: 250, marginTop: "10%" }}
                    source={Images.logo}
                />
                <Text style={styles.myline} />
                <Text style={styles.text2}>Approchez votre smartphone</Text>
                <Text style={styles.text2}>de l'étiquette éléctronique</Text>
                <Text style={styles.text2}>afin d'identifier votre produit</Text>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    text1: {
        fontSize: RF(5),
        fontFamily: "Raleway-Light",
        marginTop: "20%"
    },
    myline: {
        marginTop: "8%",
        marginBottom: "10%",
        width: "80%",
        borderColor: "grey",
        borderBottomWidth: 1
    },
    text2: {
        justifyContent: "center",
        textAlign: "center",
        fontSize: RF(2.5)
    }
});
