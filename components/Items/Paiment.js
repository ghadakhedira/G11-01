import React from 'react'
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput} from 'react-native'
import { Card, Searchbar, Appbar, DataTable, Title, Paragraph } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DropDownPicker from 'react-native-dropdown-picker';
import Spaghetti from '../assets/spaghetti-carbonara.jpg'

const Paiment = () => {
   const [country, setname] = React.useState();
    return (
        <ScrollView> 
        <View style={styles.main}>
                    <View > 
                        <StatusBar  backgroundColor="#fff" barStyle="dark-content"/>
                        <View style={styles.header}> 
                            <Appbar.Header theme={{ colors: {primary: "white"}}} style={{ elevation: 0}}>
                                <Appbar.Action style={{ marginRight: 0}} icon={ ()=> <Icon name="chevron-left" size={30}/>}  />
                                <Appbar.Content title="Paiment"  style={{ marginLeft: 0}}/>
                            </Appbar.Header>
                        </View>
                            <View style={{width: '100%', backgroundColor: '#fff'}}> 
                                <View style={{width: '90%', alignSelf: 'center',}}> 
                                    <View style={{ backgroundColor: '#fff'}}> 
                                        <View style={{ width: '100%'}}> 
                                            <Text style={{textAlign: 'center', fontSize: 16}}>Donnees personnelles</Text>
                                        </View>
                                        <View style={{ marginBottom: 10, marginTop: 10}}> 
                                            <Text style={{fontSize: 15, paddingBottom: 7}}>E-mail</Text>
                                            <TextInput
                                                style={{ borderWidth: 1, backgroundColor: '#fff', borderColor: '#EAEAEA', height: 43, borderRadius: 6}}
                                            />
                                        </View>
                                        <View style={{ marginBottom: 10}}> 
                                            <Text style={{fontSize: 15, paddingBottom: 7}}>GSM</Text>
                                            <TextInput
                                                style={{ borderWidth: 1, backgroundColor: '#fff', borderColor: '#EAEAEA', height: 43, borderRadius: 6}}
                                            />
                                        </View>
                                        <View style={{ marginBottom: 10}}> 
                                            <Text style={{fontSize: 15, paddingBottom: 7}}>Pays ou region</Text>
                                            <DropDownPicker
                                                items={[
                                                    {label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
                                                    {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
                                                    {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" />},
                                                ]}
                                                defaultValue={country}
                                                containerStyle={{height: 40}}
                                                style={{backgroundColor: '#fff'}}
                                                itemStyle={{
                                                    justifyContent: 'flex-start'
                                                }}
                                                dropDownStyle={{backgroundColor: '#fff'}}
                                                onChangeItem={item => setState({
                                                    country: item.value
                                                })}
                                            />
                                        </View>
                                        <View style={{ marginBottom: 10}}> 
                                            <Text style={{fontSize: 15, paddingBottom: 7}}>Adress</Text>
                                            <TextInput
                                                style={{ borderWidth: 1, backgroundColor: '#fff', borderColor: '#EAEAEA', height: 43, borderRadius: 6}}
                                            />
                                        </View>
                                        <View style={{ marginBottom: 10, paddingTop: 30, paddingBottom: 10}}> 
                                            <TouchableOpacity style={{backgroundColor: '#000', paddingVertical: 10, borderRadius: 5}}> 
                                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}> <Icon name="apple" size={25}/>Pay</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ width: '100%'}}> 
                                            <Text style={{textAlign: 'center', fontSize: 16}}>Ou payer par carte bancaire</Text>
                                        </View>
                                        <View style={{ marginBottom: 10, marginTop: 20}}> 
                                            <Text style={{fontSize: 15, paddingBottom: 7}}>Details de la carte</Text>
                                            <TextInput
                                                placeholder=" 1234 1234 1234 1234"
                                                style={{ borderWidth: 1, backgroundColor: '#fff', borderColor: '#EAEAEA', height: 43, borderRadius: 6}}
                                            />
                                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start'}}> 
                                                <TextInput
                                                    style={{ borderWidth: 1, backgroundColor: '#fff', borderColor: '#EAEAEA', height: 43, borderRadius: 6, width: '50%'}}
                                                    placeholder=" MM / YY"
                                                />
                                                <TextInput
                                                    style={{ borderWidth: 1, backgroundColor: '#fff', borderColor: '#EAEAEA', height: 43, borderRadius: 6, width: '50%'}}
                                                    placeholder=" CVC"
                                                />
                                            </View>
                                        </View>
                                        <View style={{ marginBottom: 20}}> 
                                            <Text style={{fontSize: 15, paddingBottom: 7}}>Nom du titulaire de la carte</Text>
                                            <TextInput
                                                style={{ borderWidth: 1, backgroundColor: '#fff', borderColor: '#EAEAEA', height: 43, borderRadius: 6}}
                                            />
                                        </View>
                                        <View style={{ marginBottom: 10}}> 
                                            <TouchableOpacity style={{backgroundColor: '#2A2F45', paddingVertical: 10, borderRadius: 5}}> 
                                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>Payer 60,00 $US</Text>
                                            </TouchableOpacity>
                                        </View>
                                        
                                    </View>
                                </View>
                            </View>
                    </View>        
                </View>
        </ScrollView>
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

  })
  export default Paiment;
