import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Dimensions, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, ToastAndroid } from 'react-native';
import { AdMobRewarded } from 'react-native-admob';
import LinearGradient from 'react-native-linear-gradient';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ErrorSound from '../../asset/audio/click_error.wav';
import SusscessSound from '../../asset/audio/click_success.wav';
import QuizGameData from '../../asset/data/quizgame';
import Banner from '../admob/banner';
import { InterstitialAd } from '../admob/imperativeAd';
import FocusAwareStatusBar from '../header/statusBar';
import ModalClaimReward from './modalClaimReward';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const QuizGame = ({ navigation,
}) => {
    const [state, setState] = useState({
        DATA: QuizGameData
    });
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionDisabled, setIsOptionDisabled] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
    const [score, setScore] = useState(0);
    const [refreshing, setRefreshing] = useState(false);
    const [storeMessage, setStoreMessage] = useState('Lưu');
    const [ignoreWrongAsw, setIgnoreWrongAsw] = useState({
        count: 5,
        time: null,
    });
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const localStorageData = async () => {
            try {
                let result = await AsyncStorage.getItem('currentQuestionIndex');
                let ignoreKey = await AsyncStorage.getItem('ignoreKey');
                // console.log(result, ignoreKey);
                return {
                    questionInfo: result !== null ? JSON.parse(result) : { qsIndex: 0, score: score ? score : 0 },
                    ignoreKey: ignoreKey !== null ? JSON.parse(ignoreKey) : { lastUse: 5, time: null }
                }
            } catch (error) {
                console.error(error);
            };
        };

        localStorageData().then(async respone => {
            let checkValidTime
            if (respone.ignoreKey.time !== null) {
                checkValidTime = moment().day() - moment(respone.ignoreKey.time).day()
            }
            // console.log('checkValidTime', checkValidTime);
            // console.log('loadlocastorage', respone)
            setCurrentQuestionIndex(respone.questionInfo.qsIndex);
            setScore(respone.questionInfo.score)
            setIgnoreWrongAsw({
                count: checkValidTime > 0 ? 5 : respone.ignoreKey.lastUse,
                time: checkValidTime > 0 ? null : respone.ignoreKey.time,
            });
            // setIsOptionDisabled(false);
        });
        const unseubcribe = () => AdMobRewarded.addEventListener('rewarded', reward => {
            // console.log('AdMobRewarded => rewarded', reward)
            if (reward) {
                storeIgnoreAsw({
                    lastUse: 2,
                    time: moment().format("YYYY-MM-DD"),
                });
                setIgnoreWrongAsw({
                    ...ignoreWrongAsw, count: 2,
                })
                setModalVisible(false);
                // setIsOptionDisabled(false);
            } else {
                ToastAndroid.show("Phần thưởng không có sẵn hãy thử lại sau!");
            }
        });
        return () => unseubcribe()
    }, []);

    const onRefresh = useCallback(() => {
        setState({
            DATA: QuizGameData
        })
        setRefreshing(true);
        setCorrectOption(null);
        setIsOptionDisabled(false);
        setCurrentOptionSelected(null);
        wait(500).then(() => setRefreshing(false));
    }, []);

    const onReset = () => {
        Alert.alert(
            "Reset",
            "Bạn có xóa toàn bộ kết quả trước và bắt đầu lại từ đầu không?",
            [
                {
                    text: "Có",
                    onPress: () => {
                        setCurrentQuestionIndex(0);
                        setScore(0);
                        setCurrentOptionSelected(null);
                        setCorrectOption(null);
                        setIsOptionDisabled(false);
                        setIgnoreWrongAsw({
                            count: 5, time: null,
                        });
                        AsyncStorage.clear();
                        InterstitialAd();

                    },
                },
                { text: "Không", onPress: () => console.log("Cancle Pressed"), style: "cancel" }
            ]
        );
    };

    Sound.setCategory('Playback');
    const successClick = new Sound(SusscessSound, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            // console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        // Play the sound with an onEnd callback
        successClick.play((success) => {
            if (success) {
                // console.log('successfully finished playing');
            } else {
                // console.log('playback failed due to audio decoding errors');
            }
        });
    });
    const errorClick = new Sound(ErrorSound, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            // console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        // Play the sound with an onEnd callback
        errorClick.play((success) => {
            if (success) {
                // console.log('successfully finished playing');
            } else {
                // console.log('playback failed due to audio decoding errors');
            }
        });
    });

    const storeData = async (qsIndex, score) => {
        try {
            const jsonValue = JSON.stringify({ qsIndex: qsIndex, score: score });
            let keyIgnoreObj = {
                lastUse: 0,
                time: moment().format("YYYY-MM-DD"),
            };
            storeIgnoreAsw(keyIgnoreObj);
            await AsyncStorage.setItem('currentQuestionIndex', jsonValue);
            setStoreMessage('Đã Lưu');
            return
        } catch (e) {
            setStoreMessage('Lưu thất bại');
        }
    };

    const storeIgnoreAsw = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('ignoreKey', jsonValue);
            return
        } catch (e) {
            console.log(err)
        }
    };

    const validateOption = async (selectedOption) => {
        let correct_option = state.DATA[currentQuestionIndex].correct_option;
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionDisabled(true);
        setShowNextButton(true);
        if (selectedOption === correct_option) {
            setScore(score + 1);
            successClick.play();
        }
        else {
            setIgnoreWrongAsw({
                ...ignoreWrongAsw, count: ignoreWrongAsw.count > 0 ? ignoreWrongAsw.count - 1 : 0
            })
            errorClick.play();
        }
    };

    const handleNext = () => {
        // No advert ready to show yet
        if (ignoreWrongAsw.count > 0) {
            let flag = [6, 14, 21, 28, 35, 42, 49, 56].filter(num => num == currentQuestionIndex)
            if (flag.length > 0) {
                // interstitial.show()
                InterstitialAd();
            }
            if (currentQuestionIndex == state.DATA.length - 1) {
                //show modal           
                navigation.navigate('QuizGameResult', { score, QuestionLength: state.DATA.length });
            } else {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setCurrentOptionSelected(null);
                setCorrectOption(null);
                setIsOptionDisabled(false);
                setStoreMessage("Lưu");
            };
        }
        else if (ignoreWrongAsw.count === 0) {
            let keyIgnoreObj = {
                lastUse: 0,
                time: moment().format("YYYY-MM-DD"),
            };
            setModalVisible(true);
            storeIgnoreAsw(keyIgnoreObj);
            storeData(currentQuestionIndex, score);
        }
        else if (ignoreWrongAsw.time !== null && ignoreWrongAsw.count === 0) {
            setModalVisible(true);
        }
    };

    // console.log(
    //     "currentQuestionIndex", currentQuestionIndex,
    //     "currentOptionSelected", currentOptionSelected,
    //     "correctOption", correctOption,
    //     "isOptionDisabled", isOptionDisabled,
    //     "showNextButton", showNextButton,
    //     "score", score,
    //     "refreshing", refreshing,
    //     "storeMessage", storeMessage,
    //     "ignoreWrongAsw", ignoreWrongAsw,
    //     "modalVisible", modalVisible,
    // );
    console.log('intertial', ignoreWrongAsw)
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar
                backgroundColor={"#1E3163"}
                barStyle={'light-content'} />
            <ScrollView
                contentContainerStyle={styles.contentContainerStyle}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {
                    state.DATA.length > 0 &&
                    <View style={styles.content}>
                        <View style={styles.score}>
                            <View style={styles.iconGroupTop}>
                                < Icon name={'head-question'} style={{ color: '#5CB85C' }} size={30} />
                                <Text style={styles.scoreText}>
                                    {`${currentQuestionIndex + 1}/${state.DATA.length}`}</Text>
                            </View>
                            <View style={styles.iconGroupTop}>
                                < Icon name={'checkbox-multiple-marked-circle'} style={{ color: '#5CB85C' }} size={30} />
                                <Text style={styles.scoreText}>
                                    {score}</Text>
                            </View>
                            <View style={styles.iconGroupTop}>
                                < Icon name={'key-outline'} style={{ color: '#5CB85C' }} size={30} />
                                <Text style={styles.scoreText}>{ignoreWrongAsw.count}</Text>
                            </View>
                            <TouchableOpacity style={styles.resetGroup}
                                onPress={() => { onReset() }}
                            >
                                <Icon style={styles.resetIcon} name="reload" size={30} color={'#5CB85C'} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.question}>
                            <View style={styles.questionContent}>
                                <Text style={styles.questionText}>{state.DATA[currentQuestionIndex].question}</Text>
                            </View>
                            <Banner />
                        </View>
                        <View style={styles.options}>
                            {
                                state.DATA.length > 0 && state.DATA[currentQuestionIndex].option.map((option, index) => {
                                    return (
                                        <TouchableOpacity key={index} style={[styles.touchableOpacity,
                                        {
                                            borderWidth: 1,
                                            borderColor: option === correctOption ? '#5CB85C' :
                                                option === currentOptionSelected ? '#D9534F' : '#0A81AB'
                                        }]}
                                            disabled={isOptionDisabled || ignoreWrongAsw.count === 0 ? true : false}
                                            onPress={() => {
                                                validateOption(option);
                                            }} >
                                            <View style={{ flex: 1 }}>
                                                <Text style={[styles.option,]}>{option}</Text>
                                            </View>

                                            {
                                                option === correctOption ? (
                                                    <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                                        < Icon name={'check-circle'} style={{ color: '#5CB85C' }} size={30} />
                                                    </View>

                                                ) :
                                                    option === currentOptionSelected ? (
                                                        <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                                            < Icon name={'close-circle'} style={{ color: '#D9534F' }} size={30} />
                                                        </View>
                                                    ) : null
                                            }
                                        </TouchableOpacity>)
                                })
                            }
                        </View>
                        <View style={styles.handle}>
                            <LinearGradient colors={['#0093E9', '#80D0C7']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.buttonGroup}>
                                <TouchableOpacity style={[styles.savebtn,]} onPress={() => storeData(currentQuestionIndex, score)}
                                >
                                    < Icon name={'content-save-outline'} style={{ color: 'white', marginRight: 5 }} size={25} />
                                    <Text style={styles.savebtnText}>{storeMessage}</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                            <LinearGradient colors={['rgba(245,116,185,1)', 'rgba(89,97,223,1)']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.buttonGroup}>
                                <TouchableOpacity style={[styles.nextbtn,
                                { opacity: ignoreWrongAsw.count === 0 ? 1 : !isOptionDisabled ? 0.5 : 1 }
                                ]}
                                    // disabled={ignoreWrongAsw.time !== null ? false : showNextButton ? false : true}
                                    disabled={ignoreWrongAsw.count === 0 ? false : !isOptionDisabled ? true : false}
                                    onPress={handleNext}
                                >
                                    {ignoreWrongAsw.count === 0 ?
                                        < Icon name={'key'} style={{ color: 'white', marginRight: 5 }} size={25} />
                                        :
                                        < Icon name={'skip-next'} style={{ color: 'white', marginRight: 5 }} size={25} />
                                    }
                                    <Text style={styles.nextbtnText}>{ignoreWrongAsw.count === 0 ? "Lấy chìa" : "Kế tiếp"}</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                }
            </ScrollView>

            {modalVisible && <ModalClaimReward modalVisible={modalVisible} setModalVisible={setModalVisible}
                ignoreWrongAsw={ignoreWrongAsw} setIgnoreWrongAsw={setIgnoreWrongAsw}
            />
            }
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    contentContainerStyle: {
        flex: 1,
        top: 15,
    },
    background: { flex: 1 },
    content: { flex: 1, backgroundColor: '#1E3163', paddingTop: 10 },
    score: {
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    iconGroupTop: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
    },
    scoreText: {
        color: 'white', fontSize: 15, marginLeft: 8
    },
    resetGroup: {
        width: '25%',
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },
    resetIcon: { marginLeft: 15 },
    question: {
        height: '25%',
        width: '100%',
        justifyContent: 'space-between',
        minHeight: 30,
    },
    questionContent: { paddingLeft: 10, height: '60%' },
    imageFrame: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
    },
    image: {
        width: Dimensions.get('window').width - 20, height: '80%',
        resizeMode: 'contain', marginBottom: 10, aspectRatio: 4 / 2
    },
    questionText: { color: 'white', fontSize: 15, fontWeight: 'bold', padding: 5, },
    options: {
        width: '100%',
        height: '45%',
        padding: 5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    option: {
        fontSize: 14, color: 'white', width: '90%', height: 30,
        lineHeight: 30,

    },
    touchableOpacity: {
        backgroundColor: '#0A81AB',
        height: '25%', maxHeight: 50, width: '95%',
        borderRadius: 30, paddingLeft: 15, paddingRight: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    handle: {
        width: '100%',
        height: '22%',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 50,
        minHeight: 40,
    },
    buttonGroup: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        height: 55,
    },
    nextbtn: {
        height: '100%',
        minHeight: 45,
        width: '100%',
        flexDirection: 'row',
        borderRadius: 10, padding: 5, justifyContent: 'center', alignItems: 'center',
    },
    nextbtnText: { color: "white", fontSize: 15, fontWeight: "bold" },
    savebtn: {
        height: 45,
        width: '100%',
        flexDirection: 'row',
        borderRadius: 10, padding: 5, justifyContent: 'center', alignItems: 'center',
    },
    savebtnText: {
        color: "white", fontSize: 15, fontWeight: "bold", textAlign: 'center',
    },
    adMobBanner: {
        width: '100%',
        justifyContent: 'center', alignItems: 'center',
    },

})

export default QuizGame;
