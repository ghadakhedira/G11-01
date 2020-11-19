import React from 'react'
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity, ScrollView, Dimensions} from 'react-native'
import { Appbar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Chicken from '../assets/chicken.png'
import Fish from '../assets/fish.png'
import Bread from '../assets/bread.png'
import Apple from '../assets/apple.png'
import Symbol from '../assets/symbol.png'
import tShirt from '../assets/t-shirt.png'
import App from '../../App'


const Accueil = () => {

    return (
        <View style={styles.main}>
            <View style={{height:  Dimensions.get('window').height - 120}}> 
                <StatusBar  backgroundColor="#fff" barStyle="dark-content"/>
                <View style={styles.header}> 
                    <Appbar.Header theme={{ colors: {primary: "white"}}} style={{ elevation: 0}}>
                        <Appbar.Action style={{ marginRight: 0}} icon={ ()=> <Icon name="menu" size={30}/>}  />
                        <Appbar.Content title=""  style={{ marginLeft: 0}}/>
                        <Appbar.Action  style={{ marginRight: 20}} icon={ ()=> <Icon name="diving-scuba-flag" size={30}/>}  />
                    </Appbar.Header>
                </View>
                <View> 
                <ScrollView> 
                <View 
                style={{
                    elevation: 5
                }}> 
                    <TouchableOpacity 
                        style={styles.items}
                        >
                        <Image
                            style={styles.cardImage}
                            source={Chicken}
                        />
                        <View style={{...styles.cardText}}>
                            <Text style={{fontSize: 22}}>| 
                                <Text
                                    style={{...styles.cardTitle, paddingTop: 7}}
                                > BOUCHERIE</Text>    
                            </Text> 

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.items}
                        >
                        <Image
                            style={styles.cardImage}
                            source={Fish}
                        />
                        <View style={{...styles.cardText}}>
                            <Text style={{fontSize: 22}}>| 
                                <Text
                                    style={{...styles.cardTitle, paddingTop: 7}}
                                > POISSONINNERIE</Text>    
                            </Text> 

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.items}
                        >
                        <Image
                            style={styles.cardImage}
                            source={Bread}
                        />
                        <View style={{...styles.cardText}}>
                            <Text style={{fontSize: 22}}>| 
                                <Text
                                    style={{...styles.cardTitle, paddingTop: 7}}
                                > BOULANGERIE</Text>    
                            </Text> 

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.items}
                        >
                        <Image
                            style={styles.cardImage}
                            source={Apple}
                        />
                        <View style={{...styles.cardText}}>
                            <Text style={{fontSize: 22}}>| 
                                <Text
                                    style={{...styles.cardTitle, paddingTop: 7}}
                                > EPICERIE</Text>    
                            </Text> 

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.items}
                        >
                        <Image
                            style={styles.cardImage}
                            source={Symbol}
                        />
                        <View style={{...styles.cardText}}>
                            <Text style={{fontSize: 22}}>| 
                                <Text
                                    style={{...styles.cardTitle, paddingTop: 7}}
                                > RESTAURANTS</Text>    
                            </Text> 

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.items}
                        >
                        <Image
                            style={styles.cardImage}
                            source={tShirt}
                        />
                        <View style={{...styles.cardText}}>
                            <Text style={{fontSize: 22}}>| 
                                <Text
                                    style={{...styles.cardTitle, paddingTop: 7}}
                                > VETEMENT</Text>    
                            </Text> 

                        </View>
                    </TouchableOpacity>
                </View>
                </ScrollView>
                </View>
            </View>        

            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'flex-start',
                height: 120,
                backgroundColor: '#fff',
                borderTopWidth: 1,
                borderTopColor: '#E8E9ED',
                paddingTop: 20
            }}> 
            <View style={{width: '50%', backgroundColor: '#fff', height: 120}}> 
                <TouchableOpacity style={{backgroundColor: '#2DC6CE', width: '80%', paddingTop: 13 , paddingBottom: 13, alignSelf: 'center', borderRadius: 5}}><Text style={{textAlign: 'center', color: '#fff', fontSize: 17, fontWeight: 'bold',}}>LIVREUR</Text></TouchableOpacity>
            </View>
            <View style={{width: '50%',  backgroundColor: '#fff',  height: 120}}> 
                <TouchableOpacity style={{backgroundColor: '#2DC6CE', width: '80%', paddingTop: 13 , paddingBottom: 13, alignSelf: 'center', borderRadius: 5}}><Text style={{textAlign: 'center', color: '#fff', fontSize: 17, fontWeight: 'bold'}}>COMMERCANT</Text></TouchableOpacity>
            </View>
            </View>
        </View>

    );
  };
  const styles = StyleSheet.create({
        main: {
        },
        header: {
            backgroundColor: '#ffffff',
            paddingBottom: 20,
        },
        items: {
            width: '90%',
            backgroundColor: '#000',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
            alignSelf: 'center',
            marginTop: 20,
            backgroundColor: '#fff',
            borderRadius: 4,
            elevation: 5,
            paddingLeft: 15,
            paddingTop: 10
        },
        cardImage: {
            height: 40,
            width: 40
        },
        cardText: {
            paddingLeft: 10,
            elevation: 25
        },
        cardTitle: {
            paddingLeft:10,
            fontSize: 22,
        }
  })
  export default Accueil;

