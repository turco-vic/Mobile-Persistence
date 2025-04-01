import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Cards from "../components/Card";

export default function Perfil() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enzo Turcovic</Text>
            <Image source={require("../assets/profile.png")} style={styles.image} />
            <View style={styles.cardsContainer}>
                <Cards ImgSrc={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25231.png" }} />
                <Cards ImgSrc={{ uri: "https://cdn-icons-png.flaticon.com/512/732/732212.png" }} />
                <Cards ImgSrc={{ uri: "https://cdn-icons-png.flaticon.com/512/732/732190.png" }} />
                <Cards ImgSrc={{ uri: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png" }} />
                <Cards ImgSrc={{ uri: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" }} />
                <Cards ImgSrc={{ uri: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png" }} />
                <Cards ImgSrc={{ uri: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png" }} />
                <Cards ImgSrc={{ uri: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png" }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 40,
    },
    subTitle: {
        fontSize: 20,
        margin: 20,
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
        marginTop: 20,
    },
    cardsContainer: {
        marginTop: 40,
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center",
        gap: 40,
    },

});