import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { SectionList } from 'react-native';
import { View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", ]
    }
];

export const SectionListScreen = () => {
  return (
    <View>
        
        <SectionList
            sections={casas}
            keyExtractor={(item, index) => item + index}

            ListHeaderComponent={()=> <HeaderTitle title='Section List'/>}
            ListFooterComponent={()=>
                (
                    <View style={{marginBottom:50, marginTop:50}}>
                        <Text style={{fontSize:30, color:'black'}}>Total de casas {casas.length}</Text>
                    </View>
                )
            }
            
            renderItem={({item}) => (
                <View style={styles.item}>
                    <Text style={styles.title}>{item}</Text>
                </View>
            )}

            renderSectionHeader={({section}) => (
                <View style={{backgroundColor:'white'}}>
                    <HeaderTitle title={section.casa}/>
                </View>
              )}
            stickySectionHeadersEnabled={true}
            renderSectionFooter={({section}) => 
                <View>
                    <Text style={{color:'black',fontWeight:'bold'}}>
                        total by section: {section.data.length}
                    </Text>
                </View>}
            
            ItemSeparatorComponent={()=><ItemSeparator/>}    
            SectionSeparatorComponent ={()=><ItemSeparator/>} 
            
            showsVerticalScrollIndicator={false}
            />
    </View>
  )
}
const styles = StyleSheet.create({
    title:{
        color:'black'
    },
    item:{ 
    }
});
