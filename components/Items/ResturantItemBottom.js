import React from 'react'
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity, ScrollView, Dimensions} from 'react-native'
import { Card, Searchbar, Appbar, TextInput, DataTable, Title, Paragraph } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Spaghetti from '../assets/spaghetti-carbonara.jpg'

const ResturantItemsBottom = () => {
   
    return (
        <View style={styles.main}>
            <View style={{height:  Dimensions.get('window').height - 120}}> 
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
                            placeholder="What are you looking?"
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
                                    paddingBottom: 5
                                }}>(anima), onion,...
                            </Text>
                            <Text
                                    style={styles.cardTitle}
                            >11.99 $</Text>
                            </View>
                        </TouchableOpacity>
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
            <View style={{
                height: 120,
                backgroundColor: '#fff',
                borderTopWidth: 1,
                borderTopColor: '#E8E9ED',
                paddingTop: 20
            }}> 
            <View style={{width: '100%', backgroundColor: '#fff', height: 120}}> 
                <TouchableOpacity style={{backgroundColor: '#2DC6CE', width: '90%', paddingTop: 13 , paddingBottom: 13, alignSelf: 'center', borderRadius: 5}}>
                    <Text style={{textAlign: 'left', color: '#fff', fontSize: 20, marginLeft:7}}><Icon name="cart-outline" size={22}/> PANIER TOTAL <Text style={{paddingLeft: 30}}>11,99 $</Text></Text>
                </TouchableOpacity>
            </View>
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
  export default ResturantItemsBottom;





// export default MainComponent