import React, { Component } from "react";
import {
    Platform,
    Alert,
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
		View,
		ScrollView
} from "react-native";
import RF from "react-native-responsive-fontsize";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Images from "../../assets/img/index";
import { Security } from "../API/Security";

const { height } = Dimensions.get("window");

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh_render: 1,
            login: "",
            password: "",
            email: "",
            nom: "",
            prenom: "",
            err_login: "",
            err_password: "",
            err_email: "",
            err_nom: "",
            err_prenom: ""
        };
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAwareScrollView
                style={{ flex: 1, flexDirection: "column" }}
                behavior="padding"
                enabled
                keyboardVerticalInset={100}
            >
                <ScrollView>
                    <View style={{ minHeight: height * 1.1 }}>
                        <ImageBackground source={Images.background} style={styles.container}>
                            <Text
                                style={{
                                    fontSize: 22,
                                    fontFamily: "Raleway-Light",
                                    marginTop: "20%"
                                }}
                            >
                                INSCRIVEZ-VOUS
                            </Text>
                            {this.state.err_login ? (
                                <View style={{ width: "80%" }}>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            borderColor: "gray",
                                            borderBottomWidth: 2,
                                            width: "100%",
                                            marginTop: "10%"
                                        }}
                                        textAlign="center"
                                        placeholder="Username"
                                        onChangeText={login => this.setState({ login })}
                                        value={this.state.login}
                                    />
                                    <Text style={styles.text_error}>{this.state.err_login}</Text>
                                </View>
                            ) : (
                                <TextInput
																	style={{
																			height: 40,
																			borderColor: "gray",
																			borderBottomWidth: 2,
																			width: "80%",
																			marginTop: "10%"
																	}}
																	textAlign="center"
																	placeholder="Username"
																	onChangeText={login => this.setState({ login })}
																	value={this.state.login}
                                />
                            )}
                            {this.state.err_password ? (
                                <View style={{ width: "80%" }}>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            borderColor: "gray",
                                            borderBottomWidth: 2,
                                            width: "100%",
                                            marginTop: "5%",
                                            borderColor: "#aa0606"
                                        }}
                                        textAlign="center"
                                        placeholder="Password"
                                        onChangeText={password => this.setState({ password })}
                                        value={this.state.password}
                                    />
                                    <Text style={styles.text_error}>{this.state.err_password}</Text>
                                </View>
                            ) : (
                                <TextInput
                                    style={{
                                        height: 40,
                                        borderColor: "gray",
                                        borderBottomWidth: 2,
                                        width: "80%",
                                        marginTop: "5%",
                                        borderColor: "#aa0606"
                                    }}
                                    textAlign="center"
                                    placeholder="Password"
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                />
                            )}

                            {this.state.err_email ? (
                                <View style={{ width: "80%" }}>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            borderColor: "gray",
                                            borderBottomWidth: 2,
                                            width: "100%",
                                            marginTop: "5%"
                                        }}
                                        textAlign="center"
                                        placeholder="Email"
                                        onChangeText={email => this.setState({ email })}
                                        value={this.state.email}
                                    />
                                    <Text style={styles.text_error}>{this.state.err_email}</Text>
                                </View>
                            ) : (
                                <TextInput
                                    style={{
                                        height: 40,
                                        borderColor: "gray",
                                        borderBottomWidth: 2,
                                        width: "80%",
                                        marginTop: "5%"
                                    }}
                                    textAlign="center"
                                    placeholder="Email"
                                    onChangeText={email => this.setState({ email })}
                                    value={this.state.email}
                                />
                            )}

                            {this.state.err_nom ? (
                                <View style={{ width: "80%" }}>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            borderColor: "gray",
                                            borderBottomWidth: 2,
                                            width: "100%",
                                            marginTop: "5%",
                                            borderColor: "#aa0606"
                                        }}
                                        textAlign="center"
                                        placeholder="Nom"
                                        onChangeText={nom => this.setState({ nom })}
                                        value={this.state.nom}
                                    />
                                    <Text style={styles.text_error}>{this.state.err_nom}</Text>
                                </View>
                            ) : (
                                <TextInput
                                    style={{
                                        height: 40,
                                        borderColor: "gray",
                                        borderBottomWidth: 2,
                                        width: "80%",
                                        marginTop: "5%",
                                        borderColor: "#aa0606"
                                    }}
                                    textAlign="center"
                                    placeholder="Nom"
                                    onChangeText={nom => this.setState({ nom })}
                                    value={this.state.nom}
                                />
                            )}

                            {this.state.err_prenom ? (
                                <View style={{ width: "80%" }}>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            borderColor: "gray",
                                            borderBottomWidth: 2,
                                            width: "100%",
                                            marginTop: "5%"
                                        }}
                                        textAlign="center"
                                        placeholder="Prénom"
                                        onChangeText={prenom => this.setState({ prenom })}
                                        value={this.state.prenom}
                                    />
                                    <Text style={styles.text_error}>{this.state.err_prenom}</Text>
                                </View>
                            ) : (
                                <TextInput
                                    style={{
                                        height: 40,
                                        borderColor: "gray",
                                        borderBottomWidth: 2,
                                        width: "80%",
                                        marginTop: "5%"
                                    }}
                                    textAlign="center"
                                    placeholder="Prénom"
                                    onChangeText={prenom => this.setState({ prenom })}
                                    value={this.state.prenom}
                                />
                            )}

                            <Text style={{ marginBottom: "20%" }} />
                            <TouchableOpacity
                                color="#FF3C52"
                                title="ENVOYER"
                                style={{
                                    height: "9%",
                                    width: "80%",
                                    backgroundColor: "#aa0606",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                                onPress={() => {
                                    this.register();
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: RF(3),
                                        color: "white",
                                        fontFamily: "Raleway-Bold"
                                    }}
                                >
                                    S'INSCRIRE
                                </Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
        );
    }

    // Permet d'enregister un nouveau utilisateur'
    async register() {
        // Déclaration des variables
        let infos_corrupt = false;
        let s = new Security();
        // Remise à zéro
        this.setState({ err_login: "" });
        this.setState({ err_password: "" });
        this.setState({ err_email: "" });
        this.setState({ err_nom: "" });
        this.setState({ err_prenom: "" });

        //console.warn("BEFORE ERR LOGIN = " + this.state.err_login);

        // -------------------
        // CONTRÔLES
        // -------------------
        // Login
        if (this.state.login === "") {
            this.setState({
                err_login: "Vous devez entrer un nom d'utilisateur"
            });
            infos_corrupt = true;
        }

        // Password
        if (this.state.password === "") {
            infos_corrupt = true;
            this.setState({
                err_password: "Vous devez entrer un mot de passe"
            });
        } else if (this.state.password.length <= 6) {
            infos_corrupt = true;
            this.setState({
                err_password: "Le mot de passe doit contenir au moins 6 caractères"
            });
        }

        // Email
        if (this.state.email === "") {
            infos_corrupt = true;
            this.setState({
                err_email: "Vous devez entrer une adresse email"
            });
        } else if (!/([@]+)/.test(this.state.email)) {
            infos_corrupt = true;
            this.setState({
                err_email: "Vous devez entrer une adresse email valide contenant '@' "
            });
        }

        // Nom
        if (this.state.nom === "") {
            infos_corrupt = true;
            this.setState({ err_nom: "Vous devez entrer un nom" });
        } else if (this.state.nom.length <= 2) {
            infos_corrupt = true;
            this.setState({
                err_nom: "Le nom doit contenir au moins 2 caractères"
            });
        }

        // Prenom
        if (this.state.prenom === "") {
            infos_corrupt = true;
            this.setState({
                err_prenom: "Vous devez entrer un prénom"
            });
        } else if (this.state.prenom.length <= 2) {
            infos_corrupt = true;
            this.setState({
                err_prenom: "Le nom doit contenir au moins 2 caractères"
            });
        }

        // Envoi de la requête au serveur
        if (infos_corrupt === false) {
            try {
                let result = await s.register(
                    this.state.prenom,
                    this.state.nom,
                    this.state.email,
                    this.state.login,
                    this.state.password
                );
                //console.warn(result);
                // Si connexion réussie
                if (result.success) {
                    // Affichage du message de succès
                    Alert.alert("Le chargement a été fait avec succès !");
                    // Navigation vers l'écran de login
                    this.props.navigation.navigate("Login", {
                        username: this.state.login
                    });
                } else {
                    // Affichage du message d'erreur
                    Alert.alert("Erreur lors de l'enregistrement !");
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
        flex: 1,
        backgroundColor: "red",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%"
    },
    text_error: {
        alignSelf: "flex-end",
        color: "red",
        fontSize: RF(1.4)
    }
});
