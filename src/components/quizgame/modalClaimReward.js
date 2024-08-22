import React from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { RewardedAd } from '../admob/imperativeAd';

const ModalClaimReward = ({
  modalVisible,
  setModalVisible,
  ignoreWrongAsw,
  showRewardAd = () => { },
}) => {

  // const showRewardAd = () => {
  //   rewarded.show();
  //   // RewardedAd()
  // };

  // console.log(ignoreWrongAsw)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={'white'}
        translucent={true}
        barStyle="dark-content"
      />
      <Modal
        animationType="slide"
        style={{ minHeight: 300 }}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <ScrollView contentContainerStyle={styles.centeredView}>
          <View style={styles.headerView}>
            <Text style={styles.title}>Hết lượt</Text>
            <View style={styles.alertIconView}>
              <Icon style={styles.alertIcon} name={'alert-decagram'} />
            </View>
            <Text style={styles.message}>
              {`Opp! Bạn đã dùng hết lượt hôm nay, xem quảng cáo để nhận thêm 2 chìa khóa để vượt qua thử thách. 
Tip: Hãy bình tĩnh suy nghĩ thật kỹ chọn phương án đúng. Nếu bạn không chắc hãy cũng cố lại kiến thức trước!`}
            </Text>

          </View>
          <View style={styles.modalButonGroup}>
            <LinearGradient
              colors={['#0093E9', '#80D0C7']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.scanButtonGroup}>
              <TouchableOpacity
                style={styles.modalActionButton}
                onPress={() => setModalVisible(false)}>
                <Icon name={'arrow-left'} size={22} color={'white'} />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginLeft: 5,
                  }}>
                  Trở vê
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            {ignoreWrongAsw.time === null &&
              <LinearGradient
                colors={['rgba(245,116,185,1)', 'rgba(89,97,223,1)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.scanButtonGroup}>
                <TouchableOpacity
                  style={styles.modalActionButton}
                  onPress={() => showRewardAd()}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 15,
                      fontWeight: 'bold',
                      marginRight: 5,
                    }}>
                    Lấy 2 chìa
                  </Text>
                  <Icon name={'key'} size={30} color={'yellow'} />
                </TouchableOpacity>
              </LinearGradient>
            }
          </View>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //Modal window
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1000,
  },
  headerView: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    wordBreak: 'break-word',
    width: '100%',
    height: '70%',
  },
  title: {
    height: '20%',
    width: '100%',
    minHeight: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#14279B',
  },
  alertIconView: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertIcon: {
    fontSize: 100,
    color: '#FABB52',
  },
  message: {
    width: '100%',
    height: '50%',
    minHeight: 200,
    color: '#14279B',
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButonGroup: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '30%',
    width: '95%',
    flexDirection: 'row',
    minHeight: 70,
  },
  modalActionButton: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    borderRadius: 25,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButtonGroup: {
    width: '45%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default ModalClaimReward;
