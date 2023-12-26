import React, { useState } from 'react'
import { Text } from 'react-native';
import { Platform, StyleSheet, Switch, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive:true,
    isHungry:false,
    isHappy:true

  });

  const onChange=(value:boolean, field: keyof typeof state)=>{
      setState({
        ...state,
        [field]:value
      })
  }
  return (
      <View style={styles.mainContainer}>
        <View style={styles.switchRow}>
          <Text style={styles.JSONText}> Is Active</Text>
          <CustomSwitch isOn={state.isActive} onChange={(value)=>onChange(value,'isActive')}/> 
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.JSONText}> Is Hungry</Text>
          <CustomSwitch isOn={state.isHungry} onChange={(value)=>onChange(value,'isHungry')}/> 
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.JSONText}> Is Happy</Text>
          <CustomSwitch isOn={state.isHappy} onChange={(value)=>onChange(value,'isHappy')}/> 
        </View>
       <Text style={styles.JSONText}>
         {JSON.stringify(state,null,5)}
       </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    switchRow:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginVertical:15
    },
    mainContainer:{
        marginHorizontal:20
    },
    JSONText:{
      color:'black',
      fontSize:25
    }
});