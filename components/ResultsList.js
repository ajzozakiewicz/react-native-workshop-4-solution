import React, { Component } from 'react'
import { ListView } from 'react-native'
import ListItem from './ListItem'

class ResultsList extends Component {
  constructor (props) {
    super(props)

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(this.props.results)
    }
  }

  renderRow (rowData) {
    return (
      <ListItem
        setSelectedVenue={this.props.setSelectedVenue}
        rowData={rowData} />
    )
  }

  render () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={rowData => this.renderRow(rowData)} />
    )
  }
}

export default ResultsList
