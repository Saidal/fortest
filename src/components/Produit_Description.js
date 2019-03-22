import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import RF from "react-native-responsive-fontsize";

// **************************************************
// COMPONENT: CARACTERISTIQUE D'UNE BOUTEILLE
// **************************************************
const Produit_Caracteristique = ({ feature, value }) => (
    <View style={styles.container}>
        <Text style={styles.feature_title}>{feature.toUpperCase()} : 
        {value ? (<Text style={styles.feature_value}>  {value.toUpperCase()}</Text>) : <Text style={styles.feature_value}>   --------</Text>}</Text>
    </View>
);

// Définition des types
Produit_Caracteristique.propTypes = {
    feature: PropTypes.string,
    value: PropTypes.string
};

// Fonctions associées
/*const renderCaracteristique = liste => {
    return liste.map(item => <Produit_Caracteristique feature={item.pays} value={item.region} />);
    //return liste.map(item => console.warn(Object.keys(item)));
};*/

// **************************************************
// FIN DU COMPONENT: CARACTERISTIQUE D'UNE BOUTEILLE
// **************************************************

// **************************************************
// COMPONENT: NOTE D'UNE BOUTEILLE
// **************************************************
const Produit_Note = ({ value, scale, name }) => (
    <View style={styles.container_note}>
        <Text>
            {value} / {scale}
        </Text>
        <View style={styles.liste_note_separator}>
            <Text>{name.toUpperCase()}</Text>
        </View>
    </View>
);

// Définition des types
Produit_Note.propTypes = {
    value: PropTypes.string,
    scale: PropTypes.string,
    name: PropTypes.string
};

// **************************************************
// FIN DU COMPONENT: NOTE D'UNE BOUTEILLE
// **************************************************

// **************************************************
// COMPONENT: LISTE NOTES D'UNE BOUTEILLE AVEC SCALE
// **************************************************
const Produit_Liste_Note_Scale = ({
    value1,
    scale1,
    name1,
    value2,
    scale2,
    name2,
    value3,
    scale3,
    name3
}) => (
    <View style={styles.produit_liste_container}>
        <View style={styles.container_note}>
            <Text style={styles.liste_note_value}>
                {value1}/{scale1}
            </Text>
            <View style={styles.liste_note_separator}>
                <Text style={styles.liste_note_name}>{name1.toUpperCase()}</Text>
            </View>
        </View>
        <View style={styles.container_note_middle}>
            <Text style={styles.liste_note_value}>
                {value2}/{scale2}
            </Text>
            <View style={styles.liste_note_separator}>
                <Text style={styles.liste_note_name}>{name2.toUpperCase()}</Text>
            </View>
        </View>
        <View style={styles.container_note}>
            <Text style={styles.liste_note_value}>
                {value3}/{scale3}
            </Text>
            <View style={styles.liste_note_separator}>
                <Text style={styles.liste_note_name}>{name3.toUpperCase()}</Text>
            </View>
        </View>
    </View>
);

// Définition des types
Produit_Liste_Note_Scale.propTypes = {
    value1: PropTypes.string,
    scale1: PropTypes.string,
    name1: PropTypes.string,
    value2: PropTypes.string,
    scale2: PropTypes.string,
    name2: PropTypes.string,
    value3: PropTypes.string,
    scale3: PropTypes.string,
    name3: PropTypes.string
};

// **************************************************
// FIN DU COMPONENT:  LISTE NOTES D'UNE BOUTEILLE AVEC SCALE
// **************************************************

// **************************************************
// COMPONENT: LISTE NOTES D'UNE BOUTEILLE SANS SCALE
// **************************************************
const Produit_Liste_Note = ({
    value1,
    scale1,
    name1,
    value2,
    scale2,
    name2,
    value3,
    scale3,
    name3
}) => (
    <View style={styles.produit_liste_container}>
        <View style={styles.container_note}>
            <Text style={styles.liste_note_value}>{value1}</Text>
            <View style={styles.liste_note_separator}>
                <Text style={styles.liste_note_name}>{name1.toUpperCase()}</Text>
            </View>
        </View>
        <View style={styles.container_note_middle}>
            <Text style={styles.liste_note_value}>{value2}</Text>
            <View style={styles.liste_note_separator}>
                <Text style={styles.liste_note_name}>{name2.toUpperCase()}</Text>
            </View>
        </View>
        <View style={styles.container_note}>
            <Text style={styles.liste_note_value}>{value3}</Text>
            <View style={styles.liste_note_separator}>
                <Text style={styles.liste_note_name}>{name3.toUpperCase()}</Text>
            </View>
        </View>
    </View>
);

// Définition des types
Produit_Liste_Note.propTypes = {
    value1: PropTypes.string,
    name1: PropTypes.string,
    value2: PropTypes.string,
    name2: PropTypes.string,
    value3: PropTypes.string,
    name3: PropTypes.string
};

