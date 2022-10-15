import React from 'react';
import { Text, View, ScrollView, FlatList, TouchableHighlight, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './styles';


export default function SearchScreen(props) {
    const onPressItem = item => {
        props.navigation.navigate('ItemDetails', { item: item });
    };

    const renderMenuItem = ({ item }) => {
        return (
            <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => onPressItem(item)}
            >
                <View style={styles.container}>
                    <Image style={styles.photo} source={item.imageLink} />
                    <Text style={styles.title}>{item.name}</Text>
                </View>
            </TouchableHighlight>
        )
    };

    const [search, setSearch] = React.useState(" ");
    const [itemlist, setItemlist] = React.useState("");
    const updateSearch = (search) => {
        // search = search.toLowerCase()
        setSearch(search);
        // fetch("http://testdeployment-env.eba-eqdcmu3a.us-east-2.elasticbeanstalk.com/api/search/text/" + search.toLowerCase(), {
        //     header: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        // })
        //     .then(response => response.json())
        //     .then((item) => setItemlist(item))
        //     .catch(err => console.log(err));
        const itemlist = [
          {
            id: 1,
            name: 'Product 1',
            imageLink: require('../../image.png'),
            price: 10
          },
          {
            id: 2,
            name: 'Product 2',
            imageLink: require('../../image.png'),
            price: 20
          },
          {
            id: 3,
            name: 'Product 3',
            imageLink: require('../../image.png'),
            price: 15
          },
          {
            id: 4,
            name: 'Product 4',
            imageLink: require('../../image.png'),
            price: 50
          },
          {
            id: 5,
            name: 'Product 5',
            imageLink: require('../../image.png'),
            price: 5
          },
          {
            id: 6,
            name: 'Product 6',
            imageLink: require('../../image.png'),
            price: 100
          },
          {
            id: 7,
            name: 'Product 7',
            imageLink: require('../../image.png'),
            price: 25
          },
          {
            id: 8,
            name: 'Product 8',
            imageLink: require('../../image.png'),
            price: 60
          },
          {
            id: 9,
            name: 'Product 9',
            imageLink: require('../../image.png'),
            price: 10
          },
        ];
        setItemlist(itemlist)
    };
    if (itemlist)
        return (
            <View>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={updateSearch}
                    value={search}
                />
                <ScrollView>
                    <FlatList
                        vertical
                        showsVerticalScrollIndicator={false}
                        data={itemlist}
                        renderItem={renderMenuItem}
                        numColumns={2}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
            </View>
        )
    else return (
        <View style={styles}>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={search}
            />
        </View>
    );
}
