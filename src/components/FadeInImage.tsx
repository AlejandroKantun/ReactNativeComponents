import React, { useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
interface Props{
    uri:string,
    style:StyleProp<ImageStyle> //
}
export const FadeInImage = ({uri,style}:Props) => {
    const {fadeIn,opacity}=useAnimation()
    const [isLoading, setiIsLoading] = useState(true);
    const finishLoading = ()=>{
        fadeIn();
        setiIsLoading(false);
    }
  return (
      <View style={{
                    justifyContent:'center',
                    alignItems:'center' 
      }}>
            {isLoading&& <ActivityIndicator color={'black'} size={30}/>}
            <Animated.Image
                        source={{
                                    uri: uri 
                                    }}
                        style={{
                            ...style as any,
                            opacity
                        }}
                        onLoadEnd={()=>{ finishLoading()}}
            />
      </View>
        

  )
}
