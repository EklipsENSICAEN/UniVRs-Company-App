import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Title() {
    return (
        <View style={styles.titleContainer}>
            <Text style= {styles.title}>Univrs</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        justifyContent:"center",
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: "600"

    }
})
