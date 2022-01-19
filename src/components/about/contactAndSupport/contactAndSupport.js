import React from 'react';
import { Image, Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Banner from '../../admob/banner';

const ContactAndSupport = () => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'white'} barStyle='dark-content' />
            <ScrollView style={styles.body}>
                <View style={styles.body.header}>
                    <Image style={styles.body.header.tinyLogo}
                        source={require('../../../../assets/ic_launcher.png')}
                    />
                    <Text style={styles.body.header.title}>Liên hệ và hỗ trợ</Text>
                </View>
                <View style={styles.body.content}>
                    <View style={styles.body.content.group}>
                        <Text style={styles.body.content.group.bighead}>Chi tiết ứng dụng</Text>
                        <View style={{ flexGrow: 1, }}>
                            <Text style={styles.body.content.group.text}>Tên ứng dụng: Hoc Excel</Text>
                            <Text style={styles.body.content.group.text}>Phiên bản ứng dụng: 1.1.6</Text>
                            <Text style={styles.body.content.group.text}>Ngày phát hành: January 19, 2022</Text>
                            <Text style={styles.body.content.group.text}>Chủ sở hữu: Pham Minh Kha</Text>
                        </View>
                    </View>
                    <View style={styles.body.content.group}>
                        <Text style={styles.body.content.group.bighead}>Liên hệ và hỗ trợ</Text>
                        <View style={{ flexGrow: 1, }}>
                            <Text style={styles.body.content.group.text}>Nếu bạn vẫn còn thắc mắc, hoặc mốn bổ sung thêm tính năng khác cho ứng dụng, xin đừng ngần ngại liên hệ tới tôi qua:</Text>
                            <TouchableOpacity onPress={() => Linking.openURL('mailto:' + 'pmkha92@gmail.com')}
                                style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
                                <Icon name={'email'} color={'#009DAE'} size={20} />
                                <Text style={{ color: '#009DAE', textDecorationLine: 'underline', paddingLeft: 8 }}>Email: pmkha92@gmail.com</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL(`tel:+84355210716`)}
                                style={{
                                    flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'
                                    , marginBottom: 10
                                }}
                            >
                                <Icon name={'cellphone-iphone'} color={'#009DAE'} size={20} />
                                <Text style={{ color: '#009DAE', textDecorationLine: 'underline', paddingLeft: 8 }}>Mobile: +84355210716</Text>
                            </TouchableOpacity>
                            <Text style={styles.body.content.group.text}>Nếu bạn thích ứng dụng này, xem xét ủng hộ mình ly cà phê tại:</Text>
                            <TouchableOpacity onPress={() => Linking.openURL(`https://www.buymeacoffee.com/pmkha`)}
                                style={{
                                    flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'
                                    , marginBottom: 10
                                }}
                            >
                                <Icon name={'coffee'} color={'#009DAE'} size={20} />
                                <Text style={{ color: '#009DAE', paddingLeft: 8 }}>Buy me a coffee at: https://www.buymeacoffee.com/pmkha</Text>
                            </TouchableOpacity>
                            <View style={{ marginTop: 10, width: '100%', height: 'auto' }}>
                                <Text style={{ color: 'black', marginBottom: 8 }}>Ứng dụng khác của tôi:</Text>
                                <TouchableOpacity onPress={() => Linking.openURL(`https://play.google.com/store/apps/details?id=com.scantogooglesheets`)}
                                    style={{
                                        flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'
                                        , marginBottom: 10
                                    }}
                                >
                                    <Image
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 5,
                                        }}
                                        source={require('../../../asset/picture/play_store_512.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Banner />
        </SafeAreaView>
    )
}

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
            height: 70,
            tinyLogo: {
                width: 40,
                height: 40,
                borderRadius: 5,
            },
            title: {
                marginLeft: 20,
                fontSize: 20,
                fontWeight: 'bold',
                flexDirection: "row",
                color: 'black',
            },
        },
        content: {
            flex: 1,
            shortExplain: {
                flexGrow: 1, flexDirection: 'column', marginTop: 15,
                des: { flex: 1, color: 'black', marginBottom: 8 },
            },
            group: {
                marginTop: 15,
                bighead: { flex: 1, fontSize: 18, color: 'black', fontWeight: 'bold', marginBottom: 8, },
                mediumhead: { flex: 1, fontSize: 15, color: 'black', fontWeight: 'bold', marginBottom: 8, },
                text: { flex: 1, marginBottom: 8, color: 'black' },
            },
        },
    }

})

export default ContactAndSupport
