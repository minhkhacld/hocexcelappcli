import React from 'react';
import PushNotification, { Importance } from 'react-native-push-notification';
import FlatListData from '../../asset/data/function_data';

// export const LocalNotification = () => {
//     PushNotification.createChannel(
//         {
//             channelId: "your-channel-id", // (required)
//             channelName: "My channel", // (required)
//             channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
//             playSound: false, // (optional) default: true
//             soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
//             importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
//             vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
//         },
//         (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
//     );
//     PushNotification.localNotification({
//         channelId: "your-channel-id",
//         autoCancel: true,
//         bigText:
//             'This is local notification demo in React Native app. Only shown, when expanded.',
//         subText: 'Local Notification Demo',
//         title: 'Local Notification Title',
//         message: 'Expand me to see more',
//         vibrate: true,
//         vibration: 300,
//         playSound: true,
//         soundName: 'default',
//         // actions: '["Yes", "No"]',
//         largeIcon: "ic_launcher",
//         smallIcon: "ic_launcher",
//         repeatType: "day",
//     });
// };

export const SchemaNotifications = () => {
   
    const ExcelFn = FlatListData[0].data[0].data;
    const randomNumber = () => {
        return Math.round(Math.random() * (6 - 0) + 0);
    }
    PushNotification.createChannel(
        {
            channelId: "hocexcel123", // (required)
            channelName: "Schedule learning excel", // (required)
            channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
            playSound: true, // (optional) default: true
            soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
            importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
            vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
        },
        (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
    PushNotification.localNotificationSchedule({
        channelId: "hocexcel123",
        //... You can use all the options from localNotifications
        bigText: `${ExcelFn[randomNumber()].description_vi}`,
        subText: '',
        title: 'Bạn đã học excel hôm nay chưa, hãy quay lại và ôn tập',
        message: "Đừng quên học excel hằng ngày, kiên trì sẽ giúp bạn rèn luyện kỹ năng excel thuần thục", // (required)
        // date: new Date(Date.now() + 60 * 60 * 24 * 1000), // in 60 secs
        date: new Date(Date.now() + 6 * 1000), // in 60 secs
        allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
        /* Android Only Properties */
        repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
        repeatType: "day",
        largeIcon: "ic_launcher",
        smallIcon: "ic_launcher",
        playSound: true,
        soundName: 'default',
        vibrate: true,
        vibration: 300,
        actions: '["Yes", "No"]',
    });

}



