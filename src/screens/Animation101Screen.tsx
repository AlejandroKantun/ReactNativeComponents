import React, { useRef } from 'react'
import { Animated, Button, StyleSheet, View,Easing } from 'react-native'
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {fadeIn,fadeOut,opacity,top} = useAnimation();
  
  return (
    <View style={{...styles.container}}>
        <Animated.View 
        style={{...styles.purpleBox, 
                  opacity,
                  transform:[{
                    translateY:top
                  }]}}
        />
          <Button title='fade in'
          onPress={fadeIn}/>
          <Button title='fade out'
          onPress={fadeOut}/>
    </View>
  )
}

const styles = StyleSheet.create({
    purpleBox:{
        backgroundColor:'#5856D6',
        width:150,
        height:150,
        
    },
    container:{
      flex:1,
      justifyContent:'center',
        alignItems:'center'
    }
});