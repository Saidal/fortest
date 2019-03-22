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
import Images from "../../assets/img/index";

export default class Tuto_1 extends Component {
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
                        navigate("Tuto_2", {});
                    }}
                >
                    <View style={{ alignItems: "center", marginTop: "20%" }}>
                        <Text style={styles.text1} />
                        <Text style={styles.text1}>ACTIVEZ LA NFC SUR</Text>
                        <Text style={styles.text1}>VOTRE SMARTPHONE</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Image
                            resizeMode="contain"
                            style={{ width: 250, height: 250, marginTop: "10%" }}
                            source={Images.icon_tuto_1}
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
