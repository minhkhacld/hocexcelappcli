import React from 'react';
import {
  FlatList,
  Linking,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AboutData from '../../asset/data/about_data';
import Banner from '../admob/banner';
import FocusAwareStatusBar from '../header/statusBar';

const About = ({navigation, route}) => {
  const _onHandleNavigate = item => {
    if (item.title === 'Điều khoản và chính sách') {
      Linking.openURL('https://minhkhacld.github.io/hocexcelpolicy');
    } else if (item.title === 'Chia sẻ ứng dụng') {
      let options = {
        title: 'Chia sẽ ứng dụng',
        message: 'Hoc excel',
        url: 'https://play.google.com/store/apps/details?id=com.hocexcel',
      };
      Share.open(options)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          err && console.log(err);
        });
    } else if (item.title === 'Đánh giá ứng dụng') {
      Linking.openURL(
        'https://play.google.com/store/apps/details?id=com.hocexcel',
      );
    } else if (item.title === 'Liên hệ và hỗ trợ') {
      navigation.navigate('ContactAndSupport');
    } else if (item.title === 'Trở thành thành viên Premium') {
      navigation.navigate('GoPremium');
    } else {
      navigation.navigate('AboutDetail', {item});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar backgroundColor={'white'} barStyle="dark-content" />

      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={AboutData}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => _onHandleNavigate(item)}>
              <ListItem containerStyle={styles.listContainer}>
                <View style={styles.iconGroup}>
                  <Icon name={item.icon} size={25} style={styles.icon} />
                </View>
                <ListItem.Content style={styles.content}>
                  <ListItem.Title style={styles.title}>
                    {item.title}
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
      <Banner />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 45,
  },
  contentContainerStyle: {padding: 10},
  listContainer: {marginBottom: 10, height: hp('8%'), borderRadius: 5},
  iconGroup: {justifyContent: 'center', alignItems: 'center', width: 25},
  icon: {color: '#14279B'},
  title: {fontSize: hp('2%'), fontWeight: 'bold'},
  description: {fontSize: hp('1.5%')},
  policy: {
    backgroundColor: 'red',
  },
});

export default About;
