import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper'
import { dashboard } from '../../styles/dashboard/dashboard.styles';
import { globalColorConstant } from '../../styles/globalStylesheets/globalStyleDataSheet';
import DisplayBooks from './displayBooks';

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            searchOn: false,
            searchWord: ''
        }
    }

    searchOnOff = () => {
        this.setState({
            searchOn: !this.state.searchOn
        })
    }

    handleSearchWord = (searchWord) => this.setState({ searchWord: searchWord })

    render() {
        return (
            <View style={dashboard.parent_conatiner_view} >
                <Appbar
                    style={{ justifyContent: 'space-between' }}
                    theme={{ colors: { primary: globalColorConstant.PARENTCOLOR } }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Appbar.Action icon={require('../../assets/BookStoreApp_Logo.png')} size={25} color='white' />
                        <Text style={{ fontSize: 25, color: 'white' }} >Bookstore</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Appbar.Action icon={this.state.searchOn ? 'close' : 'magnify'} size={25} color='white' onPress={this.searchOnOff} />
                        <Appbar.Action icon='cart-outline' size={25} color='white' />
                    </View>
                </Appbar>
                {
                    this.state.searchOn && <Searchbar placeholder='Search'
                        onChangeText={this.handleSearchWord} value={this.state.searchWord}
                        theme={{
                            colors:{primary:globalColorConstant.PARENTCOLOR}
                        }}
                        iconColor={globalColorConstant.PARENTCOLOR}
                    />
                }

                <DisplayBooks />
            </View>
        )
    }
}