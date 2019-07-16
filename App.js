import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, ListItem, Header, Text, Avatar, Image, Button } from 'react-native-elements';

const users = [
  {
     name: '굽네 치킨',
     avatar: 'https://www.giftishow.com/Resource/goods/G00000330749/G00000330749.jpg',
     expiry: '2019.08.09'
  },
  {
    name: 'BR 패밀리',
    avatar: 'https://www.giftishow.com/Resource/goods/G00000183280/G00000183280.jpg',
    expiry: '2019.011.21'
 },
 {
  name: '스타벅스',
  avatar: 'https://www.giftishow.com/Resource/goods/G00000008061/G00000008061.jpg',
  expiry: '2020.01.09'
}
]

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        backgroundColor='#fff'
        leftComponent={{ icon: 'chevron-left' }}
        centerComponent={{ text: 'Version' }}
        rightComponent={{ icon: 'coin', type: 'material-community' }}
      />
      <View style={[styles.box1]}>
        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Avatar
              rounded
              size='large'
              source={{
                uri:
                  'https://cdn0.iconfinder.com/data/icons/smile-emoticons/78/smyle_emoticons-03-512.png',
              }}
            />
          </View>
          <View style={styles.info}>
            <Text h3 style={{ color: '#fff' }}>투데이치킨</Text>
            <View style={styles.iconText}>
              <Image style={{ width: 45, height: 45 }}
                source={{ uri: 'https://cdn0.iconfinder.com/data/icons/cash-card-starters-colored/48/JD-02-512.png' }} />
              <Text style={{ color: '#fff' }}>1000 포인트</Text>
            </View>
            <Text style={{ color: '#fff' }}>1개 쿠폰 보유중</Text>
          </View>
        </View>
      </View>
      <View style={[styles.box2]}>
        <ScrollView>
          <Card containerStyle={{borderWidth: 0, elevation: 0 }} >
            {
              users.map((u, i) => {
                return (
                  <ListItem 
                  key={i}
                  title={
                    <View>
                      <Text h4>{u.name}</Text>
                      <Text>{u.expiry}</Text>
                      <Button buttonStyle={{ padding: 5, backgroundColor: '#F6AE2D'}} titleStyle={{fontSize: 10}} title='바코드' />
                    </View>
                  }
                  bottomDivider
                  leftAvatar={{rounded: true, width: 100, height: 100, source: { uri: u.avatar }}}
                  />
                );
              })
            }
          </Card>
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#502449'
  },
  box1: {
    flex: 1
  },
  box2: {
    flex: 2,
    backgroundColor: '#fff'
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  info: {
    flex: 1
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
