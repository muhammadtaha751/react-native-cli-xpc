import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';


export default function Register({ navigation }) {

    const handleRegister = () => {
        navigation.navigate('RegisterTwo')
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={require('../assets/xpc.png')}
                    style={styles.image}
                />
                <Image
                    source={require('../assets/signup.png')}
                    style={styles.imageTwo}
                />
                <Text style={styles.text}>Signup Form</Text>
                <Text style={styles.textThree}>STEP 1/5</Text>
                <Text style={styles.label}>Enter Postcode</Text>
                <TextInput
                    style={styles.input}
                    maxLength={10} 
                    keyboardType='numeric'
                />
                <Text style={styles.label}>Enter Address</Text>
                <TextInput
                    style={styles.input}
                    maxLength={40} 
                />
                <Text style={styles.label}>City</Text>
                <TextInput
                    style={styles.input}
                    maxLength={20} 
                />
                <Text style={styles.label}>Country</Text>
                <TextInput
                    style={styles.input}
                    maxLength={20} 

                />
                <TouchableOpacity onPress={handleRegister}>
                    <Text style={styles.textTwo}>Next</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    label: {
        alignSelf: 'flex-start',
        marginBottom: 5,
        color: 'black'
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        color:'black'
    },
    image: {
        width: 250,
        height: 100,
        marginTop: 40
    },
    text: {
        color: 'black',
        fontSize: 30,
        marginBottom: 50,
        marginTop: 30
    },
    textTwo: {
        color: 'white',
        marginTop: 10,
        backgroundColor: "#7c7cdd",
        color: "white",
        width: 120,
        height: 45,
        textAlign: 'center',
        paddingTop: 10,
        borderRadius: 5,
        marginLeft: 250,
        marginBottom:30,
    },
    textThree: {
        color: '#7c7cdd',
        marginLeft: 290,
        marginBottom:30,
        fontSize:18,
        fontWeight:'500'
    }
});