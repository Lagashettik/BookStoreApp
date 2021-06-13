import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Checkbox, HelperText, TextInput } from 'react-native-paper';
import { registrationStyleSheet } from '../../styles/authentication/registration.styles';
import { globalThemeConstant, globalColorConstant } from '../../styles/globalStylesheets/globalStyleDataSheet';
import { globalStylesheet } from '../../styles/globalStylesheets/globalStyles.styles';

export default class Registration extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            showFirstNameError: false,
            lastName: '',
            showLastNameError: false,
            mobileNumber: '',
            showMobileNumberError: false,
            emailId: '',
            showEmailIdError: false,
            password: '',
            showPasswordError: false,
            confirmPassword: '',
            showConfirmPasswordError: false,
            showPassword: false
        }
    }

    handleFirstName = async (name) => {
        const regex = new RegExp('^[A-Z]{1}[a-z]{0,}$')
        if (!regex.test(name))
            this.setState({
                firstName: name,
                showFirstNameError: true
            })
        else
            this.setState({
                firstName: name,
                showFirstNameError: false
            })
    }

    handleFirstNameError = () => {
        const regex = new RegExp('^[A-Z]{1}[a-z]{0,}$')
        if (regex.test(this.state.firstName) || this.state.firstName.length == 0)
            this.setState({
                showFirstNameError: false
            })
        else
            this.setState({
                showFirstNameError: true
            })
    }

    handleLastName = (name) => {
        const regex = new RegExp('^[A-Z]{1}[a-z]{0,}$')
        if (!regex.test(name))
            this.setState({
                lastName: name,
                showLastNameError: true
            })
        else
            this.setState({
                lastName: name,
                showLastNameError: false
            })
    }

    handleLastNameError = () => {
        const regex = new RegExp('^[A-Z]{1}[a-z]{0,}$')
        if (regex.test(this.state.lastName) || this.state.lastName.length == 0)
            this.setState({
                showLastNameError: false
            })
        else
            this.setState({
                showLastNameError: true
            })
    }

    handleMobileNumber = (number) => {
        const regex = new RegExp(/^((\+91?)|\+)?[7-9][0-9]{9}$/)
        if (!regex.test(number))
            this.setState({
                mobileNumber: number,
                showMobileNumberError: true
            })
        else
            this.setState({
                mobileNumber: number,
                showMobileNumberError: false
            })
    }

    handleMobileNumberError = () => {
        const regex = new RegExp(/^((\+91?)|\+)?[7-9][0-9]{9}$/)
        if (regex.test(this.state.mobileNumber) || this.state.mobileNumber.length == 0)
            this.setState({
                showMobileNumberError: false
            })
        else
            this.setState({
                showMobileNumberError: true
            })
    }

    handleEmail = (email) => {
        const regex = new RegExp(/^[^\s@]+@[^\s@]+$/)
        if (!regex.test(email))
            this.setState({
                emailId: email,
                showEmailIdError: true
            })
        else
            this.setState({
                emailId: email,
                showEmailIdError: false
            })
    }

    handleEmailError = () => {
        const regex = new RegExp(/^[^\s@]+@[^\s@]+$/)
        if (!regex.test(this.state.emailId) || this.state.emailId.length == 0)
            this.setState({
                showEmailIdError: true
            })
        else
            this.setState({
                showEmailIdError: false
            })
    }

    handlePassword = (password) => {
        if (password.length >= 8)
            this.setState({
                password: password,
                showPasswordError: false
            })
        else
            this.setState({
                password: password
            })

    }

    handlePasswordError = () => {

        if (this.state.password.length < 8)
            this.setState({
                showPasswordError: true
            })
        else
            this.setState({
                showPasswordError: false
            })
    }

    handleConfirmPassword = (password) => {
        if (this.state.password.includes(password))
            this.setState({
                showConfirmPasswordError: false
            })

        this.setState({
            confirmPassword: password
        })
    }

    handleConfirmPasswodError = () => {
        if (this.state.password === this.state.confirmPassword)
            this.setState({
                showConfirmPasswordError: false
            })
        else
            this.setState({
                showConfirmPasswordError: true
            })
    }

    signUp = async () => {
        if (await !this.checkAllErrors())
            console.log('logged In')
        else console.log('not logged in')
    }

    checkAllErrors = () => this.state.showFirstNameError && this.state.showLastNameError
        && this.state.showEmailIdError && this.state.showPasswordError && this.state.showConfirmPasswordError

    render() {
        return (
            <View style={registrationStyleSheet.parent_view}>
                <Text style={{ margin: '10%', fontSize: 40 }}>Create Account</Text>
                <View style={{ height: '80%', width: '100%' }}>
                    <View style={{ height: '10%', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={registrationStyleSheet.text_input_name}>
                            <TextInput
                                mode='outlined' placeholder='Firstname'
                                style={globalStylesheet.text_input} theme={globalThemeConstant.TextInputTheme}
                                value={this.state.firstName} onChangeText={this.handleFirstName}
                                onEndEditing={this.handleFirstNameError}
                            />
                            <HelperText type='error' style={{ fontSize: 15 }} visible={this.state.showFirstNameError} >
                                Enter letters only and first letter is in capital</HelperText>
                        </View>
                        <View style={registrationStyleSheet.text_input_name}>
                            <TextInput
                                mode='outlined' placeholder='Lastname'
                                style={globalStylesheet.text_input} theme={globalThemeConstant.TextInputTheme}
                                value={this.state.lastName} onChangeText={this.handleLastName}
                                onEndEditing={this.handleLastNameError}
                            />
                            <HelperText type='error' style={{ fontSize: 15 }} visible={this.state.showLastNameError}>
                                Enter letters only and first letter is in capital</HelperText>
                        </View>
                    </View>
                    <View style={{ ...registrationStyleSheet.text_input, marginTop: '15%', height: '10%' }}>
                        <TextInput
                            mode='outlined' placeholder='Mobile number'
                            style={globalStylesheet.text_input} theme={globalThemeConstant.TextInputTheme}
                            value={this.state.mobileNumber}
                            onChangeText={this.handleMobileNumber} onEndEditing={this.handleMobileNumberError}
                        />
                        <HelperText type='error' style={{ fontSize: 15 }} visible={this.state.showMobileNumberError} >
                            Enter Numbers only lenght is 10</HelperText>
                    </View>
                    <View style={registrationStyleSheet.text_input}>
                        <TextInput
                            mode='outlined' placeholder='Email'
                            style={globalStylesheet.text_input} theme={globalThemeConstant.TextInputTheme}
                            value={this.state.emailId} onChangeText={this.handleEmail}
                            onEndEditing={this.handleEmailError}
                        />
                        <HelperText type='error' style={{ fontSize: 15 }} visible={this.state.showEmailIdError} >
                            Enter correct Email id</HelperText>
                    </View>

                    <View style={registrationStyleSheet.text_input}>
                        <TextInput
                            mode='outlined' placeholder='Password'
                            style={globalStylesheet.text_input} theme={globalThemeConstant.TextInputTheme}
                            value={this.state.password} onChangeText={this.handlePassword}
                            onEndEditing={this.handlePasswordError}
                        />
                        <HelperText type='error' style={{ fontSize: 15 }} visible={this.state.showPasswordError} >
                            password contain minimum 8 characters</HelperText>
                    </View>

                    <View style={registrationStyleSheet.text_input}>
                        <TextInput
                            mode='outlined' placeholder='Confirm Password'
                            style={globalStylesheet.text_input} theme={globalThemeConstant.TextInputTheme}
                            value={this.state.confirmPassword}
                            secureTextEntry={!this.state.showPassword}
                            onChangeText={this.handleConfirmPassword}
                            onEndEditing={this.handleConfirmPasswodError}
                        />
                        <HelperText type='error' style={{ fontSize: 15 }} visible={this.state.showConfirmPasswordError} >
                            Password not match</HelperText>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                        <Checkbox
                            status={this.state.showPassword ? 'checked' : 'unchecked'}
                            onPress={() => this.setState({ showPassword: !this.state.showPassword })}
                            color={globalColorConstant.PARENTCOLOR}
                        />
                        <Text >Show Password</Text>
                    </View>
                    <Button mode='contained' style={{ backgroundColor: globalColorConstant.PARENTCOLOR, marginTop: '5%' }}
                        onPress={this.signUp} >SignUp</Button>
                    <Text style={{ alignSelf: 'center', marginTop: '10%' }}>
                        Don't have an account?
                        <Text style={{ color: globalColorConstant.PARENTCOLOR, fontSize: 17 }} > Sign In</Text>
                    </Text>
                </View>
            </View>
        )
    }
}