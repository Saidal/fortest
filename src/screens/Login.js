import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import RF from "react-native-responsive-fontsize";
import { Data } from "../API/Data.js";
import { Security } from "../API/Security.js";
import Images from "../../assets/img/index";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            pwd: "",
            err_login: "",
            err_pwd: "",
            login_succes: false,
            d: new Data(),
            s: new Security()
        };
    }

    // Remove the header from this screen
    static navigationOptions = { header: null };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <ImageBackground source={Images.background} style={styles.container}>
                <Text style={styles.text1}>CONNECTEZ-VOUS</Text>
                <Text style={styles.text2}>AVEC VOS IDENTIFIANTS WINEDEX</Text>
                {this.state.err_login ? (
                    <View
                        style={{
                            width: "80%"
                        }}
                    >
                        <TextInput
                            style={{
                                borderColor: "red",
                                borderBottomWidth: 3,
                                width: "100%",
                                marginTop: "15%"
                            }}
                            textAlign="center"
                            placeholder="Nom d'utilisateur"
                            onChangeText={login => this.setState({ login })}
                            value={this.state.login}
                        />
                        <Text style={styles.text_error}>{this.state.err_login}</Text>
                    </View>
                ) : (
                    <TextInput
                        style={{
                            borderColor: "gray",
                            borderBottomWidth: 3,
                            width: "80%",
                            marginTop: "15%"
                        }}
                        textAlign="center"
                        placeholder="Nom d'utilisateur"
                        onChangeText={login => this.setState({ login })}
                        value={this.state.login}
                    />
                )}
                {this.state.err_pwd ? (
                    <View
                        style={{
                            width: "80%"
                        }}
                    >
                        <TextInput
                            style={{
                                borderColor: "red",
                                borderBottomWidth: 3,
                                width: "100%",
                                marginTop: "15%"
                            }}
                            textAlign="center"
                            placeholder="Mot de Passe"
                            onChangeText={pwd => this.setState({ pwd })}
                            value={this.state.pwd}
                        />
                        <Text style={styles.text_error}>{this.state.err_pwd}</Text>
                    </View>
                ) : (
                    <TextInput
                        style={{
                            borderColor: "gray",
                            borderBottomWidth: 3,
                            width: "80%",
                            marginTop: "15%"
                        }}
                        textAlign="center"
                        placeholder="Mot de Passe"
                        onChangeText={pwd => this.setState({ pwd })}
                        value={this.state.pwd}
                    />
                )}
                <Text style={{ marginBottom: "20%" }} />
                <TouchableOpacity
                    style={{
                        height: "7%",
                        width: "80%",
                        backgroundColor: "#aa0606",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    color="#FF3C52"
                    onPress={() => this.login_test()}
                >
                    <Text
                        style={{
                            fontFamily: "Raleway-Bold",
                            fontSize: RF(4),
                            color: "white"
                        }}
                    >
                        VALIDER
                    </Text>
                </TouchableOpacity>
                <Text
                    style={{
                        fontFamily: "Raleway-Thin",
                        fontSize: RF(4.5),
                        marginTop: "10%"
                    }}
                >
                    ──── OU ────
                </Text>
                <Text style={{ marginBottom: "5%" }} />
                <TouchableOpacity
                    style={{
                        height: "7%",
                        width: "80%",
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    color="#FF3C52"
                    onPress={() => {
                        navigate("Register", {});
                    }}
                >
                    <Text style={{ fontFamily: "Raleway-Light", fontSize: RF(2.5) }}>
                        CREER UN NOUVEAU COMPTE
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }

    // Permet de connecter l'utilisateur
    async login_test() {
        // Contrôles
        if (this.state.login === "" || this.state.pwd === "") {
            if (this.state.login === "") {
                this.setState({ err_login: "Vous devez entrer un nom d'utilisateur" });
            } else {
                this.setState({ err_login: "" });
            }
            if (this.state.pwd === "") {
                this.setState({ err_pwd: "Vous devez entrer un mot de passe" });
            } else {
                this.setState({ err_pwd: "" });
            }
        } else {
            // Remise à zéro des erreurs
            this.setState({ err_pwd: "" });
            this.setState({ err_login: "" });

            // Connexion
            try {
                let result = await this.state.s.login(this.state.login, this.state.pwd);
                // Si connexion réussie
                if (result.success) {
                    // Navigation vers l'écran de la bibliothèque
                    this.props.navigation.navigate("DashboardDrawNavigator", {
                        username: this.state.login
                    });
                } else {
                    this.setState({ err_login: result.error });
                }
            } catch (err) {
                console.warn(err);
            }
        }
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    text1: {
        fontSize: 22,
        fontFamily: "Raleway-Light",
        marginTop: "20%"
    },
    text2: {
        fontFamily: "Raleway-ExtraLight"
    },
    text_error: {
        color: "red",
        fontSize: RF(2),
        alignSelf: "flex-end"
    }
});
