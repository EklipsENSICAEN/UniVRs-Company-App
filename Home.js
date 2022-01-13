import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Title from './components/Title'


export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={{color:"white",fontWeight:'bold',marginLeft:20, fontSize:25}}>Univrs</Text>
            </View>
            <Image
                source={require('./assets/univrs.png')}
                style={{height:210,width:'100%'}}
            />
            <View style={{display:"flex", justifyContent: 'center', alignItems: 'center', marginTop:70}}>
                <Text style={{color:'white',fontSize:30}}>WELCOME TO UNIVRS</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("QrCodeScanner")}
                style={styles.button}
            >
                <Text style= {styles.buttonText}>SCAN QR CODE</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor:'#6fa8dc',
        paddingTop:20
    },
    banner:{
        height: 500,
        width: 500
    },
    bannerContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    button: {
        width: '80%',
        backgroundColor: "white",
        padding: 20,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 30,
        marginTop: 30,
        marginLeft: 40,
        color: "white"
    },
    buttonText: {
        fontSize: 24,
        fontWeight: "600",
        color: "#6fa8dc"
    },
    topBar:{
        width: '100%',
        height: 59,
        backgroundColor:"#0077B6",
        display: 'flex',
        justifyContent:'center',
        marginBottom: 70,
    }
})
