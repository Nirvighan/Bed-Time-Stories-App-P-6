import {
  StatusBar
} from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {
  createAppContainer
} from 'react-navigation';
import {
  createBottomTabNavigator
} from 'react-navigation-tabs';

import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen';
import AppHeader from './AppHeader';

export default class App extends React.Component {

  render() {
    return ( 
      
        
      <AppContainer/>
      
      
    );
  }

}

const TabNavigator = createBottomTabNavigator({
  ReadStory: {
    screen: ReadScreen
  },
  WriteYourOwn: {
    screen: WriteScreen
  }
  
}

  ,{defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>
    {
      const routeName=navigation.state.routeName;
      console.log(routeName)
      if(routeName==='WriteYourOwn')
      {
        return(
        <Image source={require('./writing image 2.png')}
        style={{width:40,height:40}}/>
         )
      }
      else if (routeName==='ReadStory')
      {
        return(
          <Image source={require('./reading img 2.png')}
          style={{width:40,height:40}}/>
           )
          }
        }
      })
    }
)

const AppContainer = createAppContainer(TabNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});