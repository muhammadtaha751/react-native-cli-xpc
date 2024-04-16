import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';


export default function Login({ navigation, toggleLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {

        console.log('Email:', email);
        console.log('Password:', password);
        toggleLogin()
        navigation.navigate('Dashboard')
    };

    const handleRegister = () => {
        navigation.navigate('Register')
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={require('../assets/xpc.png')}
                    style={styles.image}
                />
                  <Text style={styles.textFour}>Employee Login Portal</Text>
                <Text style={styles.text}>Please log in to access your account.</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    maxLength={40} 
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    maxLength={30} 
                    secureTextEntry
                />
                <TouchableOpacity onPress={handleSignIn}>
                    <Text style={styles.textThree}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleRegister}>
                    <Text style={styles.textTwo}>Register</Text>
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
        height: 45,
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
        fontSize: 23,
        marginBottom: 30,
        marginTop: 30,
        textAlign:"center"
    },
    textTwo: {
        color: '#007bff',
        marginTop: 10
    },
    textThree: {
        backgroundColor: "#007bff",
        color: "white",
        width: 370,
        height: 45,
        textAlign: 'center',
        paddingTop:6,
        fontSize:20,
        fontWeight:"400"
    },
    textFour:{
        color: 'black',
        fontSize: 30,
        marginTop: 30,
        fontWeight:"500"
    }
});