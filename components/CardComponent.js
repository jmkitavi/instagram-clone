import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'

import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
} from 'native-base'

const { width } = Dimensions.get('window')

class CardComponent extends Component {
  render() {
    return (
      <Card style={{ width: width + 10}}>
        <CardItem>
          <Left>
            <Thumbnail
              small
              source={{uri: this.props.post.avatar}}/>
            <Body>
              <Text style={{ fontWeight: 'bold'}} > {this.props.post.name}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem style={{flex: 1, height: 300, width: width + 30, marginLeft: -18 }}>
          <Image
            source={{uri: this.props.post.image}}
            style={{ height: '100%', flex: 1}}/>
        </CardItem>
        <CardItem style={{ height: 50, justifyContent: 'space-around' }}>
          <Left>
            <Button transparent>
              <Icon
                name='ios-heart-outline'
                style={{ color: 'black'}}
              />
            </Button>
            <Button transparent>
              <Icon
                name='ios-chatbubbles-outline'
                style={{ color: 'black'}}
              />
            </Button>
            <Button transparent>
            <Icon
              name='ios-send-outline'
              style={{ color: 'black'}}
            />
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Icon
                name='ios-bookmark-outline'
                style={{ color: 'black'}}/>
            </Button>
          </Right>
        </CardItem>
        <CardItem style={{ height: 20}}>
          <Text>{this.props.post.likes} likes</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: '900'}}> {this.props.post.name} </Text>
              Hello, I'm sirjmkitavi and this is my space.
              I am a developer, cyber security enthusiast and trying to be a writer.
              I like building and breaking stuff.
              Watch this space for more on what I love and my escapades in this amazing world of tech. Enjoy!
            </Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}

export default CardComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
