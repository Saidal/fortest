import React, { Component } from "react";
import { ImageBackground, TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Images from "../../assets/img/index";

export default class Drawer_Content extends Component {
    /*render() {
        return (
            <View style={{ width: "100%" }}>
                <ImageBackground
                    source={Images.background}
                    style={{ width: "100%", height: "100%" }}
                >
                    <ScrollView style={{ marginTop: "40%" }}>
                        <Text style={styles.myline} />
                        <TouchableOpacity
                            title="IDENTIFICATION"
                            color="#FF3C52"
                            style={styles.container}
                            onPress={() => this.props.navigation.navigate("Scan_rfid")}
                        >
                            <Text style={styles.text}>IDENTIFICATION</Text>
                        </TouchableOpacity>
                        <Text style={styles.myline} />
                        <TouchableOpacity
                            title="VINOTHEQUE"
                            style={styles.container}
                            onPress={() => this.props.navigation.navigate("WineStack")}
                        >
                            <Text style={styles.text}>VINOTHEQUE</Text>
                        </TouchableOpacity>
                        <Text style={styles.myline} />
                        <TouchableOpacity
                            title="CERTIFICATS"
                            color="#FF3C52"
                            style={styles.container}
                            //onPress={() => this.props.navigation.navigate('')}
                        >
                            <Text style={styles.text}>MES CERTIFICATS</Text>
                        </TouchableOpacity>
                        <Text style={styles.myline} />
                        <TouchableOpacity
                            title="TUTORIEL"
                            color="#FF3C52"
                            style={styles.container}
                            onPress={() => this.props.navigation.navigate("TutoStack")}
                        >
                            <Text style={styles.text}>TUTORIEL</Text>
                        </TouchableOpacity>
                        <Text style={styles.myline} />
                        <TouchableOpacity
                            title="APROPOS"
                            color="#FF3C52"
                            style={styles.container}
                            // onPress={() => this.props.navigation.navigate('')}
                        >
                            <Text style={styles.text}>A PROPOS</Text>
                        </TouchableOpacity>
                        <Text style={styles.myline} />
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }*/
    render() {
        return (
            <View style={{ width: "100%" }}>
                <ImageBackground
                    source={Images.background}
                    style={{ width: "100%", height: "100%" }}
                >
                    <ScrollView style={{ marginTop: "40%" }}>
                        <Text style={styles.myline} />
                        {this.props.routes.map(item => {
                            <TouchableOpacity
                                title={item.title}
                                color="#FF3C52"
                                style={styles.container}
                                onPress={() => item.onPress()}
                            >
                                <Text style={styles.text}>IDENTIFICATION</Text>
                            </TouchableOpacity>;
                        })}
                        <Text style={styles.myline} />
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start"
    },
    text: {
        fontFamily: "Raleway",
        fontSize: 15,
        color: "grey",
        marginLeft: "25%"
    },
    myline: {
        marginBottom: "5%",
        width: "100%",
        borderColor: "grey",
        borderBottomWidth: 1
    }
});
