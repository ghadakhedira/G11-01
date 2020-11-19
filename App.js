import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './components/MainScreen'
import { DrawerContent } from './components/DrawerContent'
const Drawer = createDrawerNavigator()
const App = props =>{
  return(
    <NavigationContainer>
      <Drawer.Navigator drawerContent={ props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={ MainScreen }/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App