// **************************************************
// FIN DU COMPONENT:  LISTE NOTES D'UNE BOUTEILLE SANS SCALE
// **************************************************

// **************************************************
// COMPONENT: PAGE DE DESCRIPTION D'UNE BOUTEILLE
// **************************************************

// title: le titre à afficher en haut. A remplacer par une propriété de item, mais laquelle ?
// description: la description à afficher en haut. A remplacer par une propriété de item, mais laquelle ?
// image: le lien de l'image à afficher. A remplacer par une propriété de item.
// item: la bouteille concernée
const Produit_Description = ({ title, description, image, item ,props}) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>{item.nom_vin}</Text>
            <Text style={styles.description}>{item.designation}</Text>
        </View>
        <View style={styles.body}>
        <Image
            style={{width: '100%', height: '100%'}}
            source={{uri: item.image1}}
            resizeMode= "contain"
            />
        <View style={{width: '70%', flexDirection: 'row',}}>
            {/*<Image source={image}  resizeMode="contain" style={styles.image} />*/}
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate("Caracteristique_detail", {
                        item: item
                    });
                }}
            >
            <ScrollView style={styles.caracteristique}>
                {/*renderCaracteristique(features)*/}
                <Produit_Caracteristique feature="Couleur" value={item.couleur} />
                <Produit_Caracteristique feature="Quantité" value={item.quantite} />
                <Produit_Caracteristique feature="Niveau" value={item.niveau1} />
                <Produit_Caracteristique feature="Etiquette" value={item.etiq1} />
                <Produit_Caracteristique feature="Provenance" value={item.provenance} />
                <Produit_Caracteristique feature="Type de cave" value={item.type_cave} />
                <Produit_Caracteristique feature="Viticulture" value={item.viticulture} />
                <Produit_Caracteristique feature="Tva récupérable" value={item.tva_recup} />
                <Produit_Caracteristique feature="Région" value={item.region} />
                <Produit_Caracteristique feature="Appellation" value={item.appelation} />
                <Produit_Caracteristique feature="Propriétaire" value={item.proprietaire} />
                <Produit_Caracteristique feature="Domaine" value={item.nom_vin} />

            </ScrollView>
            </TouchableOpacity>
        </View>

        </View>
        <View style={{alignSelf: 'center',}}>
            <Produit_Liste_Note
                // Comment récupérer le nom sans le coder en dur ?
                name1="Wine Spectator"
                name2="Jancis Robinson"
                name3="RVF"
                scale1="100"
                scale2="20"
                scale3="20"
                value1={item.note_wine_spectator}
                value2={item.note_jancis_robinson}
                value3={item.note_rvf}
            />
        </View>
    </View>

);

// Définition des types
Produit_Description.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.number,
    item: PropTypes.object
};

// Définition des valeurs par défaut
Produit_Description.defaultProps = { title: "Inconnu", couleur: "Inconnue" };

// **************************************************
// FIN COMPONENT: PAGE DE DESCRIPTION D'UNE BOUTEILLE
// **************************************************

const styles = {
    header: {
        width: '100%',
        padding: '10%',
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
        justifyContent: "space-between",
        paddingBottom: 30,
        paddingTop: 10,
        marginBottom: 10,
        borderBottomWidth: 0.5,
        marginRight: 20,
        marginLeft: 20
    },
    body: {
        marginBottom: '5%',
        alignItems: "center",
        alignItems: "flex-start",
        flexDirection: "row",
        width: '60%'
    },
    footer: {
        alignItems: "center"
    },
    title: {
        fontSize: RF(3),
        alignItems: "center",
        textAlign: "center"
    },
    description: {
        fontSize: RF(1.8),
        alignItems: "center",
        textAlign: "center"
    },
    image: {
        width: "40%",
        height: "40%"
    },
    container: {
        margin: 3
    },
    feature_title: {
        fontWeight: "bold",
        fontSize: RF(1.8),
        marginTop: '1%'
    },
    feature_value: {
        fontWeight: "normal", 
        fontSize: RF(1.6)
    },
    container_note: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(52, 52, 52, 0.1)",
        paddingTop: 10,
        paddingBottom: 5,
        width: 100
    },
    container_note_middle: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(52, 52, 52, 0.1)",
        paddingTop: 10,
        paddingBottom: 5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderLeftColor: "rgba(52, 52, 52, 0.3)",
        borderRightColor: "rgba(52, 52, 52, 0.3)",
        paddingLeft: 10,
        paddingRight: 10
    },
    liste_note_separator: {
        borderTopWidth: 0.5,
        borderTopColor: "rgba(52, 52, 52, 0.3)"
    },
    caracteristique: {
    },

    produit_liste_container: {
        flexDirection: "row"
    },
    liste_note_name: {
        fontSize: 8
    },
    liste_note_value: {
        fontWeight: "bold",
        fontSize: 12
    }
};

export default Produit_Description;
