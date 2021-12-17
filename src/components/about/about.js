import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, SafeAreaView, Linking } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AboutData from '../../asset/data/about_data';
import FocusAwareStatusBar from '../header/statusBar';
import Banner from '../admob/banner';

const About = ({ navigation, route }) => {

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar
        backgroundColor={'white'} barStyle="dark-content" />
      <Banner />
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={AboutData}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => {
              if (item.title === "Điều khoản và chính sách") {
                Linking.openURL('https://minhkhacld.github.io/hocexcelpolicy')
              } else {
                navigation.navigate('AboutDetail', { item })
              }
            }
            }>
              <ListItem containerStyle={styles.listContainer} >
                <View style={styles.iconGroup}>
                  <Icon name={item.icon} size={25} style={styles.icon} />
                </View>
                <ListItem.Content style={styles.content}>
                  <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          )
        }}
      />

    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: { padding: 10 },
  listContainer: { marginBottom: 10, height: 60, borderRadius: 5 },
  iconGroup: { justifyContent: 'center', alignItems: 'center', width: 25, },
  icon: { color: '#14279B' },
  title: { fontSize: 14, fontWeight: 'bold' },
  description: { fontSize: 12 },
  policy: {
    backgroundColor: "red",
  }

})

export default About;
