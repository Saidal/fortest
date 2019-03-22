import React, { Component } from "react";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import Produit_Description from "../components/Produit_Description";
import Images from "../../assets/img/index";

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation.getParam("item", null)
        };
    }

    render() {
        let obj = {
            title: "PETRUS 1988",
            description:
                "La légende de Bordeaux, un vin majestueux, concentré, voluptueux et souple"
        };
        return (
            <ImageBackground source={Images.background} style={styles.container}>
                <Produit_Description
                    description={obj.description}
                    image={Images.petrus}
                    item={this.state.item}
                    title={obj.title}
                    props={this.props}
                />
                <View style={{backgroundColor: '#273d5e', flex: 1, width: '100%', height: '100%', justifyContent: 'center',}}>
                    <TouchableOpacity
                    style={{borderWidth: 2, borderRadius: 64, borderColor: 'white',width: '50%', height: '50%',alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}
                    >
                    <Text style={{color: 'white'}}>Accéder à ma Blockchain</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'yellow',
        height: '100%',
        width: '100%',
        alignItems: "center",
        alignContent: "center",
        textAlign: "center"
    }
};
