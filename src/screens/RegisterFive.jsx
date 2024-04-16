import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function RegisterFive({ navigation, }) {
    const [selectedGender, setSelectedGender] = useState('');
    const [textInputValue, setTextInputValue] = useState('');
    const [selectedMaritalStatus, setSelectedMaritalStatus] = useState('');

    const handleRegister = () => {
        navigation.navigate('Login')
    };


    const handlePrevious = () => {
        navigation.navigate('RegisterFour')
    };

    const handleGenderChange = (itemValue) => {
        setSelectedGender(itemValue);
        setTextInputValue(itemValue);
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
                <Text style={styles.textThree}>STEP 5/5</Text>
                <Text style={styles.label}>Candidate Experience</Text>
                <View style={styles.genderContainer}>
                    <View>
                        <Picker
                            style={styles.picker}
                            selectedValue={selectedMaritalStatus}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedMaritalStatus(itemValue)
                            }
                        >
                            <Picker.Item label="Select Candidate Experience" value="" />
                            <Picker.Item label="less than 1 year" value="less than 1 year" />
                            <Picker.Item label="1 year" value="1 year" />
                            <Picker.Item label="1+ years" value="1+ years" />
                            <Picker.Item label="2+ years" value="2+ years" />
                            <Picker.Item label="3+ years" value="3+ years" />
                            <Picker.Item label="4+ years" value="4+ years" />
                            <Picker.Item label="5+ years" value="5+ years" />
                            <Picker.Item label="10+ years" value="10+ years" />
                          
                        </Picker>
                    </View>
                </View>
                <Text style={styles.label}>Gender</Text>
                <View style={styles.genderContainer}>

                    <View>
                        <Picker
                            style={styles.picker}
                            selectedValue={selectedGender}
                            onValueChange={handleGenderChange}
                        >
                            <Picker.Item label="Select Gender" value="" />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                            <Picker.Item label="Other" value="other" />
                        </Picker>
                    </View>
                </View>
                <Text style={styles.label}>Maritial Status</Text>
                <View style={styles.genderContainer}>
                    <View>
                        <Picker
                            style={styles.picker}
                            selectedValue={selectedMaritalStatus}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedMaritalStatus(itemValue)
                            }
                        >
                            <Picker.Item label="Select Marital Status" value="" />
                            <Picker.Item label="Single" value="single" />
                            <Picker.Item label="Married" value="married" />
                            <Picker.Item label="Divorced" value="divorced" />
                            <Picker.Item label="Widowed" value="widowed" />
                        </Picker>
                    </View>
                </View>
                <Text style={styles.text}>Next Of Kin Details</Text>
                <Text style={styles.label}>Name(Next of Kin)</Text>
                <TextInput
                    style={styles.input}
                    maxLength={30}

                />
                <Text style={styles.label}>Number(Next of Kin)</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    maxLength={15}

                />
                <Text style={styles.label}>Address(Next of Kin)</Text>
                <TextInput
                    style={styles.input}
                    maxLength={45}

                />
                <View style={styles.containerTwo}>
                    <TouchableOpacity onPress={handlePrevious}>
                        <Text style={styles.textFour}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRegister}>
                        <Text style={styles.textTwo}>Finish</Text>
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
        color: 'black'
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
        borderRadius: 15
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
    genderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        marginBottom: 20,
        color: 'black'
    },
    picker: {
        width: 370,
        height: 40,
        color: 'black',
        fontSize: 16,
        color: 'black',
        borderWidth: 1,
    },
    inputTwo: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        color: "black"
    }
});