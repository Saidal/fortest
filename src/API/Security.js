import { AsyncStorage } from "react-native";
import { Data } from "./Data.js";

const config = require("./config.json");

// Dans l'application, checkr si le user est != vide<;
// Si c'est le cas, alors l'utilisateur est déhà connecté, pas besoin de reancer la technique
export class Security {
    // ***************************************************
    // FONCTIONS EXTERNES
    // ***************************************************

    // Se connecte à la BD et stocke dans la mémoire locale le username
    async login(username, password) {
        // -----------------------------------------
        // DECLARATION DES VARIABLES
        // -----------------------------------------
        var result = { success: null, error: "", data: {} };
        var request = "http://winedex.ddns.net:12345/login";
        var d = new Data();

        // -----------------------------------------
        // VERIFICATION DES PARAMETRES
        // -----------------------------------------
        if (username === "" || username === null || username === undefined) {
            result.success = false;
            result.error = "Error during SECURITY.login: username is empty";
        } else if (password === "" || password === null || password === undefined) {
            result.success = false;
            result.error = "Error during SECURITY.login: password is empty";
        } else {
            // -----------------------------------------
            // TRAITEMENT
            // -----------------------------------------
            try {
                // Envoi de la requête
                await fetch(request, {
                    method: "POST",
                    headers: {
                        Accept: "application/x-www-form-urlencoded",
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "username=" + username + "&password=" + password
                }).then(
                    response => {
                        result.data = response;
                        result.success = true;
                    } /*response.json()*/
                );
                /*.then(responseJson => {
            result.data = responseJson;
          });*/
            } catch (error) {
                result.success = false;
                result.error = "Error during SECURITY.login: " + error;
            }

            // Enregistrement du username dans la mémoire locale
            if (result.success) {
                try {
                    result = await d.saveUser(username);
                } catch (error) {
                    result.success = false;
                    result.error = "Error during SECURITY.login: " + error;
                }
            }
        }
        return result;
    }

    // !!!!!! NON TESTEE A DATE !!!!!!!
    // Enregistre un nouvel utilisateur dans la base de données
    async register(nom, prenom, email, username, password) {
        // -----------------------------------------
        // DECLARATION DES VARIABLES
        // -----------------------------------------
        var result = { success: null, error: "", data: {} };
        var request = "http://winedex.ddns.net:12345/register";
        var d = new Data();

        // -----------------------------------------
        // VERIFICATION DES PARAMETRES
        // -----------------------------------------
        if (username == "" || username == null) {
            result.success = false;
            result.error = "Error during SECURITY.register: username is empty";
        } else if (password == "" || password == null) {
            result.success = false;
            result.error = "Error during SECURITY.register: password is empty";
        } else if (nom == "" || nom == null) {
            result.success = false;
            result.error = "Error during SECURITY.register: nom is empty";
        } else if (prenom == "" || prenom == null) {
            result.success = false;
            result.error = "Error during SECURITY.register: prenom is empty";
        } else if (email == "" || email == null) {
            result.success = false;
            result.error = "Error during SECURITY.register: mail is empty";
        } else {
            // -----------------------------------------
            // TRAITEMENT
            // -----------------------------------------
            try {
                // Envoi de la requête
                await fetch(request, {
                    method: "POST",
                    headers: {
                        Accept: "application/x-www-form-urlencoded",
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body:
                        "username=" +
                        username +
                        "&password=" +
                        password +
                        "&email=" +
                        email +
                        "&nom=" +
                        nom +
                        "&prenom=" +
                        prenom
                }).then(response => {
                    if (response.status == 200) {
                        result.success = true;
                    }
                });
            } catch (error) {
                result.success = false;
                result.error = "Error during SECURITY.register: " + error;
            }

            // Enregistrement du username dans la mémoire locale
            if (result.success) {
                try {
                    result = await d.saveUser(username);
                } catch (error) {
                    result.success = false;
                    result.error = "Error during SECURITY.register: " + error;
                }
            }
        }
        return result;
    }

    // ***************************************************
    // FONCTIONS UTILITAIRES
    // ***************************************************
    checkMailFormat() {
        // Sur ce forum: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
        // Les gens disent que c'est une mauvaise idée. A implémenter ?
        return true;
    }

    checkBirthDateFormat() {
        return true;
    }
}
