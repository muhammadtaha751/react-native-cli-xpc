import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';


export default function RegisterThree({ navigation, }) {

    const handleRegister = () => {
        navigation.navigate('RegisterFour')
    };

    const handlePrevious = () => {
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
                <Text style={styles.textThree}>STEP 3/5</Text>
                <Text style={styles.label}>Candidate/Last Degree</Text>
                <TextInput
                    style={styles.input}
                    maxLength={30} 
                />
                <Text style={styles.label}>Candidate Speciality</Text>
                <TextInput
                    style={styles.input}
                    maxLength={30} 
                />
                <Text style={styles.label}>Candidate Visa Status</Text>
                <TextInput
                    style={styles.input}
                    maxLength={30} 
                />
                <Text style={styles.label}>DBS Certificate</Text>
                <TextInput
                    style={styles.input}
                    maxLength={30} 

                />
                <Text style={styles.label}>Candidate Identity</Text>
                <TextInput
                    style={styles.input}
                    maxLength={30} 
                />
                <Text style={styles.label}>Number</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    maxLength={15} 
                />
                <View style={styles.containerTwo}>
                    <TouchableOpacity onPress={handlePrevious}>
                        <Text style={styles.textFour}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRegister}>
                        <Text style={styles.textTwo}>Next</Text>
                    </TouchableOpacity>
                </View>
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
        color:"black"
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
    textThree: {
        color: '#7c7cdd',
        marginLeft: 290,
        marginBottom: 30,
        fontSize: 18,
        fontWeight: '500'
    },
    containerTwo: {
        flexDirection: 'row',
        marginLeft: 110,
        marginBottom: 50,
    },
    textFour: {
        color: '#999',
        marginTop: 10,
        backgroundColor: "#fff",
        width: 120,
        height: 45,
        textAlign: 'center',
        paddingTop: 10,
        borderRadius: 5,
        fontWeight: "500"
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
        fontWeight: "500",
        marginLeft: 20
    },
});