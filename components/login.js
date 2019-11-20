/**$format */
/**
ryo
This is Login Screen
Install  icons: react-native-vector-icons
 */


import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.up}>
                    <Ionicons
                    name ="ios-speedometer"
                    size={100}
                    color={'rgb(221,97,97)'}
                    ></Ionicons>
                {/**we want to add Icon, Text here */}
                    <Text style={styles.title}>Share your images for everyone</Text>
                </View>
                <View style={styles.down}>
                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.TextInput}></TextInput>
                    </View>
                    <View style={styles.textInputContainer}>
                        
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'stretch',
        backgroundColor: 'rgb(234, 195, 176)'
    },
    up: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: 'rgb(234, 195, 176)',
        justifyContent:'center',
        alignItems: 'center'
    },
    down: {
        flex: 7,
        flexDirection: 'column',
        backgroundColor: 'green'
    },
    title: {
        color:'rgb(255,119,34)',
        textAlign: 'center',
        width: 400,
        fontSize: 23

    },
    textInputContainer: {
        backgroundColor: 'rgba(255,255,255,0.5)'// a =alpha = opacity
    },
    TextInput: {
        width: 280, 
        height: 45
    }
    
})
