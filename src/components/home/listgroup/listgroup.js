import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from 'react-redux';
import { setListItemHeaderBarName } from '../../../redux/reducer';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Listgroup = ({ navigation, ListGroupDATA }) => {
    const [listHeight, setListHeight] = useState(0);
    const dispatch = useDispatch();
    return (
        <View style={{ flex: 3 }}
        >
            <View style={styles.listGroup}>
                {
                    ListGroupDATA.length > 0 && ListGroupDATA.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.touchableOpacity} onPress={() => {
                                if (item.title === 'Shortcut') {
                                    navigation.navigate('ShortcutDetail', { item })
                                }
                                else {
                                    navigation.navigate('ListItem', { item });
                                    dispatch(setListItemHeaderBarName(item.vi));
                                }
                            }} >
                                <ListItem containerStyle={styles.content} >
                                    <Icon name={item.icon} size={40} style={styles.icon} />
                                    <ListItem.Content style={{ height: "100%", width: "100%", }}>
                                        {/* <ListItem.Title style={styles.description}>{item.vi}</ListItem.Title> */}
                                        <Text style={styles.description}>{item.vi}</Text>
                                    </ListItem.Content>
                                    <ListItem.Chevron />
                                </ListItem>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listGroup: {
        flexDirection: "column",
        justifyContent: 'space-evenly',
        alignContent: 'center',
        paddingBottom: 40,
        width: "100%",
        height: "100%",
        paddingHorizontal: 20,
    },
    touchableOpacity: {
        height: "25%"
    },
    content: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        borderRadius: 40,
        backgroundColor: "white",
    },
    description: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 14,
        // height: "100%",
        color: '#14279B',
    },
    icon: {
        color: '#14279B',
        minHeight: 40,
    }
})
export default Listgroup
