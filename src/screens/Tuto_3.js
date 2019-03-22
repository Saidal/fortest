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
import { NFC_MANAGER } from "./NFC_API";
import { NavigationActions, StackActions } from "react-navigation";
import Images from "../../assets/img/index";

export default class Tuto_3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supported: true,
            manager: new NFC_MANAGER()
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={Images.background} style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        const resetAction = StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: "Tuto_1" })]
                        });
                        this.props.navigation.dispatch(resetAction);
                    }}
                >
                    <View style={{ alignItems: "center", marginTop: "20%" }}>
                        <Text style={styles.text1}>IDENTIFIEZ VOTRE</Text>
                        <Text style={styles.text1}>PRODUIT & ACCEDEZ</Text>
                        <Text style={styles.text1}>A SA FICHE</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Image
                            resizeMode="contain"
                            style={{ width: 250, height: 250, marginTop: "10%" }}
                            source={Images.icon_tuto_3}
                        />
                    </View>
                    <View style={{ alignItems: "center", marginTop: "20%" }}>
                        <Text style={styles.text2}>Pour savoir si un smartphone est NFC,</Text>
                        <Text style={styles.text2}>
                            c'est très simple, on peut vérifier dans les pa-
                        </Text>
                        <Text style={styles.text2}>ramètre > Plus que le menu NFC existe.</Text>
                    </View>
                    <Text>
                        {this.state.manager.startDetection(() => {
                            this.setState({ update: !this.state.update });
                            alert(this.state.manager.tag.id);
                            //navigate('Scanpage', {rfid_id: this.state.manager.tag.id});
                        })}
                    </Text>
                </TouchableOpacity>
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
        fontFamily: "Raleway-Light",
        fontSize: RF(4),
        color: "black"
    },
    text2: {
        fontFamily: "Raleway-Light",
        fontSize: RF(2),
        color: "black"
    }
});
