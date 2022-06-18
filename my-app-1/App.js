import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, ImageBackground, Button, Alert } from 'react-native';
 
export default function App() {
    const [userName, setUserName] = useState('')
    const [userBirth, setUserBirth] = useState('')
    const [submit, setSubmit] = useState(false)
 
    const onPressHandler = () => {
        if (userName.length < 3 || userBirth.length<=3) {
            Alert.alert('Warning!', 'Imię lub rok musi zawierać minimum 3 znaki!', [
                { text: 'OK' }
            ], { cancelable: true })
        } else {
            setSubmit(!submit)
        }
    }
 
    return (
        <ImageBackground style={styles.container}
                source={require("./assets/images/pawel-czerwinski-vI5XwPbGvmY-unsplash.jpg")}
        >
            <View>
                <Text style={styles.header}>My application #1</Text>
            </View>
 
 
            <View style={styles.inputBody}>
                <TextInput
                    style={styles.input}
                    placeholder='write name'
                    value={userName}
                    onChangeText={(value) => setUserName(value)}
                />
                 <TextInput
                    style={styles.input}
                    placeholder='write year of birth'
                    value={userBirth}
                    onChangeText={(value) => setUserBirth(value)}
                />
                <Button
                    title={submit ? "Clear" : "Submit"}
                    onPress={onPressHandler}
                />

                {
                    submit ? <Text style={styles.bodyText}>Witaj {userName}, jest {new Date().getFullYear() - userBirth}</Text> : null
                }
            </View>
 
            <View>
                <Text style={styles.footer}>Created by Tatsian Lyzo</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#ecf0f1',
        padding: 0,
        margin: 0,
    },
    header: {
        width: '100%',
        textAlign: 'center',
        fontSize: 45,
        backgroundColor: ''
    },
    inputBody: {
      alignItems: 'center',
        alignSelf: 'center',
    },
    bodyText: {
        textAlign: 'center',
        fontSize: 25,
        backgroundColor: 'rgba(0,0,0,.5)',
        marginTop: 10,
        color: 'white',
    },
    input: {
        width: 200,
        backgroundColor: '#000',
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
        color: '#fff',
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    },
    footer: {
        fontSize: 15,
        color: '#ddd',
        textAlign: 'center',
        backgroundColor: '#676868'
    }
});
