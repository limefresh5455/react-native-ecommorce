import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  SafeAreaView
} from 'react-native';
import styles from './styles';

export default class ItemsListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "test"
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      itemlist: [],
      render: true
    }
  }
  getData(itemlist) {
    this.setState({
      itemlist: itemlist,
      render: true
    })
  }

  componentDidMount() {
    const itemType = "test";
    // fetch("http://testdeployment-env.eba-eqdcmu3a.us-east-2.elasticbeanstalk.com/api/search/category/" + itemType)
    //   .then(response => response.json())
    //   .then((itemlist) => this.getData(itemlist))
    //   .catch(err => console.log(err));
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
        this.getData(itemlist);
  }

  onPressItem = item => {
    this.props.navigation.navigate('ItemDetails', { item: item });
  };

  renderMenuItem = ({ item }) => {
    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressItem(item)}
      >
        <View style={styles.container}>
          <Image style={styles.photo} source={item.imageLink } />
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </TouchableHighlight>
    )
  };

  render() {

    const { navigation } = this.props;
    const data = this.state.itemlist;
    if (data != undefined)
      return (
        <SafeAreaView>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={this.renderMenuItem}
            numColumns={2}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );
    else
      return (
        <View>
          <Text>Check Your Network</Text>
        </View>
      )
  }
}
