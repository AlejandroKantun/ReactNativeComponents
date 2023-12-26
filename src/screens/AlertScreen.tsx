import React from 'react'
import { Alert } from 'react-native';
import { Button, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {
    const showAlert=()=>{
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {
              cancelable:true,
              onDismiss:()=>{console.log('OnDismiss')}
          }
          );
    }
  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Alert'/>
        <Button 
            title='Mostrar Alert' 
            onPress={()=>showAlert()}/>
    </View>
  )
}
