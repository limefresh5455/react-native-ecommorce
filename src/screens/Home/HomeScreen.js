import React from 'react';
import {
  FlatList,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import MenuImage from '../../components/MenuImage/MenuImage';
import styles from './styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: () =>
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
  });
  constructor(props) {

    super(props);
    this.state = {
      categories: []
    }
  }

  getData(categories) {
    this.setState({
      categories: categories
    })
  }

  componentDidMount() {
    // fetch("http://testdeployment-env.eba-eqdcmu3a.us-east-2.elasticbeanstalk.com/api/search/getCategories")
    //   .then(response => response.json())
    //   .then((categories) => this.getData(categories))
    //   .catch(err => console.log(err));
    const categories = [
          {
            id: '1',
            items: 'Item 1',
          },
          {
            id: '2',
            items: 'Item 2',
          },
          {
            id: '3',
            items: 'Item 3',
          },
          {
            id: '4',
            items: 'Item 4',
          },
          {
            id: '5',
            items: 'Item 5',
          },
          {
            id: '6',
            items: 'Item 6',
          },
          {
            id: '7',
            items: 'Item 7',
          },
          {
            id: '8',
            items: 'Item 8',
          },
          {
            id: '9',
            items: 'Item 9',
          },
        ];
      this.getData(categories);
  }


  render() {
    const { navigate } = this.props.navigation;
    // var fromCart = this.props.route.params.fromCart;
    var fromCart = "";
    if(fromCart == true){
      navigate('Cart');
    }
    const renderMenuItem = (item) => {
      return (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'
          onPress={() => navigate('ItemsList', { itemType: item.item.items })}>
          <View style={styles.container}>
            <Image style={styles.photo} source={require('../../image.png')} />
            <Text style={styles.title}>{item.item.items}</Text>
          </View>
        </TouchableHighlight>
      )
    };
    const data = this.state.categories;
    if (data != undefined)
      return (
        <SafeAreaView>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={2}
            renderItem={renderMenuItem}
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

