import React, { useState } from 'react'
import { Platform, Text } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, TextInput, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {
    const {email,name,phone,isSuscribed,onChange,form}= useForm({
        name:'',
        email:'',
        phone:'',
        isSuscribed:false
    })
    //const [text, onChangeText] = React.useState('Useless Text');
    /*
    const [form, setForm] = useState({
        name:'',
        email:'',
        phone:''
    });
    const onChangeText=(field:string, value:string)=>{
        setForm({
            ...form,
            [field]:value
          })
    }
    */
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
                <View style={styles.globalMargin}>
                
                <HeaderTitle title='Multiple text inputs'/>
                <TextInput
                    style={stylesScreen.input}
                    onChangeText={(value)=>onChange(value,'name')}
                    placeholder='Enter name'
                    autoCorrect={false}
                    autoCapitalize='words'
                />
                <TextInput
                    style={stylesScreen.input}
                    onChangeText={(value)=>onChange(value,'email')}
                    placeholder='Enter email'
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='email-address'
                />
                <View style={stylesScreen.switchRow}>
                    <Text style={stylesScreen.JSONText}> Subscribe?</Text>
                    <CustomSwitch isOn={isSuscribed} onChange={(value)=>onChange(value,'isSuscribed')}/> 
                </View>
                <HeaderTitle title='Content'/>
                <Text style={stylesScreen.JSONText}>
                    {JSON.stringify(form,null,5)}
                </Text>
                <Text style={stylesScreen.JSONText}>
                    {JSON.stringify(form,null,5)}
                </Text>
                <TextInput
                style={stylesScreen.input}
                onChangeText={(value)=>onChange(value,'phone')}
                placeholder='Phone'
                autoCorrect={false}
                keyboardType='number-pad'
        
                />
                </View>
                <View style={{marginBottom:100}}/>
        </ScrollView>
    </KeyboardAvoidingView>
    
  )
}

const stylesScreen = StyleSheet.create({
    input: {
      height: 50,
      margin: 12,
      borderWidth: 2,
      padding: 10,
      paddingHorizontal:10,
      color:'black',
      borderRadius:10,
      borderColor:'rgba(0,0,0,0.2)',
    },
    JSONText:{
        color:'black',
        fontSize:35
      },
      switchRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:15
      },
  });