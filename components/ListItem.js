import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'

import * as colors from '../styles/colors'

export default ({ rowData, setSelectedVenue }) => {
  const { name, address, rating, distance } = rowData
  return (
    <TouchableOpacity onPress={() => setSelectedVenue(rowData)}>
      <View style={styles.listItemContainer}>
        <Image source={require('./../assets/images/Beer.png')} style={styles.iconImage} />
        <View style={styles.mainContent}>
          <Text>{name}</Text>
          <Text style={styles.address}>{address}</Text>
          <Text style={styles.trending}>Rating: {rating} / 5</Text>
        </View>
        <View style={styles.travel}>
          <Text style={styles.travelText}>{distance} mi</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItemContainer: {
    padding: 25,
    borderColor: '#777',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    backgroundColor: colors.WHITE
  },
  iconImage: {
    height: 55,
    width: 45,
    marginRight: 15
  },
  address: {
    fontSize: 12,
    marginBottom: 5,
    color: '#777'
  },
  trending: {
    fontSize: 12,
    color: '#777'
  },
  smallIcon: {
    width: 17,
    height: 27,
    marginTop: 3
  },
  mainContent: {
    flex: 1
  },
  travel: {
    alignItems: 'flex-end'
  },
  travelText: {
    color: colors.PRIMARY_PURPLE
  }
})
