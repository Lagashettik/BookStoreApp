import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { signInStyles } from '../../styles/authentication/signIn.styles';
import { Button, Text, TextInput } from 'react-native-paper'
import { globalThemeConstant } from '../../styles/globalStylesheets/globalStyleDataSheet';

export default class SignIn extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    fetchDataFromJson = () => {
        fetch('http://192.168.43.165:8081/posts/')
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log(response));
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

    handleSignIn = () =>{
        console.log('signed in')
    }

    render() {
        return (
            <View style={signInStyles.parent_view}>
                <View style={signInStyles.image_title_view} >
                    <Image source={require('../../assets/BookStoreApp_Logo.png')} style={signInStyles.image_view} ></Image>
                    <Text style={signInStyles.title_style} >Bookstore</Text>
                </View>
                <View style={signInStyles.child_view}>
                    <TextInput placeholder='Email'
                        value={this.state.email}
                        onChangeText={this.handleEmail}
                        mode='outlined' style={signInStyles.text_input}
                        theme={globalThemeConstant.textInputTheme}
                    />
                    <TextInput placeholder='Password'
                        value={this.state.password}
                        onChangeText={this.handlePassword}
                        mode='outlined' style={signInStyles.text_input}
                        theme={globalThemeConstant.textInputTheme}
                    />
                    <Button mode='contained' style={signInStyles.signIn_button} onPress={this.handleSignIn} >SignIn</Button>
                    <Text style={{ alignSelf: 'center', marginTop: '10%' }} onPress={() => console.log('Pressed')}>Forgot Password?</Text>
                    
                </View>
            </View>
        )
    }
}