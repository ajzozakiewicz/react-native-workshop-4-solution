import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import venueImage from './../assets/images/back-arrow.png'
import * as colors from '../styles/colors'

export default ({ navigate }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={navigate}>
      <Image source={venueImage} style={styles.backbtn} />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY_PURPLE,
    flexDirection: 'row',
    height: 60,
    paddingTop: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999
  },
  backbtn: {
    height: 30,
    width: 30
  }
})
