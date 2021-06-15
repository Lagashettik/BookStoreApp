import React, { Component } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { globalStylesheet } from '../../styles/globalStylesheets/globalStyles.styles';
import DataServices from '../../../services/dataServices';

export default class DisplayBooks extends Component {
    constructor() {
        super()
        this.state = {
            booksData: {
                "_53e12xifqr2": {
                    "name": "Murder in mountain hut",
                    "author": "Jhon Baker",
                    "image_url": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/murder-mystery-book-cover-design-template-2a1a3ff53d7a9d851046c5e1fdf3943f.jpg?ts=1588152105",
                    "price": ""
                },
                "_alrkljxytqs": {
                    "name": "made to Impress",
                    "author": "Andrew Cris",
                    "image_url": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/minimalist-non-fiction-ebook-kindle-cover-design-template-51107efc8d0ae33d3ec041fd7d991a10.jpg?ts=1599554504",
                    "price": "2000"
                },
                "_z3hpger56kd": {
                    "name": "The Arrivals",
                    "author": "Lucas Lloyd",
                    "image_url": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sci-fi-book-cover-template-a1ec26573b7a71617c38ffc6e356eef9.jpg?ts=1561547637",
                    "price": "2500"
                },
                "_wzybue3inj": {
                    "name": "Nora Barrett",
                    "author": "International Bestselling Author",
                    "image_url": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105",
                    "price": "1500"
                },
                "_48g7ircxruz": {
                    "name": "The Invasion Of The Zombie Aliens",
                    "author": "Jimmie Collins",
                    "image_url": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sci-fi-kindle-book-cover-design-template-bd12cf83a9f9d72327e372c5db1d2883.jpg?ts=1561443942",
                    "price": "3600"
                },
                "_i61193pddup": {
                    "name": "King Arthur",
                    "author": "Arnold Qurry",
                    "image_url": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medieval-fantasy-wattpad-cover-design-template-fb3bc31853ee33845878b1bbd8f5b3b0.jpg?ts=1584437336",
                    "price": "2430"
                },
                "_5w0m95m4mxw": {
                    "name": "Title",
                    "author": "Author",
                    "image_url": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sci-fi-book-cover-design-template-1228782f5c7a62cc45b1fd882c2b7cbc.jpg?ts=1598008864",
                    "price": "1000"
                }
            }
        }
    }


    componentDidMount() {
        new DataServices().getAllBooks().then(books => this.setState({ booksData: books }))
    }

    buyBook = () => {
        
    }


    render() {
        return (
            <ScrollView style={{ ...globalStylesheet.parent_conatainer_view, padding: '3%' }}>
                {
                    Object.getOwnPropertyNames(this.state.booksData).map(book => {
                        return (
                            <Card style={{ marginTop: '1%', width: '100%', height: '25%' }} key={book}>
                                <View style={{ width: '100%', height: '100%', flexDirection: 'row', flexWrap: 'wrap' }} >
                                    <View style={{ width: '30%', height: '100%', padding: '1%' }} >
                                        <Image source={{ uri: this.state.booksData[book].image_url }}
                                            style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <View style={{ width: '70%', height: '100%' }}>
                                        <Card.Title title={this.state.booksData[book].name} subtitle={this.state.booksData[book].author}
                                            style={{ width: '100%', height: '60%' }} />
                                        <Text style={{ marginLeft: '5%', height: '20%', fontSize: 20 }}>Rs.{this.state.booksData[book].price}</Text>
                                        <View style={{ width: '90%', marginLeft: '5%', marginTop: '1%', height: '20%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Button mode='contained' style={{ width: '50%', height: '80%', justifyContent: 'center' }}
                                                onPress={this.buyBook} >Buy</Button>
                                            <Button mode='outlined' style={{ width: '48%', height: '80%', justifyContent: 'center' }}
                                                onPress={this.wishListBook} >Wishlist</Button>
                                        </View>
                                    </View>
                                </View>
                            </Card>
                        )
                    })
                }
            </ScrollView>
        )
    }
}