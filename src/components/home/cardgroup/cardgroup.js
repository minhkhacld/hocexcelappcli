import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from 'react-redux';
import { setListItemHeaderBarName } from '../../../redux/reducer';

const CardGroup = ({ navigation, CardGroupDATA }) => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={styles.cardGroup}
        >
            <LinearGradient colors={['#FF3CAC', '#784BA0', '#2B86C5']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                style={styles.background}
            >
                <View style={styles.fakeView} >
                    <FlatList
                        contentContainerStyle={[styles.contentContainerStyle]}
                        numColumns={CardGroupDATA.length / 2}
                        initialNumToRender={5}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={CardGroupDATA}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={[styles.content,]}
                                >
                                    <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                                        navigation.navigate('ListItem', { item, index });
                                        dispatch(setListItemHeaderBarName(item.vi));
                                    }}>
                                        <View style={styles.iconGroup}>
                                            <View style={styles.iconBorder}>
                                                <Icon name={item.icon} style={styles.icon} size={hp('6%')} />
                                            </View>
                                        </View>
                                        <View style={styles.title}>
                                            <Text style={styles.vi}>{item.vi}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                        }
                        keyExtractor={(item, index) => String(index)}
                    />
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cardGroup: {
        flex: 3,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    fakeView: {
        borderTopLeftRadius: 40,
        backgroundColor: '#F2F2F2',
        flex: 1,
    },
    contentContainerStyle: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    content: {
        width: '50%',
        // height: 140,
        height: hp('18%'),
        minHeight: 100,
        borderRadius: 30,
        justifyContent: 'space-evenly',
        alignItems: 'center',      
    },
    touchableOpacity: {
        width: '70%',
        height: '90%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    iconGroup: {
        height: '65%',
        width: '65%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBorder: {
        borderColor: '#14279B',
        borderWidth: 1,
        padding: 10,
        borderRadius: 25,
    },
    icon: { color: '#14279B' },
    title: {
        height: '35%',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

    },
    vi: {
        fontSize: hp('1.7%'),
        width: "90%",
        flex: 1, flexWrap: 'wrap',
        textAlign: 'center',
        color: '#14279B',

    },

})
export default CardGroup

