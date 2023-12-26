import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Modal Screen'/>
        <Button
            title='Open Modal'
            onPress={()=>{console.log('has been pressed'); setIsVisible(true)}}
        />
        <Modal
            animationType='fade'
            visible={isVisible}
            transparent={true}
            >
            <View
                style={stylesScreen.modalView}
                >
                <View
                    style={stylesScreen.modalContainer}
                        >
                    <HeaderTitle title='Modal'/>
                    <Text style={stylesScreen.textModal}>
                        This is the body for modal screen
                    </Text>
                    <Button 
                        title='Close modal'
                        onPress={()=>{setIsVisible(false)}}
                        />
                </View>
                

            </View>
        </Modal>
    </View>
  )
}

const stylesScreen = StyleSheet.create({
    modalView:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.3)',
        alignItems:'center',
        justifyContent:'center',
      
    },
    modalContainer:{
        backgroundColor:'white',
        height:210,
        width:210,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.25,
        elevation:10,
    },
    textModal:{
        color:'black',
        marginBottom:20,
        opacity:0.6
    },
    
});
