import React, { useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { setItemDetailHeaderBar, setListItemHeaderBarName } from '../../../../redux/reducer';
import Banner from '../../../admob/banner';
// import { InterstitialAd } from '../../../admob/imperativeAd';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ListItems = ({ navigation, route }) => {
    const [state, setState] = useState({
        DATA: route.params.item.data,
        groupDataIndex: route.params.index,
    });
    const dispatch = useDispatch();
    const reducer = useSelector((store) => store.Reducer);

    let RemoveShortcutArr = reducer.data.map(d => d.data.filter(r => r.title !== "Shortcut")).flatMap(r => r);

    return (
        <SafeAreaView style={styles.listItemContainer}>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" />
            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                keyExtractor={(item, index) => String(index)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={state.DATA}
                renderItem={({ item, index }) => {
                    let listIndex = index
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('ListItemDetail', { item, listIndex, DATA: state.DATA });
                            dispatch(setItemDetailHeaderBar(item.title));
                        }
                        }>
                            <ListItem containerStyle={styles.listContainer} >
                                <View style={styles.iconGroup}>
                                    <Icon name={item.icon} size={hp('3%')} style={styles.icon} />
                                </View>
                                <ListItem.Content style={styles.content}>
                                    <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
                                    <ListItem.Subtitle style={styles.description}>{String(item.description_vi).slice(0, 120) + '...'}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
                    )
                }}
            />
            <Icon name="chevron-double-right" size={hp('6%')} style={styles.goforwardIcon} onPress={() => {
                if (state.groupDataIndex < RemoveShortcutArr.length - 1) {
                    setState({
                        ...state,
                        DATA: RemoveShortcutArr[state.groupDataIndex + 1].data,
                        groupDataIndex: state.groupDataIndex + 1,
                    });
                    dispatch(setListItemHeaderBarName(RemoveShortcutArr[state.groupDataIndex + 1].vi))
                } else {
                    setState({
                        ...state,
                        DATA: RemoveShortcutArr[0].data,
                        groupDataIndex: 0,
                    });
                    dispatch(setListItemHeaderBarName(RemoveShortcutArr[0].vi))
                };
                // InterstitialAd();
            }} />
            <Banner />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    listItemContainer: {
        flex: 1, paddingBottom: 45,
        backgroundColor: "white",
        color: "black",
    },
    contentContainerStyle: { padding: 10 },
    listContainer: { marginBottom: 10, height: hp('8%'), borderRadius: 5 },
    content: { marginLeft: 0 },
    iconGroup: { justifyContent: 'center', alignItems: 'center', width: wp('10%') },
    icon: { color: '#14279B' },
    title: { fontSize: hp('1.7%'), fontWeight: 'bold', },
    description: { fontSize: hp('1.5%'), color: "black" },
    goforwardIcon: {
        backgroundColor: 'transparent',
        color: '#14279B',
        bottom: '50%',
        right: 0,
        zIndex: 1000,
        position: 'absolute',
    },
    adMobBanner: {
        width: '100%',
        justifyContent: 'center', alignItems: 'center',
    },

})

export default ListItems;
