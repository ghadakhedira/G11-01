import React from 'react'
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import { Card, Searchbar, Appbar, TextInput, DataTable, Title, Paragraph } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Spaghetti from '../assets/spaghetti-carbonara.jpg'

const ResturantItems = () => {
   
    return (
        <View style={styles.main}>        
            <StatusBar  backgroundColor="#fff" barStyle="dark-content"/>
            <View style={styles.header}> 
                <Appbar.Header theme={{ colors: {primary: "white"}}} style={{ elevation: 0}}>
                    <Appbar.Action style={{ marginRight: 0}} icon={ ()=> <Icon name="chevron-left" size={30}/>}  />
                    <Appbar.Content title="Pizza Napoli"  style={{ marginLeft: 0}}/>
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
            <View style={styles.tab}> 
                <Text
                style={{
                    width: '25%',
                    textAlign: 'center',
                    paddingTop: 10,
                    paddingBottom: 10,
                    fontSize: 14,
                    fontWeight: 'bold' 
                }}>Pizza</Text>
                <View style={{
                    width: '50%'
                }}> 
                    <Text style={{
                        width: '98%',
                        textAlign: 'center',
                        backgroundColor: '#5E72E3',
                        color: '#ffffff',
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 4,
                        fontSize: 14,
                        fontWeight: 'bold'                         
                    }}> 
                        Fresh Pasta and Risotto
                    </Text>
                </View>                
                <Text
                style={{
                    width: '25%',
                    textAlign: 'center',
                    paddingTop: 10,
                    paddingBottom: 10,
                    fontSize: 14,
                    fontWeight: 'bold'   
                }}>Lasagna</Text>
            </View>
            <View style={{marginTop: 55}}> 
            <ScrollView > 
                <View 
                style={{
                    elevation: 5
                }}> 
                <View > 
                    <TouchableOpacity 
                        style={{...styles.items}}
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
                        width: '90%',
                        alignSelf: 'center',
                    }}> 
                        <View style={{ paddingTop: 20}}> 
                            <Text style={{fontSize: 17}}>QUANTITY</Text>
                        </View>
                        <View style={{ paddingTop: 20, paddingBottom: 30, flex: 1, flexDirection: 'row', alignItems: 'center'}}> 
                            <Text style={{fontSize: 15}}>2 items</Text>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 220}}> 
                                <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal:10, borderWidth: 1, borderColor: '#5E72E3'}}><Text>-</Text></TouchableOpacity>
                                <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal:10, backgroundColor: '#5E72E3', borderWidth: 1, borderColor: '#5E72E3'}}><Text style={{ color: '#fff'}}>+</Text></TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            width: '100%'
                        }}> 
                         <TouchableOpacity
                                style={{backgroundColor: '#5E72E3', paddingVertical: 10, elevation: 5, borderRadius: 4}}
                            >
                                <Text style={{textAlign: 'center', paddingLeft: 15, color: '#fff'}}>ADD TO ORDER   23.98 $</Text>
                        </TouchableOpacity> 
                        </View>
                    </View>
                </View>
                <TouchableOpacity 
                    style={styles.items}
                >
                    <Image
                        style={styles.cardImage}
                        source={Spaghetti}
                    />
                    <View style={styles.cardText}> 
                        <Text
                            style={{...styles.cardTitle, marginTop:5}}
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
                            paddingBottom: 5,

                        }}>(anima), onion,...</Text>
                        <Text
                            style={styles.cardTitle}
                        >11.99 $</Text>
                    </View>
                </TouchableOpacity>   
                </View>
            </ScrollView>
            </View>
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
        tab: {
            width: '100%',
            paddingTop: 20,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
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
  export default ResturantItems;