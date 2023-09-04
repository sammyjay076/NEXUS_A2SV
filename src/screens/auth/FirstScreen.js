import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const FirstScreen = ({navigation}) => {
  return (
    <View style = {{flex:1}}>
    <View style = {{justifyContent:'center', alignItems:'center', flex:1}}>
      <Text style = {{fontSize:64}}>NEXUS</Text>
    </View>

    <View style = {{justifyContent:'center',alignItems:'center', paddingBottom:'6%', margin:'5%'}}>

<TouchableOpacity 
onPress={() => {navigation.navigate("onBoarding")}}
style = {{...styles.touch, marginBottom:'5%'}}>
       
            <Text style ={{color:'white'}}>Get Started</Text>
      
        </TouchableOpacity>

<TouchableOpacity style = {{...styles.touch,  backgroundColor:'white',}}>
       
            <Text style = {{color:'#400080'}}>Account</Text>
       
        </TouchableOpacity>

    </View>
    </View>
  )
}

export default FirstScreen

const styles = StyleSheet.create({
    touch: {
        backgroundColor:'#400080',
        width:278.88,
        height:52,
        borderWidth:1,
        borderColor:'#9f66cc',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    }
})