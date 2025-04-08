import { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, } from "react-native";
import * as SecureStore from "expo-secure-store";
import Button from "../components/Button";

export default function Home({ navigation }) {

    const [text, setText] = useState("");
    const [textoPersistido, setTextoPersistido] = useState("");
    const [semPersistencia, setSemPersistencia] = useState("");

    useEffect(() => {
        SecureStore.getItemAsync("meuTexto").then(setTextoPersistido);
    }, []);

    const salvaTexto = async () => {
        if (text.trim()) {
            await SecureStore.setItemAsync("meuTexto", text);
            setTextoPersistido(text);
            setSemPersistencia(text);
            setText("");
        } else {
            alert("Digite algo para salvar!");
        }
    };
    const limparTexto = async () => {
        await SecureStore.deleteItemAsync("meuTexto");
        setTextoPersistido("");
        setSemPersistencia("");
        alert("Texto limpo!");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Persistência e Navegação</Text>
            <TextInput style={styles.input} placeholder="Digite algo" onChangeText={setText} />
            <Text style={styles.textRed}>Sem persistência: {semPersistencia}</Text>
            <Text style={styles.textGreen}>Texto persistido: {textoPersistido}</Text>
            <Button text="Salvar" onPress={salvaTexto} />
            <Button text="Limpar" onPress={limparTexto} />
            <Button text="Detalhes" onPress={() => navigation.navigate("Detalhes", { textoNaoPersistido: semPersistencia })} />
            <Button text="Perfil" onPress={() => navigation.navigate("Perfil")} />
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
    input: {
        height: 40,
        width: 300,
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 30,
        padding: 10,
    },

    textRed: {
        color: "red",
        marginTop: 20,
        fontSize: 20,
    },
    textGreen: {
        color: "green",
        marginTop: 20,
        fontSize: 20,
    },
});