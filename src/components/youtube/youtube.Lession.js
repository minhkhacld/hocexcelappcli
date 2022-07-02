import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { StyleSheet, View, ScrollView, Platform, Text, Animated, TouchableOpacity, StatusBar, Linking, ActivityIndicator, TextInput } from 'react-native';
import FocusAwareStatusBar from '../../components/header/statusBar';
import { useIsFocused } from '@react-navigation/native';
import { API_YOUTUBE_KEY, YOUTUBE_CHANNEL_ID } from '@env';
import YoutubePlayer from 'react-native-youtube-iframe';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Youtube_Lession_Search from './suggesttion/suggesttion';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import { Tooltip, colors } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Banner from '../../components/admob/banner';
import useIsMountedRef from '../../hooks/useIsMountedRef';

const YoutubeLession = () => {
    const isFocused = useIsFocused();
    const [loading, setLoading] = React.useState(false);
    const [youtube_Videos, setYoutube_Videos] = React.useState({
        data: {},
    });

    const offset = React.useRef(new Animated.Value(0)).current;
    const inputRef = React.useRef(null);
    const insets = useSafeAreaInsets();
    const isMountedRef = useIsMountedRef();



    const [searchVideos, setSearchVideos] = React.useState({
        value: '',
        isVisible: false,
    });

    const calApiYoutube = useCallback(() => {
        // if (isFocused) {
        setLoading(true);
        axios.get(`https://www.googleapis.com/youtube/v3/channels?id=${YOUTUBE_CHANNEL_ID}&maxResults=50&key=${API_YOUTUBE_KEY}&part=contentDetails`).then(
            async response => {
                // console.log(response.data);
                let channel = await response.data.items
                if (channel.length > 0) {
                    channel.forEach(async d => {
                        await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${d.contentDetails.relatedPlaylists.uploads}&key=${API_YOUTUBE_KEY}&part=snippet&maxResults=50`).then(
                            res => {
                                // console.log(res.data.items)
                                if (res.data.items.length > 0) {
                                    let videoList = res.data;
                                    videoList.items = videoList.items.filter(v => v.snippet.title !== "Scan To Google Sheets Intro").sort((a, b) => (b.snippet.publishedAt - a.snippet.publishedAt));
                                    setYoutube_Videos({ ...youtube_Videos, data: videoList });
                                }
                            }
                        ).catch(err => alert('error', err))
                    })
                }
            }
        ).catch(err => alert(err));
        setLoading(false);
        // };

    }, [isMountedRef.current])

    React.useEffect(() => {
        calApiYoutube();
    }, []);


    const _onpenSuggesttion = () => {
        setSearchVideos({
            ...searchVideos,
            isVisible: true,
        });
    }

    const _onSearchVideos = (e) => {
        if (searchVideos.isVisible) {
            setSearchVideos({
                ...searchVideos,
                value: e,
            });
        } else {
            if (e) {
                setSearchVideos({
                    ...searchVideos,
                    value: e,
                    isVisible: true,
                });
            }
        };
    };

    const _onClearSearchValue = () => {
        if (searchVideos.value !== "") {
            setSearchVideos({
                ...searchVideos,
                value: '',
            });
        } else {
            setSearchVideos({
                ...searchVideos,
                value: '',
                isVisible: false,
            });
            inputRef.current.blur();
        }
    };

    const _onhandleGoToYoutubeChannel = () => {
        Linking.openURL('https://www.youtube.com/channel/UCvdTLA2bhEjJ4_Je3oTZ_dg');
    };

    const headerHeight = offset.interpolate({
        inputRange: [0, hp('8%') + insets.top],
        outputRange: [hp('8%') + insets.top, 0],
        extrapolate: 'clamp'
    });


    const renderVideos = Object.keys(youtube_Videos.data).length > 0 ? searchVideos.value === "" ? youtube_Videos.data.items :
        youtube_Videos.data.items.filter(d => d.snippet.title.toLowerCase().includes(searchVideos.value.toLowerCase())
            || d.snippet.description.toLowerCase().includes(searchVideos.value.toLowerCase())
        ).slice(0, 50) : [];

    const countVideos = searchVideos.value === "" ? Object.keys(youtube_Videos.data).length > 0 ? youtube_Videos.data.items.length > 0 ? youtube_Videos.data.items.length : 0 : 0
        : renderVideos.length;

    // console.log('youtube_videos', renderVideos);
    // console.log('offset', offset, insets)

    return (
        <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
            <FocusAwareStatusBar backgroundColor={'#FFF56D'} barStyle="dark-content" translucent={true} />
            {!loading &&
                <Animated.View style={[styles.container.search, { height: headerHeight }]}>
                    <View style={styles.container.search.main}>
                        <AntDesign
                            name='search1'
                            size={hp('3%')}
                            color='grey'
                            style={styles.container.search.main.icon}
                        />
                        <TextInput selectTextOnFocus={true} onFocus={() => _onpenSuggesttion()}
                            onChangeText={(e) => _onSearchVideos(e)} value={searchVideos.value} placeholder="Tìm video"
                            placeholderTextColor={'black'}
                            style={styles.container.search.main.input}
                            ref={inputRef}
                        />
                        <AntDesign
                            name={searchVideos.isVisible && searchVideos.value === '' ? 'closecircle' : 'arrowleft'}
                            size={hp('3%')}
                            color={searchVideos.isVisible && searchVideos.value === '' ? 'red' : 'grey'}
                            style={styles.container.search.main.iconRight}
                            onPress={() => _onClearSearchValue()}
                        />
                    </View>
                </Animated.View>
            }
            <ScrollView style={styles.container.body}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offset } } }],
                    { useNativeDriver: false }
                )}
            >
                <View style={styles.container.body.list}>
                    <View style={styles.container.body.list.title}>
                        <Text style={styles.container.body.list.title.text}>Video của tôi:
                            <Text style={{ color: 'black' }}>{" " + countVideos}</Text>
                        </Text>
                        <Tooltip
                            backgroundColor={colors.secondary}
                            popover={
                                <Text style={{ color: 'white' }}>
                                    Video mới sẽ được xuất bản hàng tuần, bạn có thể theo dõi các video mới trong ứng dụng này
                                </Text>
                            }
                            containerStyle={{ width: 200, height: 'auto' }}
                        >
                            <Icon name={'chat'} size={20} color={'#139487'} style={{ marginLeft: wp('3%') }} />
                        </Tooltip>
                        <TouchableOpacity onPress={() => _onhandleGoToYoutubeChannel()}
                            style={styles.container.body.list.title.youtube}
                        >
                            <Text style={styles.container.body.list.title.youtube.text}>Xem trên Youtube</Text>
                            <AntDesign name='youtube'
                                size={hp('3%')}
                                color='red'
                            />
                        </TouchableOpacity>
                    </View>
                    {renderVideos.length > 0 && renderVideos.map((video, index) => {
                        return (
                            <View key={index} style={styles.container.body.list.card}>
                                <YoutubePlayer
                                    height={hp('30%')}
                                    maxHeight={300}
                                    width={wp('95%')}
                                    webViewProps={{
                                        opacity: 0.99,
                                        renderToHardwareTextureAndroid: true,
                                        androidLayerType:
                                            Platform.OS === 'android' && Platform.Version <= 22 ? 'hardware' : 'none',
                                    }}
                                    videoId={video.snippet.resourceId.videoId}
                                />
                                <View style={styles.container.body.list.card.info}>
                                    <Text style={styles.container.body.list.card.info.title}>{video.snippet.title}</Text>
                                    <Text style={styles.container.body.list.card.info.description}>{String(video.snippet.description).length > 240 ? String(video.snippet.description).slice(0, 100) + '...' : video.snippet.description}</Text>
                                    <Text style={styles.container.body.list.card.info.time}>{'Xuất bản: ' + moment(video.snippet.publishedAt).format('DD-MM-YYYY HH:mm:ss')}</Text>
                                </View>
                            </View>
                        )
                    })}

                </View>

            </ScrollView>

            {searchVideos.isVisible &&
                <Youtube_Lession_Search searchVideos={searchVideos} setSearchVideos={setSearchVideos}
                    youtube_Videos={youtube_Videos} inputRef={inputRef}
                />
            }

            {loading &&
                <View style={styles.sending}>
                    <ActivityIndicator size="large" color="#00ff00" />
                    <Text style={styles.sending.text}>Đang tải dữ liệu, vui lòng chờ...</Text>
                </View>
            }
            <Banner />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 45,
        search: {
            width: '100%',
            // marginTop: StatusBar.currentHeight,
            //  height: hp('8%'),
            position: 'absolute',
            top: hp('2%'),
            left: 0,
            right: 0, zIndex: 10000,
            justifyContent: 'center', alignItems: 'center',
            main: {
                width: '95%',
                justifyContent: 'center', alignItems: 'center',
                icon: {
                    position: 'absolute', left: wp('3%'), zIndex: 100000,
                },
                input: {
                    width: '100%',
                    borderColor: 'grey',
                    borderWidth: 0.25,
                    color: 'black',
                    height: 'auto',
                    fontSize: hp('1.5%'),
                    paddingLeft: wp('10%')
                    , borderRadius: hp('3%'), backgroundColor: '#EEEEEE',
                },
                iconRight: {
                    position: 'absolute', right: wp('3%'), zIndex: 100000,
                }
            },
        },
        body: {
            width: '100%',
            // height: '100%',
            height: hp('80%'),
            paddingTop: StatusBar.currentHeight + hp('5%'),

            list: {
                width: '100%', paddingBottom: 100,
                height: 'auto',
                justifyContent: 'center', alignItems: 'center',
                title: {
                    width: '95%', marginBottom: hp('2%'), flexDirection: 'row',
                    borderBottomWidth: 0.25, borderBottomColor: 'grey', paddingBottom: hp('2%'),
                    text: {
                        color: 'black', fontSize: hp('1.7%'), fontWeight: 'bold',
                    },
                    youtube: {
                        width: '50%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
                        text: { color: 'black', fontSize: hp('1.5'), marginRight: wp('2%') }
                    },
                },
                card: {
                    width: '100%',
                    marginBottom: hp('4%'), borderBottomWidth: 0.25, borderBottomColor: 'grey', paddingBottom: hp('2%'),
                    justifyContent: 'center', alignItems: 'center',
                    backgroundColor: 'white',
                    info: {
                        flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '95%',
                        title: {
                            fontWeight: 'bold',
                            fontSize: hp('1.7%'),
                            color: 'black',
                            width: '100%',
                        },
                        description: {
                            fontSize: hp('1.5%'),
                            color: 'black',
                            width: '100%',
                        },
                        time: {
                            fontSize: hp('1.5%'),
                            width: '100%',
                            color: 'black',
                        },
                    },
                },
            }
        }
    },
    sending: {
        position: "absolute", width: "100%", height: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column",
        zIndex: 1000, flex: 1, backgroundColor: "#00000080",
        text: {
            color: 'white', fontWeight: 'bold',
            fontSize: hp('2%'),
            marginTop: 30,
        },
    },
})

export default YoutubeLession