import React, {useCallback} from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Banner from '../../admob/banner';
import axios from 'axios';
import {API_SHEET_URL, API_MY_PROJECT} from '@env';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import useIsMountedRef from '../../../hooks/useIsMountedRef';

const ContactAndSupport = () => {
  const [loading, setLoading] = React.useState(false);
  const [projectData, setProjectData] = React.useState([]);
  const isMounted = useIsMountedRef();

  const calApiProject = useCallback(() => {
    setLoading(true);
    const data = {
      sheetName: 'MyProject',
      sheetUrl: `${API_SHEET_URL}`,
    };
    axios
      .post(`${API_MY_PROJECT}`, {data: data})
      .then(response => {
        // console.log('respone api', response.data.headers);
        if (response.data.data.length > 0) {
          let obj = {};
          let arr = [];
          response.data.data.forEach((row, index) => {
            let headersArr = response.data.headers;
            obj = row.reduce(
              (a, v, currentIndex) => ({...a, [headersArr[currentIndex]]: v}),
              {},
            );
            arr.push(obj);
          });
          if (isMounted.current) {
            setProjectData(arr);
            setLoading(false);
          }
        }
      })
      .catch(err => {
        alert(err);
        setLoading(false);
      });
  }, [isMounted]);

  React.useEffect(() => {
    calApiProject();
    // setLoading(true);
    // const data = {
    //     sheetName: "MyProject",
    //     sheetUrl: `${API_SHEET_URL}`
    // }
    // axios.post(`${API_MY_PROJECT}`, { data: data })
    //     .then(response => {
    //         // console.log('respone api', response.data.headers);
    //         if (response.data.data.length > 0) {
    //             let obj = {};
    //             let arr = []
    //             response.data.data.forEach((row, index) => {
    //                 let headersArr = response.data.headers;
    //                 obj = row.reduce((a, v, currentIndex) => ({ ...a, [headersArr[currentIndex]]: v }), {});
    //                 arr.push(obj);
    //             })
    //             setProjectData(arr);
    //             setLoading(false);
    //         }
    //     }).catch(err => {
    //         alert(err);
    //         setLoading(false);
    //     });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <ScrollView style={styles.body}>
        <View style={styles.body.header}>
          <Image
            style={styles.body.header.tinyLogo}
            source={require('../../../../assets/ic_launcher.png')}
          />
          <Text style={styles.body.header.title}>Liên hệ và hỗ trợ</Text>
        </View>
        <View style={styles.body.content}>
          <View style={styles.body.content.group}>
            <Text style={styles.body.content.group.bighead}>
              Chi tiết ứng dụng
            </Text>
            <View style={{flexGrow: 1}}>
              <Text style={styles.body.content.group.text}>
                Tên ứng dụng: Hoc Excel
              </Text>
              <Text style={styles.body.content.group.text}>
                Phiên bản ứng dụng: 1.2.6
              </Text>
              <Text style={styles.body.content.group.text}>
                Ngày cập nhật: September, 21, 2023
              </Text>
              <Text style={styles.body.content.group.text}>
                Chủ sở hữu: Pham Minh Kha
              </Text>
            </View>
          </View>
          <View style={styles.body.content.group}>
            <Text style={styles.body.content.group.bighead}>
              Liên hệ và hỗ trợ
            </Text>
            <View style={{flexGrow: 1}}>
              <Text style={styles.body.content.group.text}>
                Nếu bạn vẫn còn thắc mắc, hoặc mốn bổ sung thêm tính năng khác
                cho ứng dụng, xin đừng ngần ngại liên hệ tới tôi qua:
              </Text>
              <TouchableOpacity
                onPress={() => Linking.openURL('mailto:' + 'pmkha92@gmail.com')}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Icon name={'email'} color={'#009DAE'} size={20} />
                <Text
                  style={{
                    color: '#009DAE',
                    textDecorationLine: 'underline',
                    paddingLeft: 8,
                    fontSize: hp('1.6%'),
                  }}>
                  Email: pmkha92@gmail.com
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL(`tel:+84355210716`)}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Icon name={'cellphone-iphone'} color={'#009DAE'} size={20} />
                <Text
                  style={{
                    color: '#009DAE',
                    textDecorationLine: 'underline',
                    fontSize: hp('1.6%'),
                    paddingLeft: 8,
                  }}>
                  Mobile: +84355210716
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(`https://portfolio-minhkhacld.vercel.app/`)
                }
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Icon name={'web'} color={'#009DAE'} size={20} />
                <Text
                  style={{
                    color: '#009DAE',
                    textDecorationLine: 'underline',
                    paddingLeft: 8,
                  }}>
                  Website: https://portfolio-minhkhacld.vercel.app/
                </Text>
              </TouchableOpacity>
              <Text style={styles.body.content.group.text}>
                Nếu bạn thích ứng dụng này, xem xét ủng hộ mình ly cà phê tại:
              </Text>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(`https://www.buymeacoffee.com/pmkha`)
                }
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Icon name={'coffee'} color={'#009DAE'} size={20} />
                <Text
                  style={{
                    color: '#009DAE',
                    paddingLeft: 8,
                    fontSize: hp('1.6%'),
                  }}>
                  Buy me a coffee at: https://www.buymeacoffee.com/pmkha
                </Text>
              </TouchableOpacity>

              {projectData.length > 0 && (
                <View style={{marginTop: 10, width: '100%', height: 'auto'}}>
                  <Text
                    style={{
                      color: 'black',
                      marginBottom: 8,
                      fontSize: hp('1.6%'),
                      fontWeight: 'bold',
                    }}>
                    Ứng dụng khác của tôi:
                  </Text>
                  {projectData.map((item, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => Linking.openURL(`${item.Link}`)}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginBottom: 10,
                          width: '100%',
                          height: 50,
                        }}>
                        <Text
                          style={{
                            width: '70%',
                            color: 'black',
                            fontSize: hp('1.6%'),
                          }}>
                          {item.Descripton}
                        </Text>
                        <View
                          style={{
                            width: '30%',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image
                            style={{
                              width: wp('10%'),
                              height: wp('10%'),
                              borderRadius: 5,
                            }}
                            source={{uri: item.Picture}}
                          />
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      {loading && (
        <View style={styles.sending}>
          <ActivityIndicator size="large" color="#00ff00" />
          <Text style={styles.sending.text}>
            Đang tải dữ liệu, vui lòng chờ...
          </Text>
        </View>
      )}
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
          fontSize: hp('2%'),
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

export default ContactAndSupport;
