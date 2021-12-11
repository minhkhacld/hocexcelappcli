import React, { useState, useEffect, useCallback, } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, SafeAreaView, RefreshControl, Pressable, Dimensions, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import QuizGameData from '../../asset/data/quizgame';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FocusAwareStatusBar from '../header/statusBar';
import Sound from 'react-native-sound';
import SusscessSound from '../../asset/audio/click_success.wav';
import ErrorSound from '../../asset/audio/click_error.wav';
import admob, {BannerAdSize, BannerAd, } from '@react-native-firebase/admob';


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}





const QuizGame = ({ navigation, route }) => {
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
    const [storeMessage, setStoreMessage] = useState('Lưu hiện tại');


    useEffect(() => {
        const localStorageData = async () => {
            try {
                const result = await AsyncStorage.getItem('currentQuestionIndex');
                return result !== "" ? JSON.parse(result) : null;
            } catch (error) {
                console.error(error);
            };
        }
        localStorageData().then(async respone => {
            if (respone) {
                setCurrentQuestionIndex(respone);
            }
            else {
                // console.log('no storage data');
                // setState({...state,DATA:QuizGameData});
                setCurrentQuestionIndex(0);
            };
        });


    }, []);



    Sound.setCategory('Playback');
    // Load the sound file 'whoosh.mp3' from the app bundle
    // See notes below about preloading sounds within initialization code below.

    const onRefresh = useCallback(() => {
        setState({
            DATA: QuizGameData
        })
        setRefreshing(true);
        setCorrectOption(null);
        setIsOptionDisabled(false);
        setScore(score);
        setShowNextButton(false);
        setCurrentOptionSelected(null);
        wait(500).then(() => setRefreshing(false));
    }, []);

    const onReset = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionDisabled(false);
        setShowNextButton(false);
        AsyncStorage.clear();
    };

    Sound.setCategory('Playback');
    const successClick = new Sound(SusscessSound, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            // console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        // console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
        // Play the sound with an onEnd callback

        whoosh.play((success) => {
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
        // console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
        // Play the sound with an onEnd callback
        whoosh.play((success) => {
            if (success) {
                // console.log('successfully finished playing');
            } else {
                // console.log('playback failed due to audio decoding errors');
            }
        });
    });



    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('currentQuestionIndex', jsonValue);
            setStoreMessage('Đã Lưu');
            return
        } catch (e) {
            console.log("🚀 ~ file: fullScreenSearch.js ~ line 54 ~ storeData ~ e", e);
            setStoreMessage('Lưu thất bại');
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
            errorClick.play();
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex == state.DATA.length - 1) {
            //show modal
            console.log('max');
            navigation.navigate('QuizGameResult', { score, QuestionLength: state.DATA.length });
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionDisabled(false);
            setShowNextButton(false);
            setStoreMessage("Lưu hiện tại")
        };
    };

    // console.log(currentQuestionIndex)
    // console.log(state.DATA.length)
    // console.log("correctoption", correctOption)
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
                            <Text style={styles.scoreText}>{`Câu hỏi: ${currentQuestionIndex + 1}/${state.DATA.length}`}</Text>
                            <Text style={styles.scoreText}>{'Điểm: ' + score}</Text>
                            <TouchableOpacity style={styles.resetGroup}
                                // onPress={interstitial
                                // }
                                onPress={() => { onReset() }}
                            >
                                <Text style={styles.scoreText}>Chơi lại</Text>
                                <Icon style={styles.resetIcon} name="reload" size={22} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.question}>
                            <View style={styles.questionContent}>
                                <Text style={styles.questionText}>{state.DATA[currentQuestionIndex].question}</Text>
                            </View>
                            <BannerAd
                                unitId="ca-app-pub-8774393929760728/9421290027"
                                // unitId={'ca-app-pub-3940256099942544/6300978111'}
                                size={BannerAdSize.FULL_BANNER}
                                requestOptions={{
                                    requestNonPersonalizedAdsOnly: false,
                                }}
                            />
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
                                            disabled={isOptionDisabled}
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
                                }

                                )
                            }

                        </View>
                        <View style={styles.handle}>
                            <Pressable style={[styles.savebtn,]} onPress={() => storeData(currentQuestionIndex)}
                            >
                                <Text style={styles.savebtnText}>{storeMessage}</Text>
                            </Pressable>
                            <Pressable style={[styles.nextbtn, { opacity: showNextButton ? 1 : 0.6 }]} onPress={handleNext} disabled={showNextButton ? false : true}
                            >
                                <Text style={styles.nextbtnText}>Kế tiếp</Text>
                            </Pressable>
                        </View>
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    contentContainerStyle: {
        flex: 1,
        //  paddingBottom: 40
    },
    background: { flex: 1 },
    content: { flex: 1, backgroundColor: '#1E3163' },
    score: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    scoreText: {
        color: 'white', fontSize: 14,
    },
    resetGroup: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    resetIcon: { color: 'white', marginLeft: 5 },
    question: { flex: 3, justifyContent: 'space-between', },
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
    options: { flex: 4, padding: 5, justifyContent: 'space-evenly', alignItems: 'center' },
    option: {
        fontSize: 14, color: 'white', width: '90%', height: 30,
        lineHeight: 30,

    },
    touchableOpacity: {
        backgroundColor: '#0A81AB',
        height: '20%', width: '95%',
        borderRadius: 30, padding: 15, paddingLeft: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    handle: {
        flex: 2,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingBottom: 40,
    },
    nextbtn: {
        backgroundColor: '#FFEF78',
        height: 45,
        width: '35%',
        borderRadius: 10, padding: 5, justifyContent: 'center', alignItems: 'center',
    },
    nextbtnText: { color: "black", fontSize: 15, fontWeight: "bold" },
    savebtn: {
        backgroundColor: 'tomato',
        height: 45,
        width: '35%',
        borderRadius: 10, padding: 5, justifyContent: 'center', alignItems: 'center',
    },
    savebtnText: { color: "white", fontSize: 15, fontWeight: "bold", textAlign: 'center', },
    adMobBanner: {
        width: '100%',
        justifyContent: 'center', alignItems: 'center',
    },
    //Admoder

})

export default QuizGame;
