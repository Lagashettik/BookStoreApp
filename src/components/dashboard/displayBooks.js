import React, { Component } from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-paper';
import { globalStylesheet } from '../../styles/globalStylesheets/globalStyles.styles';

export default class DisplayBooks extends Component {
    constructor(){
        super()
        this.state = {
        }
    }

    render(){
        return(
            <View style={globalStylesheet.parent_conatainer_view}>
                <Card style={{marginTop:'5%',width:'100%',height:'10%'}}>
                    <Card.Title title='Book name' subtitle='Rate' />
                </Card>
            </View>
        )
    }
}