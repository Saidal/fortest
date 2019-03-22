import NfcManager from "react-native-nfc-manager";

// -----------------------------------------
// NOTE: - n'a pas été testé pour IOS
//       - toutes les fonctions proposées par le package n'ont pas été implémentées, seulement celles nécessaires ici
// -----------------------------------------

export class NFC_MANAGER {
    // CONSTRUCTEUR
    constructor() {
        this.supported = true;
        this.enabled = false;
        this.tag = {};
        this.state = "";
        this.error = "";
    }

    // METHODES

    // Vérifie que le NFC est supporté sur le téléphone utilisé
    // technology est de type NfcTech.something, comme NfcTech.NfcA, ou NfcTech.NfcB, etc
    async isSupported(technology) {
        // -----------------------------------------
        // DECLARATION DES VARIABLES
        // -----------------------------------------
        var nfcTech = null;
        var result = null;

        // Remise à zéro de l'état de l'objet
        this.error = "";
        this.state = "";

        try {
            // Si une technologie est précisée
            if (nfcTech != null) {
                // Récupération du résultat de la promesse
                result = await NfcManager.isSupported(nfcTech);
                if (result) {
                    this.state = "Technology " + String(technology) + " is supported";
                } else {
                    this.state = "Technology " + String(technology) + " is NOT supported";
                }
            } else {
                // Récupération du résultat de la promesse
                result = await NfcManager.isSupported();
                if (result) {
                    this.state = "The NFC technology is supported";
                } else {
                    this.state = "The NFC technology is NOT supported";
                }
            }
        } catch (e) {
            //console.warn(e);
            this.error = "Erreur méthode _isSupported: " + e;
            return false;
        }

        // Actualisation des attributs
        if (result) {
            this.supported = true;
        } else {
            this.supported = false;
        }

        // Renvoi du résultat
        return result;
    }

    // Vérifie si la NFC est active à un instant T
    // platform: Platform.OS, correspondant à la plateforme du mobile
    // redirection (ANDROID ONLY): boolean, redirige vers la page des settings si true
    async isEnabled(platform, redirection) {
        // -----------------------------------------
        // DECLARATION DES VARIABLES
        // -----------------------------------------
        var result = true;

        if (this.supported) {
            // ANDROID
            if (platform === "android") {
                try {
                    result = await NfcManager.isEnabled();
                    if (!result) {
                        this.state = "Veuillez activer la NFC";
                        this.enabled = false;
                        // Redirige l'utilisateur sur la page d'activation de la NFC
                        if (redirection) {
                            NfcManager.goToNfcSetting();
                        }
                    } else {
                        this.enabled = true;
                    }
                } catch (e) {
                    //console.warn(e);
                    this.error = "Erreur méthode isEnabled: " + e;
                    return false;
                }
            }
            // IOS
            else {
                try {
                    result = await NfcManager.start({
                        onSessionClosedIOS: () => {
                            this.state = "La session IOS est terminée";
                        }
                    });
                    if (!result) {
                        this.state = "Veuillez activer la NFC";
                    }
                } catch (e) {
                    //console.warn(e);
                    this.error = "Erreur méthode isEnabled: " + e;
                    return false;
                }
            }
        } else {
            this.error = "Erreur: NFC non supportée";
            result = false;
        }

        return result;
    }

    // Lance la détection de tag NFC
    // onDiscover: arrow function qui sera exéctuée dès la découverte d'un nouveau tag
    startDetection(onDiscover) {
        try {
            this.state = "Detection d'un tag...";
            //NfcManager.registerTagEvent(this.onTagDiscovered);
            NfcManager.registerTagEvent(tag => {
                this.onTagDiscovered(tag);
                // Appel de la fonction passée en paramètre
                onDiscover();
            });
        } catch (e) {
            //console.warn(e);
            this.error = "Erreur méthode startDetection: " + e;
            this.state = "Détection interrompue";
            // Fin d'écoute
            NfcManager.unregisterTagEvent();
        }
    }

    // Action effectuée lors de la reconnaissance d'un tag
    onTagDiscovered(tag) {
        this.tag = tag;
        this.state = "Tag détecté !";
    }

    // Arrête la détection de tag NFC
    stopDetection() {
        try {
            NfcManager.unregisterTagEvent();
            this.state = "Détection terminée";
        } catch (e) {
            //console.warn(e);
            this.error = "Erreur méthode stopDetection: " + e;
            this.state = "Détection interrompue";
        }
    }
}
