import React from 'react'
import { RefreshControl, ScrollView, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PullToRefresh = () => {
    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<string>()
    const {top}=useSafeAreaInsets()
    const onRefresh=()=>{
        setRefreshing(true);
        setTimeout(() => {
            console.log('refrshing completed');
            setRefreshing(false);
            setData('Hi, data loaded successfully');
        }, 1500);
    }
  return (
      <ScrollView
        style={{marginTop:refreshing?top:0}}
        refreshControl={
        <RefreshControl
            refreshing={refreshing}
            onRefresh={()=>onRefresh()}
            progressViewOffset={100}
            colors={['red','blue']}
            title='adquiring data...'
            titleColor='black'
        />
        }>
         <View style={styles.globalMargin}>
            <HeaderTitle title='Pull to refresh'/>
            {
                data?<HeaderTitle title={data}/>:null
            }

        </View> 
      </ScrollView>
    
  )
}
