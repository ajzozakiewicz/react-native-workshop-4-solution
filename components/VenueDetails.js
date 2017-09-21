import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Button, ScrollView } from 'react-native'
import venueImage from './../assets/images/venue-image.png'
import * as colors from '../styles/colors'

export default ({ venue, closeDetails }) => (
  <ScrollView style={styles.mainContainer}>
    <Button
      title='Close'
      onPress={closeDetails}
      color={colors.PRIMARY_PURPLE} />

    <View style={styles.headingContainer}>
      <View style={styles.headingRow}>
        <View>
          <Image source={require('./../assets/images/Beer.png')} style={styles.iconImage} />
        </View>

        <View style={styles.headerMain}>
          <Text>{venue.name}</Text>
          <Text style={styles.venueAddress}>{venue.address}</Text>
        </View>

        <TouchableOpacity>
          <View style={styles.directionsBtn}>
            <Text style={styles.directionsText}>Directions</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.tagLine}>{venue.tagLine}</Text>
      </View>
    </View>

    <Image source={venueImage} />
  </ScrollView>
)

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.WHITE
  },
  headingContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 25
  },
  headingRow: {
    flexDirection: 'row',
    marginBottom: 10
  },
  headerMain: {
    flex: 1
  },
  iconImage: {
    height: 50,
    width: 40,
    marginRight: 15
  },
  venueAddress: {
    fontSize: 12,
    marginBottom: 5,
    color: '#777'
  },
  directionsBtn: {
    backgroundColor: colors.GREEN,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 15,
    alignSelf: 'center' // otherwise, 100% width
  },
  directionsText: {
    color: colors.WHITE
  },
  tagLine: {
    color: '#666',
    fontSize: 12
  }
})
