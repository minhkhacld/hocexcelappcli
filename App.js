
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Redux
import { Provider, useSelector } from 'react-redux';
import store from './src/redux/store';

//Component
import Home from './src/components/home/home';
import ListItems from './src/components/home/cardgroup/function/ListItem';
import ListItemDetail from './src/components/home/cardgroup/function/detail/listItemDetail';
import ShortcutDetail from './src/components/home/listgroup/shortcut/shortcut';
import About from './src/components/about/about';
import AboutDetail from './src/components/about/detail/aboutDetail';
import QuizGame from './src/components/quizgame/quizgame';
import QuizgameResult from './src/components/quizgame/result';
import ContactAndSupport from './src/components/about/contactAndSupport/contactAndSupport';
import YoutubeLession from './src/components/youtube/youtube.Lession'
//Icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const QuizGameStack = createNativeStackNavigator();
const AboutStack = createNativeStackNavigator();


const App = () => {

  const HomeStackScreen = () => {
    const reducer = useSelector((store) => store.Reducer);
    return (
      <HomeStack.Navigator initialRouteName="Home" >
        <HomeStack.Screen name="Home" component={Home} options={{
          headerShown: false,
        }} />
        <HomeStack.Screen name="ListItem" component={ListItems} options={({ route }) => ({ title: reducer.listItemHeaderBarName })} />
        <HomeStack.Screen name="ListItemDetail"
          options={{
            title: reducer.itemDetailHeaderBar,
          }} component={ListItemDetail} />
        <HomeStack.Screen name="ShortcutDetail" component={ShortcutDetail} options={{ title: "Phím tắt và công dụng", headerShown: false, }} />
      </HomeStack.Navigator>
    )
  };

  const QuizGameStackScreen = ({ navigation }) => {
    return (
      <QuizGameStack.Navigator initialRouteName="QuizGame" >
        <QuizGameStack.Screen name="QuizGame"
          options={{
            headerShown: false,
          }} component={QuizGame} />
        <QuizGameStack.Screen name="QuizGameResult" component={QuizgameResult} options={{
          title: "Kết quả", headerStyle: {
            backgroundColor: '#1E3163'
          }, headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, headerShadowVisible: false,
        }} />
      </QuizGameStack.Navigator >
    )
  };


  const YouTubeLessonScreen = ({ navigation }) => {
    return (
      <QuizGameStack.Navigator initialRouteName="YoutubeLesson" >
        <QuizGameStack.Screen name="YoutubeLesson"
          options={{
            headerShown: false,
          }} component={YoutubeLession} />
      </QuizGameStack.Navigator >
    )
  };

  const AboutStackScreen = ({ navigation }) => {
    return (
      <AboutStack.Navigator initialRouteName="About"
      >
        <AboutStack.Screen name="About" component={About} options={{
          title: "Giới thiệu",
        }} />
        <AboutStack.Screen name="AboutDetail" component={AboutDetail} options={({ route }) => ({ title: route.params.item.title })} />
        <AboutStack.Screen name="ContactAndSupport" component={ContactAndSupport} options={({ route }) => ({ title: "Liên hệ và hỗ trợ" })} />
      </AboutStack.Navigator>
    )
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarPosition="bottom"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'HomeTab') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'AboutTab') {
                iconName = focused ? 'cog' : 'cog';
              }
              else if (route.name === 'QuizGameTab') {
                iconName = focused ? 'gamepad-variant-outline' : 'gamepad-variant-outline';
              }
              else if (route.name === 'YouTubeTab') {
                iconName = focused ? 'youtube' : 'youtube';
              }
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: route.name === 'HomeTab' ? "grey" : route.name === 'QuizGameTab' ? 'white' : route.name === 'YouTubeTab' ? "black" : "white",
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
              borderTopWidth: 0,
              backgroundColor: route.name === 'HomeTab' ? "white" : route.name === 'QuizGameTab' ? '#1E3163' : route.name === 'YouTubeTab' ? "#FFF56D" : "#009DAE",
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              height: 45,
              position: 'absolute',
              left: 0,
              bottom: 0,
              right: 0
            },
          }
          )}
        >
          <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{ headerShown: false, tabBarShowLabel: false }
          } />
          <Tab.Screen name="QuizGameTab" component={QuizGameStackScreen} options={{ headerShown: false, tabBarShowLabel: false }
          } />
          <Tab.Screen name="YouTubeTab" component={YouTubeLessonScreen} options={{ headerShown: false, tabBarShowLabel: false }
          } />
          <Tab.Screen name="AboutTab" component={AboutStackScreen} options={{
            headerShown: false, tabBarShowLabel: false
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider >
  );
};



export default App;