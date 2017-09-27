import React from 'react'
import { connect } from 'react-redux'
import { searchBars } from './../store/actions/actions'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import * as colors from './../styles/colors'

class HomeScreen extends React.Component {
  static navigationOptions () {
    return { title: 'Welcome' }
  }

  constructor (props) {
    super(props)

    this.clickHandler = this.clickHandler.bind(this)

    navigator.geolocation.getCurrentPosition(data => this.state.location = data, error => console.log('GEO ERROR', error))

    this.state = {
      searchString: '',
      location: null
    }

    console.log('CURRENT POSITION: ', this.state.location)
  }

  clickHandler () {
    const { navigation, doSearch } = this.props
    const { searchString, location } = this.state
    doSearch(searchString, location.coords.latitude, location.coords.longitude).then(() => navigation.navigate('Map', { searchString: this.state.searchString }))
  }

  render () {
    console.log('search props', this.state)
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Image source={require('./../assets/images/Beer.png')} style={styles.mainIcon} />
          <Image source={require('./../assets/images/Wine.png')} style={styles.mainIcon} />
          <Image source={require('./../assets/images/Martini.png')} style={styles.mainIcon} />
        </View>

        <Text style={styles.welcome}>Begin Your Adventure</Text>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.searchWrap}>
            <TextInput style={styles.search}
              underlineColorAndroid='transparent'
              placeholder='Search for beer, wine, or cocktail'
              placeholderTextColor='#f7f7f7'
              onChangeText={text => this.setState({ searchString: text })}
              value={this.state.searchString}
            />
          </View>

          <TouchableOpacity
            onPress={this.clickHandler}
            style={{ flex: 1, alignItems: 'center', padding: 5 }}
          >
            <Image source={require('./../assets/images/Search.png')} style={{ height: 30, width: 30, marginTop: -5 }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const STANDARD_VERT_SPACING = 25

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY_PURPLE,
    padding: 20
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15
  },
  mainIcon: {
    height: 80,
    width: 80
  },
  searchWrap: {
    height: 30,
    flex: 5,
    backgroundColor: '#986FBF',
    borderWidth: 0.5,
    borderColor: colors.WHITE,
    borderRadius: 2,
    marginBottom: STANDARD_VERT_SPACING,
    padding: 5,
    paddingLeft: 10
  },
  search: {
    flex: 1, // needed for IOS text to center vertically
    fontSize: 14,
    color: colors.WHITE
  },
  welcome: {
    color: colors.WHITE,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: STANDARD_VERT_SPACING
  },
  instructions: {
    textAlign: 'center',
    color: colors.WHITE,
    marginBottom: 5
  }
})

export default connect(null, dispatch => {
  return {
    doSearch: (text, lat, long) => dispatch(searchBars(text, lat, long))
  }
})(HomeScreen)