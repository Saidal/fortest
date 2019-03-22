import React, { Component } from "react";
import { View, ImageBackground, Text, FlatList, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import Images from "../../assets/img/index";
export default class Blockchain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    numerobck: "",
                    meta: "",
                    hashprev: "",
                    lstransbck: "",
                    pow: "",
                    curhash: ""
                }
            ]
        };
        var i = 0;
        while (i <= 20) {
            this.state.items.push({
                numerobck: i,
                meta: i,
                hashprev: i,
                lstransbck: i,
                pow: i,
                curhash: i
            });
            i = i + 1;
        }
    }

    onViewableItemsChanged = ({ viewableItems, changed }) => this.setState({ viewableItems });

    fetchdata() {}

    _renderItem = ({ item }) => {
        return (
            <View style={{ alignItems: "center" }}>
                <Text>NUMERO DU BLOCK</Text>
                <View style={styles.blockinfo1}>
                    <Text>BLOCK N°{item.numerobck}</Text>
                </View>
                <Text style={{ marginTop: "5%" }}>METADONNE</Text>
                <View style={styles.blockinfo2}>
                    <Text>{item.numerobck}</Text>
                </View>
                <Text style={{ marginTop: "5%" }}>HASH PREVIOUS BLOCK</Text>
                <View style={styles.blockinfo3}>
                    <Text>38E0EA6799221E4DD5CF2A6FB7F9E63F6E08853C5996B85C9F2AFADFC2D1BC62</Text>
                </View>
                <Text style={{ marginTop: "5%" }}>LISTE TRANSACATION BLOCK</Text>
                <View style={styles.transac}>
                    <Text>{item.numerobck}</Text>
                </View>
                <Text style={{ marginTop: "20%" }}>HASH CURRENT BLOCK</Text>
                <View style={styles.blockinfo3}>
                    <Text style={{ fontSize: 13 }}>
                        9B885F8E2375F892D474CB376E71B3D23315971F6B0B82C2B6A2D841F68D34E2
                    </Text>
                </View>
            </View>
        );
    };

    render() {
        return (
            <ImageBackground source={Images.background} style={styles.container}>
                <View>
                    <Carousel
                        ref={c => {
                            this._carousel = c;
                        }}
                        data={this.state.items}
                        renderItem={this._renderItem}
                        sliderWidth={Dimensions.get("window").width}
                        itemWidth={Dimensions.get("window").width}
                    />
                </View>
            </ImageBackground>
        );
    }
}

const styles = {
    container: {
        alignItems: "center",
        backgroundColor: "blue",
        flex: 1
    },
    blockinfo1: {
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        height: "5%",
        borderWidth: 2
    },
    blockinfo2: {
        justifyContent: "center",
        alignItems: "center",
        width: "60%",
        height: "5%",
        borderWidth: 2
    },
    blockinfo3: {
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: "5%",
        borderWidth: 2
    },
    transac: {
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        height: "35%",
        borderWidth: 2
    }
};
