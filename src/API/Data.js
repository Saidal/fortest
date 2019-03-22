import { AsyncStorage } from "react-native";

const config = require("./config.json");

export class Data {
    // ***************************************************
    // FONCTIONS INTERNE
    // ***************************************************

    // Enregistre l'utilisateur dans la mémoire du téléphone
    async saveUser(user) {
        // -----------------------------------------
        // DECLARATION DES VARIABLES
        // -----------------------------------------
        var result = { success: null, error: "", data: {} };

        // -----------------------------------------
        // VERIFICATION DES PARAMETRES
        // -----------------------------------------
        if (user === "" || user === null || user === undefined) {
            result.success = false;
            result.error = "Error during DATA.saveUser: user is empty";
        } else {
            // -----------------------------------------
            // TRAITEMENT
            // -----------------------------------------
            try {
                // Enregistrement du user
                result.data = await AsyncStorage.setItem(
                    config.asyncStorage.user,
                    JSON.stringify(user)
                );
                result.success = true;
            } catch (error) {
                result.success = false;
                result.error = "Error during DATA.saveUser: " + error;
            }
        }

        return result;
    }

    // Récupère l'utilisateur stocké dans la mémoire
    async getUser() {
        // -----------------------------------------
        // DECLARATION DES VARIABLES
        // -----------------------------------------
        var result = { success: null, error: "", data: {} };

        // -----------------------------------------
        // TRAITEMENT
        // -----------------------------------------
        try {
            // Récupération de l'information du user
            result.data = await AsyncStorage.getItem(config.asyncStorage.user);
            // Conversion du json en objet
            result.data = JSON.parse(result.data);
            result.success = true;
        } catch (error) {
            result.success = false;
            result.error = "Error during DATA.getUser: " + error;
        }

        return result;
    }

    // ***************************************************
    // FONCTIONS EXTERNE
    // ***************************************************

    // Récupère les informations d'une bouteille via son rfid
    async getProductByRfid(username, rfid) {
        // -----------------------------------------
        // DECLARATION DES VARIABLES
        // -----------------------------------------
        var result = { success: null, error: "", data: {} };
        var request = "http://winedex.ddns.net:12345/vinotheque/" + rfid + "/" + username;

        // -----------------------------------------
        // VERIFICATION DES PARAMETRES
        // -----------------------------------------
        if (username === "" || username === null || username === undefined) {
            result.success = false;
            result.error = "Error during DATA.getListProducts: username is empty";
        } else if (rfid === "" || rfid === null || rfid === undefined) {
            result.success = false;
            result.error = "Error during DATA.getListProducts: rfid is empty";
        } else {
            // -----------------------------------------
            // TRAITEMENT
            // -----------------------------------------
            try {
                // Envoi de la requête
                await fetch(request, {
                    method: "GET",
                    headers: {
                        Accept: "application/x-www-form-urlencoded",
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
                    .then(response => response.json())
                    .then(responseJson => {
                        result.data = responseJson;
                        result.success = true;
                    });
            } catch (error) {
                result.success = false;
                result.error = "Error during DATA.getProductByRfid: " + error;
            }
        }
        return result;
    }

    // Récupère l'historique de toutes les bouteilles d'un utilisateur
    async getListProducts(username) {
        // -----------------------------------------
        // DECLARATION DES VARIABLES
        // -----------------------------------------
        var result = { success: null, error: "", data: {} };
        var request = "http://winedex.ddns.net:12345/product_by_clientid/" + username;

        // -----------------------------------------
        // VERIFICATION DES PARAMETRES
        // -----------------------------------------
        if (username === "" || username === null || username === undefined) {
            result.success = false;
            result.error = "Error during DATA.getListProducts: username is empty";
        } else {
            // -----------------------------------------
            // TRAITEMENT
            // -----------------------------------------
            try {
                // Envoi de la requête
                await fetch(request)
                    .then(response => response.json())
                    .then(responseJson => {
                        result.data = responseJson;
                        result.success = true;
                    });
            } catch (error) {
                result.success = false;
                result.error = "Error during DATA.getListProducts: " + error;
            }
        }
        return result;
    }

    // !!!!!! NON TESTEE A DATE !!!!!!!
    // Récupère l'historique de toutes les bouteilles d'un utilisateur
    async uploadCode(qr_code, rfid_id) {
        // -----------------------------------------
        // DECLARATION DES VARIABLES
        // -----------------------------------------
        var result = { success: null, error: "", data: {} };
        var request = "http://winedex.ddns.net:12345/stock_qr_code_rfid";

        // -----------------------------------------
        // VERIFICATION DES PARAMETRES
        // -----------------------------------------
        if (qr_code === "" || qr_code === null || qr_code === undefined) {
            result.success = false;
            result.error = "Error during DATA.getListProducts: qr_code is empty";
        } else if (rfid_id === "" || rfid_id === null || rfid_id === undefined) {
            result.success = false;
            result.error = "Error during DATA.getListProducts: rfid_id is empty";
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
                    body: "qr_code=" + qr_code + "&rfid_id=" + rfid_id
                })
                    .then(response => response.json())
                    .then(responseJson => {
                        result.data = responseJson;
                        result.success = true;
                    });
            } catch (error) {
                result.success = false;
                result.error = "Error during DATA.getListProducts: " + error;
            }
        }
        return result;
    }
}
