import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { signInStyles } from '../../styles/authentication/signIn.styles';
import { Button, Text, TextInput } from 'react-native-paper'
import { globalThemeConstant, globalColorConstant } from '../../styles/globalStylesheets/globalStyleDataSheet';

export default class SignIn extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    fetchDataFromJson = () => {
        console.log('function called')
        // fetch('http://192.168.43.165:8000/adds')
        //     .then(response => {
        //         console.log('inside then')
        //         response.json()})
        //     .then(response => console.log("response : "+response))
        //     .catch(error => console.error('Error:', error))

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "id": 6,
                "title": "test server",
                "author": "server"
            })
        };
        fetch('http://10.0.2.2:8000/users/', requestOptions)
            // .then(response => response.json())
            .then(data => console.log("data : ", data))
            .catch(error => console.log(error))
    }

    handleEmail = (email) => {
        const regex = new RegExp('^[A-Za-z0-9@.]{0,}$')
        if (!regex.test(email)) {
            this.setState({
                email: ''
            })
        }
        else {
            this.setState({
                email: email
            })
        }
    }

    handlePassword = (password) => {
        const regex = new RegExp('^[A-Za-z0-9@]{0,}$')
        if (!regex.test(password)) {
            this.setState({
                password: ''
            })
        }
        else {
            this.setState({
                password: password
            })
        }
    }

    handleSignIn = () => {
        console.log('signed in')
    }

    render() {
        return (
            <View style={signInStyles.parent_view}>
                <View style={signInStyles.image_title_view} >
                    <Image source={require('../../assets/BookStoreApp_Logo.png')} style={signInStyles.image_view} />
                    <Text style={signInStyles.title_style} >Bookstore</Text>
                </View>
                <View style={signInStyles.child_view}>
                    <TextInput placeholder='Email'
                        value={this.state.email}
                        onChangeText={this.handleEmail}
                        mode='outlined' style={signInStyles.text_input}
                        theme={globalThemeConstant.TextInputTheme}
                    />
                    <TextInput placeholder='Password'
                        value={this.state.password}
                        onChangeText={this.handlePassword}
                        mode='outlined' style={signInStyles.text_input}
                        theme={globalThemeConstant.TextInputTheme}
                    />
                    <Button mode='contained' style={signInStyles.signIn_button} onPress={this.fetchDataFromJson} >SignIn</Button>
                    <Text style={{ alignSelf: 'center', marginTop: '10%' }} onPress={() => console.log('Pressed')}>Forgot Password?</Text>
                    <Button icon='facebook' mode='outlined'
                     style={{ marginTop: '10%' }}
                     theme={{
                         colors:{
                             text:'#4267B2'
                         }
                     }}
                      onPress={() => console.log('facebook')} > Sign in with Facebook</Button>
                    <Text style={{ alignSelf: 'center', marginTop: '10%' }}>
                        Don't have an account?
                        <Text style={{ color: globalColorConstant.PARENTCOLOR, fontSize: 17 }} > Create One</Text>
                    </Text>
                </View>
            </View>
        )
    }
}