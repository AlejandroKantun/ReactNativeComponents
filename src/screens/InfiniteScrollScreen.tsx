import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { HeaderTitle } from '../components/HeaderTitle'
import { FadeInImage } from '../components/FadeInImage';

export const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0,1,2,3,4,5,6,7,8,9])
  const [isLoading, setIsLoading] = useState(true)
  const loadMore=()=>{
      const newNumbersArr: number[]=[];
      for (let i=0;i<5;i++){
            newNumbersArr[i]=numbers.length+i; 
      }
      setTimeout(() => {
        setNumbers([...numbers,...newNumbersArr])
      }, 1500);
  }
  const renderItem =(item:number)=>{
      return(
          <View>
              <FadeInImage 
                uri={`https://picsum.photos/id/`+item+`/512/512.jpg`}
                style={{
                    width:'100%',
                    height:400,
                }}
              />
          </View>
      )
  }
  return (
      <View>
          <FlatList
          data={numbers}
          keyExtractor={(item)=> item.toString()}
          renderItem={({item})=> renderItem(item)}
          ListHeaderComponent={()=>( 
                                    <View style={{marginLeft:20}}>
                                        <HeaderTitle title='Infinite Scroll'/>
                                    </View>)}
          onEndReached={()=>{console.log('Reaching the end of the array'); loadMore();setIsLoading(true)}}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
              ({isLoading}
              ?<View style={stylesScreen.actIndicatorStyle}> 
                <ActivityIndicator size={40} color='Red' ></ActivityIndicator>  
              </View> 
              :null )
          }
          />
      </View>
  )
}

const stylesScreen = StyleSheet.create({
    renderItemText:{
        color:'black',
        backgroundColor:'white  ',
        height:150,
    },
    imgStyle:{
        width: '100%',
        height: 400,
    },
    actIndicatorStyle:{
        height:150,
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    }
});