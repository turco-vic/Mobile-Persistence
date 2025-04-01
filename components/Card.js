import React from "react";
import { StyleSheet, Image } from "react-native";

export default function Cards({ ImgSrc}) {
    return (
        <>
            <Image source={ImgSrc} style={styles.image} />
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginTop: 20,
    },
});