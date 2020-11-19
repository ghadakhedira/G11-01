import React from 'react'
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import { Card, Searchbar, Appbar, TextInput, DataTable, Title, Paragraph } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Spaghetti from '../assets/spaghetti-carbonara.jpg'

const ResturantList = () => {
   
    return (
        <View style={styles.main}>        
            <StatusBar  backgroundColor="#fff" barStyle="dark-content"/>
            <View style={styles.header}> 
                <Appbar.Header theme={{ colors: {primary: "white"}}} style={{ elevation: 0}}>
                    <Appbar.Action style={{ marginRight: 0}} icon={ ()=> <Icon name="menu" size={30}/>}  />
                    <Appbar.Content title="Resturants"  style={{ marginLeft: 0}}/>
                    <Appbar.Action  style={{ marginRight: 20}} icon={ ()=> <Icon name="cart-outline" size={30}/>}  />
                </Appbar.Header>
                <View style={styles.searchBox}> 
                    <Searchbar
                        style={{fontSize: 8}}
                        // icon={()=><Icon name="barcode-scan" size={30}/>}
                        placeholder="What are you looking for?"
                    />
                </View>
            </View>
            <ScrollView style={{marginTop: 20}}> 
            <View 
            style={{
                elevation: 5
            }}> 
                <TouchableOpacity 
                    style={styles.items}
                    >
                    <Image
                        style={styles.cardImage}
                        source={Spaghetti}
                    />
                    <View style={{...styles.cardText}}> 
                        <Text
                            style={{...styles.cardTitle, paddingTop: 5}}
                        >Pizza Napoli</Text>
                        <Text
                        style={{
                            paddingTop: 5,
                            color: '#D1D6D9',
                            paddingTop: 70

                        }}>italian, pasta, pizza</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.items}
                    >
                    <Image
                        style={styles.cardImage}
                        source={Spaghetti}
                    />
                    <View style={{...styles.cardText}}> 
                        <Text
                            style={{...styles.cardTitle, paddingTop: 5}}
                        >Pizza Napoli</Text>
                        <Text
                        style={{
                            paddingTop: 5,
                            color: '#D1D6D9',
                            paddingTop: 70

                        }}>italian, pasta, pizza</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.items}
                    >
                    <Image
                        style={styles.cardImage}
                        source={Spaghetti}
                    />
                    <View style={{...styles.cardText}}> 
                        <Text
                            style={{...styles.cardTitle, paddingTop: 5}}
                        >Pizza Napoli</Text>
                        <Text
                        style={{
                            paddingTop: 5,
                            color: '#D1D6D9',
                            paddingTop: 70

                        }}>italian, pasta, pizza</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.items}
                    >
                    <Image
                        style={styles.cardImage}
                        source={Spaghetti}
                    />
                    <View style={{...styles.cardText}}> 
                        <Text
                            style={{...styles.cardTitle, paddingTop: 5}}
                        >Pizza Napoli</Text>
                        <Text
                        style={{
                            paddingTop: 5,
                            color: '#D1D6D9',
                            paddingTop: 70

                        }}>italian, pasta, pizza</Text>
                    </View>
                </TouchableOpacity>

            </View>
            </ScrollView>
        </View>

    );
  };
  const styles = StyleSheet.create({
        main: {
            position: 'relative'
        },
        header: {
            backgroundColor: '#ffffff',
            paddingBottom: 20,
        },
        searchBox: {
            width: '90%',
            alignSelf: 'center',
            paddingTop: 10
        },
        items: {
            width: '90%',
            backgroundColor: '#000',
            flexDirection: 'row',
            flex: 1,
            alignItems: 'flex-start',
            alignSelf: 'center',
            marginTop: 20,
            backgroundColor: '#fff',
            borderRadius: 4,
            elevation: 25
        },
        cardImage: {
            height: 130,
            width: 150
        },
        cardText: {
            paddingLeft: 10,
            elevation: 25
        },
        cardTitle: {
            fontSize: 17,
            fontWeight: 'bold'
        }
  })
  export default ResturantList;
