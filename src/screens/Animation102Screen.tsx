import React, { useRef } from 'react'
import { PanResponder } from 'react-native';
import { Animated } from 'react-native';
import { StyleSheet, View } from 'react-native'

export const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder =PanResponder.create({
    onStartShouldSetPanResponder:()=>true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ],{useNativeDriver: false}
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });
  return (
    <View style={styles.container}>
        <Animated.View 
        {...panResponder.panHandlers}
        style={[pan.getLayout(),styles.blueBox]}
        />    
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    blueBox:{
        backgroundColor:'#75CEDB',
        width:150,
        height:150,
    }
});