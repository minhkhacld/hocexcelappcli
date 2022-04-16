import axios from 'axios';
import React from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, Text, TouchableOpacity, StatusBar, Linking, ActivityIndicator, TextInput } from 'react-native';
import FocusAwareStatusBar from '../../../components/header/statusBar';
import { useIsFocused } from '@react-navigation/native';
import { API_YOUTUBE_KEY, YOUTUBE_CHANNEL_ID } from '@env';
import YoutubePlayer from 'react-native-youtube-iframe';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Youtube_Lession_Search = ({ searchVideos, setSearchVideos, youtube_Videos, inputRef }) => {

    const _onSelectSearchValue = (video) => {
        setSearchVideos({
            ...searchVideos, isVisible: false,
            value: video.snippet.title,
        });
        inputRef.current.blur();
    };

    const renderVideos = Object.keys(youtube_Videos.data).length > 0 ? searchVideos.value === "" ? youtube_Videos.data.items :
        youtube_Videos.data.items.filter(d => d.snippet.title.toLowerCase().includes(searchVideos.value.toLowerCase())
            || d.snippet.description.toLowerCase().includes(searchVideos.value.toLowerCase())
        ).slice(0, 10) : [];

    return (
        <View style={styles.container}>
            <View style={styles.container.body}>
                <View style={styles.container.body.list}>
                    {renderVideos.length > 0 && renderVideos.map((video, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.container.body.list.item} onPress={() => _onSelectSearchValue(video)}>
                                <Text style={styles.container.body.list.item.text}>{video.snippet.title}</Text>
                            </TouchableOpacity>
                        )
                    })

                    }
                </View>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        width: '100%', height: '100%', position: 'absolute',
        backgroundColor: 'white', zIndex: 1000, top: hp('8%') + StatusBar.currentHeight,
        body: {
            width: '100%', height: '100%',
            list: {
                width: '100%', padding: wp('2%'),
                height: 'auto',
                flexDirection: 'column',
                justifyContent: 'flex-start', alignItems: 'center',
                item: {
                    width: '100%', justifyContent: 'flex-start', alignItems: 'center', borderBottomColor: 'grey', paddingVertical: hp('2%'),
                    borderBottomWidth: 0.25,
                    text: {
                        width: '100%', fontSize: hp('1.5%'), color: 'black',
                    },
                }
            }
        }
    },

})

export default Youtube_Lession_Search