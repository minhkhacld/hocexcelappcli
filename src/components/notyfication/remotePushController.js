import React, { useEffect } from 'react'
import PushNotification, { Importance } from 'react-native-push-notification';

const RemotePushController = () => {
    useEffect(() => {
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
                console.log('TOKEN:', token)
            },
            // (required) Called when a remote or local notification is opened or received
            onNotification: function (notification) {
                console.log('REMOTE NOTIFICATION ==>', notification);
                // process the notification here     
                if (notification.title) {
                    PushNotification.localNotification({
                        channelId: `${notification.channelId}`,
                        autoCancel: true,
                        // bigText:
                        //     'This is local notification demo in React Native app. Only shown, when expanded.',
                        // subText: 'Local Notification Demo',
                        title: `${notification.title}`,
                        message: `${notification.message}`,
                        vibrate: `${notification.vibrate}`,
                        vibration: `${notification.vibration}`,
                        playSound: `${notification.playSound}`,
                        soundName: 'default',
                        actions: '["Yes", "No"]',
                        // actions: '["Go to Premium version", "Go to current version"]',
                        invokeApp: false,
                        largeIcon: "ic_launcher",
                        smallIcon: "ic_launcher",
                    });
                }
            },
            onAction: function (notification) {
                console.log("ACTION:", notification.action);
                console.log("NOTIFICATION:", notification);
                if (notification.action === "Yes") {
                    Linking.openURL('https://play.google.com/store/apps/details?id=com.scantogooglesheets');
                } else {
                    Linking.openURL('https://play.google.com/store/apps/details?id=com.hocexcel');
                }
                // process the action
            },
            onRegistrationError: function (err) {
                console.error(err.message, err);
            },
            // Android only: GCM or FCM Sender ID
            senderID: '625582448507',
            popInitialNotification: true,
            requestPermissions: true,
        })
    }, []);

    return null;
};

export default RemotePushController