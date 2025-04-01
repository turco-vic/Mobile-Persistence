import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button({ text, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        padding: 10,
        marginTop: 20,
        width: 300,
        display: "flex",
        alignItems: "center",
        borderRadius: 10,
    },
    textButton: {
        color: "white",
    },
});