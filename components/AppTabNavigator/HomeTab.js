import React, { Component } from 'react'
import { Font } from 'expo'
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native'
import {
  Icon,
  Container,
  Content,
  Thumbnail,
  Header,
  Left,
  Right,
  Body
} from 'native-base'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'

import CardComponent from '../CardComponent'
import { stories, homePosts } from '../../data/mockData'


class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor}) => (
      <FoundationIcon name='home' size={30} style={{ color: tintColor}} />
    )
  }

  state = {
    fontLoaded: false,
  }


  async componentWillMount() {
    await Font.loadAsync({
      'billa-bong': require('../../assets/fonts/Billabong.ttf'),
    })
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <SimpleLineIcon
              name='camera'
              style={{
                paddingLeft: 10,
                fontSize: 25}}
              />
          </Left>
          <Body>
            {this.state.fontLoaded ? (
              <Text style={{
                fontFamily: 'billa-bong',
                fontSize: 25 }}
                >
                Instagram
              </Text>
              ) : (
              <Text style={{ fontWeight: 'bold'}} >Instagram</Text>
            )}
          </Body>
          <Right>
            <Icon
              name='ios-send-outline'
              style={{
                paddingRight: 10,
                fontSize: 40 }}
              />
          </Right>
        </Header>
        <Content>
          <View style={{ height: 100}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 7}}
              >
              <Text style={{ fontWeight: 'bold'}} >Stories</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name='md-play'
                  style={{ fontSize: 14}}/>
                <Text style={{ fontWeight: 'bold'}} > Watch All</Text>
              </View>
            </View>
            <View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5
                }}
                >
                  <View style={{ alignItems: 'center', paddingHorizontal: 5 }} >
                    <Thumbnail
                        source={{ uri: 'https://i.stack.imgur.com/ldGfI.jpg'}}
                        style={{
                          marginHorizontal: 5,
                        }}
                    />
                    <View style={{
                      height: 20,
                      width: 20,
                      marginTop: -18,
                      marginLeft: 36,
                      backgroundColor: 'white',
                      borderRadius: 10,
                      alignItems: 'center',
                      }}>
                      <Icon
                        name='md-add-circle'
                        style={{
                          color: '#0099ff',
                          fontSize: 18 }}
                        />
                    </View>
                      <Text>You</Text>
                  </View>
                  {stories.map((story, index) => {
                    return (
                      <View style={{ alignItems: 'center', paddingHorizontal: 5 }} >
                        <Thumbnail
                          source={{uri: story.avatar}}
                          style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 3 }}
                        />
                        <Text>{story.username}</Text>
                      </View>
                    )
                  })}
              </ScrollView>
            </View>
          </View>
          {homePosts.map((post, index) => {
            return (
              <CardComponent post={post} key={index}/>
            )
          })}
        </Content>
      </Container>
    )
  }
}

export default HomeTab

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
})
