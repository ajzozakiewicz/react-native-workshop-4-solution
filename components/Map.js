import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import {NavigationActions} from 'react-navigation'
import MapView, { Marker } from 'react-native-maps'
import ResultsList from './ResultsList'
import VenueDetails from './VenueDetails'
import BackBar from './BackBar'
import { GREEN } from './../styles/colors'

import mockdata from '../mock/mockdata.json'

const backAction = NavigationActions.back()

class Map extends Component {
  static navigationOptions () {
    return { title: 'Results' }
  }

  constructor (props) {
    super(props)
    this.state = {
      selectedVenue: null,
      markers: []
    }

    this.setSelectedVenue = this.setSelectedVenue.bind(this)
    this.closeDetails = this.closeDetails.bind(this)
    this.goHome = this.goHome.bind(this)
  }

  // loads mock data
  componentWillMount () {
    this.setState({ markers: mockdata.results })
  }

  // function to select a venue, pass to map markers and ResultsList
  setSelectedVenue (venue) {
    this.setState({
      selectedVenue: venue
    })
  }

  // clear out selected venue, return to results list
  closeDetails () {
    this.setState({
      selectedVenue: null
    })
  }

  goHome () {
    this.closeDetails()
    this.props.navigation.dispatch(backAction)
  }

  render () {
    console.log('I am connected', this.props.results)
    return (
      <View style={styles.container}>
        <BackBar navigate={this.goHome} />

        <MapView
          style={styles.container}
          initialRegion={{
            latitude: mockdata.origin.latitude,
            longitude: mockdata.origin.longitude,
            latitudeDelta: mockdata.origin.latitudeDelta,
            longitudeDelta: mockdata.origin.longitudeDelta
          }}
        >

          {this.props.results.map((result, i) => {
            // create markers & pass setSelectedVenue function
            return (
              <Marker coordinate={result.coordinate} key={i} onPress={() => this.setSelectedVenue(result)}>
                {this.state.selectedVenue && this.state.selectedVenue.name === result.name ? <View style={styles.markerSelected} /> : <View style={styles.marker} /> }
              </Marker>
            )
          })}

        </MapView>

        { /* check if there's any markers to display, if so generate list of results */}
        { this.props.results.length > 0 && !this.state.selectedVenue &&
          <View style={styles.container}>
            <ResultsList
              setSelectedVenue={this.setSelectedVenue}
              results={this.props.results} />
          </View>
        }

        { /* check details for a specific venue if it has been selected */ }
        { this.state.selectedVenue &&
          <View style={styles.container}>
            <VenueDetails
              venue={this.state.selectedVenue}
              closeDetails={this.closeDetails} />
          </View>
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  marker: {
    backgroundColor: '#550bbc',
    padding: 7,
    borderRadius: 7
  },
  markerSelected: {
    backgroundColor: GREEN,
    padding: 7,
    borderRadius: 7
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  searchContainer: {
    height: 40,
    backgroundColor: '#fff'
  }
})

export default connect(state => {
  return {
    results: state.search.results
  }
})(Map)