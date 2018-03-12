import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Button
 } from 'native-base'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'

import CardComponent from '../CardComponent'
import { profilePosts } from '../../data/mockData'

let { width, height } = Dimensions.get('window')

class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor}) => (
      <MaterialCommunityIcon name='account' size={30} style={{ color: tintColor }} />
    )
  }

  constructor(props) {
    super(props) 
    this.state = {
      activeIndex: 0
    }
  }

  segmentClicked = (index) => {
    this.setState({
      activeIndex: index
    })
  }

  renderSectionOne = () => {
    return profilePosts.map((post, index) => {
      return (
        <View
          key={index}
          style={[
            { width: (width) / 3 }, {height: (width) / 3 },
            { marginBottom: 2 },
            index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 },
          ]} >
            <Image
              source={{uri: post.image}}
              style={{
                flex: 1,
                width: undefined,
                height: undefined
              }} />
        </View>
      )
    })
  }

  renderSection = () => {
    if (this.state.activeIndex == 0) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
          {this.renderSectionOne()}
        </View>
      )
    }
    else if (this.state.activeIndex == 1) {
      return (
        <View>
          {profilePosts.map((post, index) => {
            return (
              <CardComponent post={post} key={index} />
            )
          })}
        </View>
      )
    }
  }

  render() {
    return (
      <Container style={{flex: 1, backgroundColor:'white'}} >
        <Header>
          <Left style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{ fontWeight: 'bold', fontSize: 18}}>sirjmkitavi </Text>
            <Icon
              name='md-arrow-dropdown'
              style={{
                fontSize: 18,
                marginLeft: 2,
                marginTop: 2}} />
          </Left>
          <Right>
              <EntypoIcon
                name='back-in-time'
                style={{ fontSize: 22, paddingHorizontal: 7 }}/>
              <Icon 
                name='md-person-add'
                style={{ fontSize: 22, paddingHorizontal: 7 }} />
              <SimpleLineIcon
                name='options-vertical'
                style={{ fontSize: 22, paddingLeft: 4}} />
          </Right>
        </Header>
        <Content>
          <View style={{ paddingTop: 10}} >
            <View style={{ flexDirection: 'row'}} >
              <View style={{ flex: 1, alignItems: 'center' }} >
                <Image
                  source= {{uri: 'https://i.stack.imgur.com/ldGfI.jpg'}}
                  style={{ width: 76, height: 76, borderRadius: 38}} />
                <View style={{
                    height: 25,
                    width: 25,
                    marginTop: -20,
                    marginLeft: 53,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    alignItems: 'center',
                  }}>
                    <Icon
                      name='md-add-circle'
                      style={{
                        color: '#0099ff',
                        fontSize: 22 }}
                      />
                  </View>
              </View>
              <View style={{ flex: 3}} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}} >
                    <View style={{ alignItems: 'center'}} >
                      <Text style={{ fontWeight: 'bold'}} > 7 </Text>
                      <Text style={{ fontSize: 12, color: 'grey'}} >posts</Text>
                    </View>
                    <View style={{ alignItems: 'center' }} >
                      <Text style={{ fontWeight: 'bold'}} >1900</Text>
                      <Text style={{ fontSize: 12, color: 'grey'}} >followers</Text>
                    </View>
                    <View style={{ alignItems: 'center' }} >
                      <Text style={{ fontWeight: 'bold'}} >1864</Text>
                      <Text style={{ fontSize: 12, color: 'grey'}} >following</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 10}} >
                  <Button
                    bordered
                    dark
                    style={{
                      flex: 4,
                      marginLeft: 12,
                      marginRight: 10,
                      justifyContent: 'center',
                      height: 25}} >
                    <Text>Edit Profile</Text>
                  </Button>
                </View>
              </View>
            </View>
            <View style={{ paddingVertical: 10, paddingHorizontal: 10 }} >
              <Text style={{ fontWeight: 'bold', paddingVertical: 1.5 }} > Joseph Kitavi</Text>
              <Text style={{ paddingVertical: 1.5 }} > Andela | Programmer | Chess | GOD</Text>
              <Text style={{ paddingVertical: 1.5 }} > www.sirjmkitavi.ml/gui</Text>
            </View>
          </View>
          <View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              borderTopWidth: 1,
              borderTopColor: '#eae5e5'}} >
            <Button
              transparent
              onPress={() => this.segmentClicked(0)}
              active={this.state.activeIndex == 0}
              >
                <Icon
                  name='ios-apps-outline'
                  style={[this.state.activeIndex == 0 ? {} : { color: 'grey'}]}
                  />
             </Button>
             <Button
              transparent
              onPress={() => this.segmentClicked(1)}
              active={this.state.activeIndex == 1}
              >
                <Icon
                  name='ios-list-outline'
                  style={[this.state.activeIndex == 1 ? {} : { color: 'grey'}]}/>
             </Button>
             <Button
              transparent
              onPress={() => this.segmentClicked(2)}
              active={this.state.activeIndex == 2}
              >
                <Icon
                  name='ios-people-outline'
                  style={[this.state.activeIndex == 2 ? {} : { color: 'grey'}]}/>
             </Button>
             <Button
              transparent
              onPress={() => this.segmentClicked(3)}
              active={this.state.activeIndex == 3}
              >
                <Icon
                  name='ios-bookmark-outline'
                  style={[this.state.activeIndex == 3 ? {} : { color: 'grey'}]}/>
             </Button>
            </View>
            {this.renderSection()}
          </View>
        </Content>
      </Container>
    )
  }
}

export default ProfileTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
