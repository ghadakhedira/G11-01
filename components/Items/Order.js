import React from 'react'
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import { Card, Searchbar, Appbar, TextInput, DataTable, Title, Paragraph } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Spaghetti from '../assets/spaghetti-carbonara.jpg'

const Order = () => {

    return (
        <View style={styles.main}>        
            <StatusBar  backgroundColor="#fff" barStyle="dark-content"/>
            <View style={styles.header}> 
                <Appbar.Header theme={{ colors: {primary: "white"}}} style={{ elevation: 0}}>
                    <Appbar.Action style={{ marginRight: 0}} icon={ ()=> <Icon name="chevron-left" size={30}/>}  />
                    <Appbar.Content title="Order"  style={{ marginLeft: 0}}/>
                </Appbar.Header>
            </View>
            <View style={{
                marginTop: 25
            }}> 
                <Text
                    style={{
                        fontSize: 15,
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}
                >Cart Subtotal: <Text style={{ color: '#5E72E3'}}>53.96$</Text></Text>
            </View>
            <View
                style={{
                    width: '85%',
                    alignSelf: 'center',
                    marginTop: 15
                }}
            > 
                <TouchableOpacity
                style={{
                    backgroundColor: '#000',
                    paddingVertical: 13,
                    borderRadius: 5
                }}> 
                    <Text style={{textAlign: "center", color: "#fff"}}>PROCEED TO CHECKOUT</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{marginTop: 10}}> 
            <View 
            style={{
                elevation: 5
            }}> 
                <View> 
                    <TouchableOpacity 
                        style={styles.items}
                        >
                        <Image
                            style={styles.cardImage}
                            source={Spaghetti}
                        />
                        <View style={styles.cardText}> 
                            <Text
                                style={{...styles.cardTitle, paddingTop:5}}
                            >Spagthetti Carbonara</Text>
                            <Text
                                style={styles.cardTitle}
                            >(450g)</Text>
                            <Text
                            style={{
                                paddingTop: 5
                            }}>freash pasta, cream</Text>
                        <Text
                            style={{
                                paddingBottom: 5
                            }}>(anima), onion,...
                        </Text>
                        <Text
                                style={styles.cardTitle}
                        >11.99 $</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        width: '80%',
                        alignSelf: 'center',
                        marginTop: 20,
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'flex-start'
                    }}> 
                        <View style={{
                            width: '40%'
                        }}> 
                         <TouchableOpacity
                                style={{backgroundColor: '#DCDCDC', paddingVertical: 10, flex: 1, flexDirection: 'row', alignItems: 'flex-start'}}
                            >
                                <Text style={{textAlign: 'left', paddingLeft: 15}}>2</Text>
                                <Icon style={{marginLeft: 60}} name="chevron-down" size={20}/>
                        </TouchableOpacity> 
                        </View>
                        <View style={{
                            width: '60%',
                            marginLeft: 10
                            
                        }}>
                            <TouchableOpacity
                                style={{backgroundColor: '#DCDCDC', paddingVertical: 10}}
                            >
                                <Text style={{textAlign: 'center'}}> DELETE</Text>
                            </TouchableOpacity> 
                        </View>
                    </View>
                </View>
                <View> 
                    <TouchableOpacity 
                        style={styles.items}
                        >
                        <Image
                            style={styles.cardImage}
                            source={Spaghetti}
                        />
                        <View style={styles.cardText}> 
                            <Text
                                style={{...styles.cardTitle, paddingTop:5}}
                            >Spagthetti Carbonara</Text>
                            <Text
                                style={styles.cardTitle}
                            >(450g)</Text>
                            <Text
                            style={{
                                paddingTop: 5
                            }}>freash pasta, cream</Text>
                        <Text
                            style={{
                                paddingBottom: 5
                            }}>(anima), onion,...
                        </Text>
                        <Text
                                style={styles.cardTitle}
                        >11.99 $</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        width: '80%',
                        alignSelf: 'center',
                        marginTop: 20,
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'flex-start'
                    }}> 
                        <View style={{
                            width: '40%'
                        }}> 
                         <TouchableOpacity
                                style={{backgroundColor: '#DCDCDC', paddingVertical: 10, flex: 1, flexDirection: 'row', alignItems: 'flex-start'}}
                            >
                                <Text style={{textAlign: 'left', paddingLeft: 15}}>2</Text>
                                <Icon style={{marginLeft: 60}} name="chevron-down" size={20}/>
                        </TouchableOpacity> 
                        </View>
                        <View style={{
                            width: '60%',
                            marginLeft: 10
                            
                        }}>
                            <TouchableOpacity
                                style={{backgroundColor: '#DCDCDC', paddingVertical: 10}}
                            >
                                <Text style={{textAlign: 'center'}}> DELETE</Text>
                            </TouchableOpacity> 
                        </View>
                    </View>
                </View>
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
            elevation: 5
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
  export default Order;
