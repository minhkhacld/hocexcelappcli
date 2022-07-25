import React from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Banner from '../../admob/banner';

const GoPremium = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <ScrollView style={styles.body}>
        <View style={styles.body.header}>
          <Image
            style={styles.body.header.tinyLogo}
            source={require('../../../../assets/ic_launcher.png')}
          />
          <Text style={styles.body.header.title}>Phiên Bản Premium</Text>
        </View>
        <Text style={[styles.body.content.group.bighead, {color: 'red'}]}>
          Phiên bản Premium có gì hot?
        </Text>
        <View style={styles.body.content}>
          <View style={styles.body.content.group}>
            <Text style={styles.body.content.group.bighead}>
              Không chứa quảng cáo
            </Text>
            <View style={{flexGrow: 1}}>
              <Text style={styles.body.content.group.text}>
                Quảng cáo đặt nhiều nơi có thể ảnh hưởng đến sự trải nghiệm sử
                dụng của bạn, nâng cấp bản Premium sẽ giúp loại bỏ quảng cáo.
                Màn hình ứng dụng sẽ có nhiều không gian hơn giúp bạn học tập
                hiệu quả.
              </Text>
            </View>
          </View>
          <View style={styles.body.content.group}>
            <Text style={styles.body.content.group.bighead}>
              Không giới hạn lần chọn sai trong game chắc nghiệm
            </Text>
            <View style={{flexGrow: 1}}>
              <Text style={styles.body.content.group.text}>
                Ở phiên bản tiêu chuẩn bạn chỉ có tối đa 5 lượt chọn sai mỗi
                ngày. Con số này sẽ làm 100000 nếu bạn nâng cấp lên bản Premium.
                Thoải mái lựa chọn đúng ko nào?
              </Text>
            </View>
          </View>
          <View style={styles.body.content.group}>
            <Text style={styles.body.content.group.bighead}>
              Động lực phát triển ứng dụng
            </Text>
            <View style={{flexGrow: 1}}>
              <Text style={styles.body.content.group.text}>
                Phát triển một ứng dụng di động mất nhiều thời gian và công sức.
                Bằng việc nâng cấp lên phiên bản Premium. Bạn cho tôi thấy được
                rằng bạn thật sự thích ứng dụng này. Đây là cơ sở và là động lực
                để tôi tiếp tục phát triển và bảo trì ứng dụng này.
              </Text>
            </View>
          </View>
          <View style={styles.body.content.group}>
            <Text style={[styles.body.content.group.bighead, {color: 'red'}]}>
              Đi đến bản Premium
            </Text>
            <View style={{flexGrow: 1}}>
              <Text style={styles.body.content.group.text}>
                Tôi khuyên bạn hãy nên nâng cấp lên bản Premium ngay để có những
                trải nghiêm tốt nhất.
              </Text>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://play.google.com/store/apps/details?id=com.hocexcelpremium',
                  )
                }
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Icon name={'google-play'} color={'#009DAE'} size={20} />
                <Text
                  style={{
                    color: '#009DAE',
                    textDecorationLine: 'underline',
                    paddingLeft: 8,
                    fontSize: hp('1.6%'),
                  }}>
                  https://play.google.com/store/apps/details?id=com.hocexcelpremium
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <Banner />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 45,
  },
  body: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 8,
    header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: hp('10%'),
      tinyLogo: {
        width: wp('10%'),
        height: wp('10%'),
        borderRadius: 5,
      },
      title: {
        marginLeft: 20,
        fontSize: hp('3%'),
        fontWeight: 'bold',
        flexDirection: 'row',
        color: 'black',
      },
    },
    content: {
      flex: 1,
      minHeight: 700,
      shortExplain: {
        flexGrow: 1,
        flexDirection: 'column',
        marginTop: 15,
        des: {flex: 1, color: 'black', marginBottom: 8, fontSize: hp('1.6%')},
      },
      group: {
        marginTop: 15,
        bighead: {
          flex: 1,
          fontSize: hp('1.6%'),
          color: 'black',
          fontWeight: 'bold',
          marginBottom: 8,
        },
        mediumhead: {
          flex: 1,
          fontSize: hp('1.6%'),
          color: 'black',
          fontWeight: 'bold',
          marginBottom: 8,
        },
        text: {flex: 1, marginBottom: 8, color: 'black', fontSize: hp('1.6%')},
      },
    },
  },
  sending: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: 1000,
    flex: 1,
    backgroundColor: '#00000080',
    text: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: hp('2%'),
      marginTop: 30,
    },
  },
});

export default GoPremium;
