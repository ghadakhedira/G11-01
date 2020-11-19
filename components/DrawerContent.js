import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { DrawerContentScrollView, 
         DrawerItem        
} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar, Caption, Drawer, Paragraph, Title } from 'react-native-paper'
import Bell from './Icons/bell.png'
import Home from './Icons/home.png'
import Basket from './Icons/basket.png'
export function DrawerContent(props) {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView>
                <View style={styles.drawerContent}> 
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 30}}>
                            <Avatar.Image
                                // source={{
                                //     uri: ''
                                // }}
                                size={50}
                            />
                            <View style={{
                                marginLeft: 15,
                                flexDirection: 'column'
                            }}> 
                                <Title style={{...styles.title, fontSize: 32, color: '#5E72E3'}}>DRINGO</Title>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.middleDrawerSection}>
                    <DrawerItem 
                        icon={({color, size}) =>(
                            <Image 
                                style ={{ width: 20, height: 20}}
                                source={Home}
                            />
                        )}
                        label="Home"
                        onPress={ ()=> {

                        }}
                    />
                    <DrawerItem 
                        icon={({color, size}) =>(
                            <Image 
                                style ={{ width: 20, height: 20}}
                                source={Basket}
                            />
                        )}
                        label="My Orders"
                        onPress={ ()=> {

                        }}
                    />
                    <DrawerItem 
                        icon={({color, size}) =>(
                            <Image 
                                style ={{ width: 20, height: 20}}
                                source={Bell}
                            />
                        )}
                        label="Notifications"
                        onPress={ ()=> {

                        }}
                    />
                    <DrawerItem 
                        icon={({color, size}) =>(
                            <Icon
                                name="power"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Profile"
                        onPress={ ()=> {

                        }}
                    />
                    </Drawer.Section> 
                </View>
            </DrawerContentScrollView>
            <View style={{...styles.bottomDrawerSection}}>
                <Text style={{ textAlign:'center' }}>v1.0</Text>
            </View>  
        </View>
    )
}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      marginTop: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    middleDrawerSection: {
        marginBottom: 145,
        paddingBottom: 70
    },
    bottomDrawerSection: {
        marginBottom: 145,
        paddingTop: 10,
        textAlign: 'center',
        borderTopWidth: 1,
        borderTopColor: '#f4f4f4'
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });