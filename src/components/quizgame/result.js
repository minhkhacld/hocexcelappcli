import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Banner from '../admob/banner';
// import { InterstitialAd } from '../admob/imperativeAd';

const QuizgameResult = ({ navigation, route }) => {
    // console.log(route)

    let ratio = route.params.score / route.params.QuestionLength;

    const result = () => {
        if (ratio < 25 / 50) {
            return 'Chưa đạt yêu cầu, bạn cần cố gắng hơn!';
        }
        else if (ratio >= 25 / 60 && ratio < 30 / 60) {
            return 'Xếp loại Trung bình';
        }
        else if (ratio >= 30 / 60 && ratio < 40 / 60) {
            return 'Xếp loại Khá';
        }
        else if (ratio >= 40 / 60 && ratio < 55 / 60) {
            return 'Xếp loại Giỏi';
        }
        else if (ratio >= 55 / 60 && ratio < 60 / 60) {
            return 'Xếp loại Xuất sắc';
        }
        else if (ratio === 1) {
            return 'Xếp loại Thiên tài';
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor={"#1E3163"}
                barStyle={'light-content'} />
            <View style={styles.body}>
                <View style={styles.content}>
                    <Icon name="star" style={styles.icon} size={60} />
                    <Text style={styles.textCongrat}>Chúc mừng bạn!</Text>
                    <Text style={styles.textScore}>{`Bạn đã trả lời đúng ${route.params.score + "/" + route.params.QuestionLength} Câu hỏi`}</Text>
                    <Text style={styles.textgrand}>{result()}</Text>
                </View>
                <LinearGradient colors={['rgba(245,116,185,1)', 'rgba(89,97,223,1)']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.buttonGroup}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('QuizGame');
                    }}
                        style={styles.goBackHome}>
                        <Text style={styles.textGoBackHome}>Quay về</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            <Banner />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E3163',
        paddingBottom: 45,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: { color: 'yellow' },
    textCongrat: {
        color: '#5CB85C', fontSize: 30, fontWeight: 'bold',
        marginBottom: 20,
    },
    textScore: {
        color: 'white', fontSize: 15, marginBottom: 20,
    },
    textgrand: { color: 'white', fontSize: 15, marginBottom: 20, },
    buttonGroup: {
        height: 50,
        borderRadius: 30,
        width: '95%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    goBackHome: {
        width: "100%",
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textGoBackHome: {
        fontSize: 15,
        color: "white"
    }
})

export default QuizgameResult
