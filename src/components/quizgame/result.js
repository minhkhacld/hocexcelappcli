import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import admob, { BannerAdSize, BannerAd } from '@react-native-firebase/admob';


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
    }

    return (
        <SafeAreaView style={styles.container}>
            <BannerAd
                unitId="ca-app-pub-8774393929760728/9421290027"
                // unitId={'ca-app-pub-3940256099942544/6300978111'}
                size={BannerAdSize.FULL_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: false,
                }}
            />
            <View style={styles.content}>
                <Icon name="star" style={styles.icon} size={60} />
                <Text style={styles.textCongrat}>Chúc mừng bạn!</Text>
                <Text style={styles.textScore}>{`Bạn đã trả lời đúng ${route.params.score + "/" + route.params.QuestionLength} Câu hỏi`}</Text>
                <Text style={styles.textgrand}>{result()}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('QuizGame')}
                style={styles.goBackHome}>
                <Text style={styles.textGoBackHome}>Quay về</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E3163',
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
    goBackHome: {
        width: "50%",
        height: 50,
        borderRadius: 30,
        backgroundColor: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textGoBackHome: {
        fontSize: 15,
    }
})

export default QuizgameResult
