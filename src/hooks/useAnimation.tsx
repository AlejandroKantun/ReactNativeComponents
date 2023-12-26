import { useRef } from "react";
import { Animated, Easing } from "react-native";


export const useAnimation=()=>{

    const opacity = useRef(new Animated.Value(0)).current;
    const top = useRef(new Animated.Value(-100)).current;
  
    const fadeIn =()=>{
      Animated.timing(opacity,
            {
              toValue:1,
              duration:300,
              useNativeDriver:true
            }
        ).start();
      
        Animated.timing(top,{
          toValue:1,
          duration:800,
          useNativeDriver:true,
          easing: Easing.bounce //Efecto de rebote en la animación 
        }).start();
    }
    const fadeOut =()=>{
      Animated.timing(opacity,
            {
              toValue:0,
              duration:300,
              useNativeDriver:true
            }
        ).start(()=> console.log('animacion termino')); //end call back
        
    }
    return{
        opacity,
        top,
        fadeIn,
        fadeOut
    }

}