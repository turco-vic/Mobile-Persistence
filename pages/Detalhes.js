import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";


export default function Detalhes({ route }) {
    const { textoNaoPersistido } = route.params || {};
    const [textoPersistido, setTextoPersistido] = useState("");

    useEffect(() => {
        const carregarTextoPersistido = async () => {
            const textoSalvo = await SecureStore.getItemAsync("meuTexto");
            if (textoSalvo) {
                setTextoPersistido(textoSalvo);
            }
        };
        carregarTextoPersistido();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes</Text>
            <Text style={styles.subTitle}>Sem persistência: {textoNaoPersistido}</Text>
            <Text style={styles.subTitle2}>Texto persistido: {textoPersistido}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
    },
    title: {
        fontSize: 30,
        textDecorationLine: "underline",
    },
    subTitle: {
        fontSize: 20,
        color: "red",
    },
    subTitle2: {
        fontSize: 20,
        color: "green",
    },
});