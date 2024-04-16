import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker'; 

export default function RegisterFour({ navigation, }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleRegister = () => {
        navigation.navigate('RegisterFive')
    };

    const handlePrevious = () => {
        navigation.navigate('RegisterThree')
    };

    
  const handleFileSelection = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the document picker
        console.log('User cancelled the document picker');
      } else {
        // Error occurred while picking the document
        console.error('Error occurred while picking the document:', err);
      }
    }
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
                <Text style={styles.textThree}>STEP 4/5</Text>
                <Text style={styles.label}>Resident Permit/Passport/UK Birth Certificate(only jpg,png,jpeg,pdf)</Text>
                  <TouchableOpacity style={styles.fileInput} onPress={handleFileSelection}>
        <Text style={styles.fileInputText}>
          {selectedFile ? selectedFile.name : 'Choose file'}
        </Text>
      </TouchableOpacity>
                <Text style={styles.label}>Selfie/Picture(only jpg,png,jpeg,pdf)</Text>
                <TouchableOpacity style={styles.fileInput} onPress={handleFileSelection}>
        <Text style={styles.fileInputText}>
          {selectedFile ? selectedFile.name : 'Choose file'}
        </Text>
      </TouchableOpacity>
                <Text style={styles.label}>Driving Licence/Proof of ID(only jpg,png,jpeg,pdf)</Text>
                <TouchableOpacity style={styles.fileInput} onPress={handleFileSelection}>
        <Text style={styles.fileInputText}>
          {selectedFile ? selectedFile.name : 'Choose file'}
        </Text>
      </TouchableOpacity>
                <Text style={styles.label}>Upload your CV(only jpg,png,jpeg,pdf)</Text>
                <TouchableOpacity style={styles.fileInput} onPress={handleFileSelection}>
        <Text style={styles.fileInputText}>
          {selectedFile ? selectedFile.name : 'Choose file'}
        </Text>
      </TouchableOpacity>

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
    fileInput: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        width:'100%',
        marginBottom: 20,
      },
      fileInputText: {
        fontSize: 16,
        color:'black',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#D6E9C6',
        width:150,
        height:30,
        textAlign:"center",
        backgroundColor:'#DFF0D8'
      },
});
