import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Platform
} from 'react-native'
import { TabNavigator } from 'react-navigation';
import { Icon, Tab } from 'native-base'

import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

class MainScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <AppTabNavigator />
    )
  }
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const AppTabNavigator = TabNavigator({
  HomeTab: {
    screen: HomeTab
  },
  SearchTab: {
    screen: SearchTab
  },
  AddMediaTab: {
    screen: AddMediaTab
  },
  LikesTab: {
    screen: LikesTab
  },
  ProfileTab: {
    screen: ProfileTab
  },
},{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      ...Platform.select({
        android:{
          backgroundColor: 'white'
        }
      })
    },
    activeTintColor: 'black',
    inactiveTintColor: 'grey',
    showLabel: false,
    showIcon: true,
  }
})