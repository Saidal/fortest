import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    AsyncStorage
} from "react-native";
import Produit_Liste from "../components/Produit_Liste";
import { Data } from "../API/Data";
import Images from "../../assets/img/index";
import RF from "react-native-responsive-fontsize";

export default class Vinotheque extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: "",
            dataEmpty: false,
            username: ""
        };
    }

    async componentWillMount() {
        let result;
        let d = new Data();
        try {
            // Récupération du nom de l'utilisateur
            result = await d.getUser();
            if (result.success) {
                this.setState({ username: result.data });
            }
            // Récupération de la liste des vins de l'utilisateur
            result = await d.getListProducts(result.data);
            if (result.success) {
                this.setState({ dataSource: result.data });
                if (this.state.dataSource == []) {
                    this.setState({ dataEmpty: true });
                }
            }
        } catch (err) {
            console.warn("err", err);
        }
    }

    render() {
        if (this.state.dataEmpty) {
            return <Text>Liste vide.</Text>;
        } else if (this.state.dataSource == "") {
            return <Text>Données non chargées.</Text>;
        } else {
            return (
                <ImageBackground source={Images.background} style={styles.container}>
                    <ScrollView style={{ flex: 1 }}>
                        <View style={styles.container}>
                            <Text style={styles.title}>VINOTHEQUE</Text>
                        </View>
                        {this.renderList()}
                    </ScrollView>
                </ImageBackground>
            );
        }
    }

    renderList() {
        //console.warn(this.state.dataSource);
        return this.state.dataSource.map(item => (
            <TouchableOpacity
            style={{width: '100%', borderBottomWidth: 1}}
                key={item}
                onPress={() => {
                    this.props.navigation.push("Product", { item: item });
                }}
            >
                <Produit_Liste image={item.image1} item={item} title={item.appelation} />
            </TouchableOpacity>
        ));
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: "center",
        alignContent: "center",
        textAlign: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    }
};
