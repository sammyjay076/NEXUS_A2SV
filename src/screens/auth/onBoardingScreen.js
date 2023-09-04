import { StyleSheet, Text, TextInput,StatusBar, View,Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = ({navigation}) => {

    const DotComponent = ({selected}) => {
      return(
        <View>
           <StatusBar
      barStyle = "Light-Content"
      backgroundColor='#dbc7f0'
      />
      <View 
     
      style={{ width: 16,                     // Equivalent to "w-4" (4 * 4 = 16)
          height: 16,                    // Equivalent to "h-4" (4 * 4 = 16)
          marginHorizontal: 4,           // Equivalent to "mx-1" (1 * 4 = 4)
          flexDirection: 'row',          // Equivalent to "flex"
          alignItems: 'center',          // Equivalent to "items-center"
          justifyContent: 'center',     // Equivalent to "justify-center"
          borderRadius: 8,               // Equivalent to "rounded-full" (half of width)
          borderWidth: selected ? 1 : 0, // Conditionally add a border (1 if selected, 0 otherwise)
          borderColor: '#ef4444',        // Equivalent to "border-red-400"
          padding: selected ? 8 : 0,     // Conditionally add padding (8 if selected, 0 otherwise)
          }}


      >
        <View 

        style = {{
          width: 8,                        // Equivalent to "w-2" (2 * 4 = 8)
            height: 8,                       // Equivalent to "h-2" (2 * 4 = 8)
            backgroundColor: selected ? '#ef4444' : '#f87171',  // Conditionally set background color
            borderRadius: 4,                // Equivalent to "rounded-full" (half of width)
        }}
        >
  
        </View>
  
      </View>
      </View>
      )
    }
    return (
  
      
   
      <Onboarding
      onSkip = {() => (navigation.navigate(""))}
      onDone = {() => (navigation.navigate(""))}
      DotComponent = {DotComponent}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require("../../../assets/tired female student sitting with book on her face.png")} 
            style={styles.imageContainer}
        />,
        title: 'Welcome to Nexus',
        subtitle: 'Exercise your franchise, let your voice be heard with the right vote',
      },
      
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../../assets/Man standing near the board with business analytics.png')}
            style={styles.imageContainer}
        />,
        title: 'Monitor The Elections',
        subtitle: 'Follow the election stats as voters vote in real time without missing out',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../../assets/business account.png')} 
            style={{...styles.imageContainer,borderRadius:72/2 }}
      
        />,
        title: 'Secured & Transparent',
        subtitle: 'No more rigging', 
      },
  
    ]}
  />

    )
  }
  
  export default OnboardingScreen
  
   const styles = StyleSheet.create({
  
//       styledButtonSignUp: {
//           backgroundColor: "#39ed66",
//           alignContent: "center",
//           justifyContent:"center",
//           borderRadius:12,
//           borderWidth:1,
//           borderColor: "#34dde3",
//           height:50,
        
//           width:250,
//           alignItems:'center',
//           marginTop:10
//       },
  
//       forgotten:{
//           color:"#39ed66",
//           marginRight:40,
//           marginTop:20
  
//       },
//       buttonStyle:{
//           fontSize:20,
//           fontFamily:'monospace'
//       }
      slideSelector:{
        width: 16,    // Equivalent to w-4 (4 * 4 = 16)
        height: 16,   // Equivalent to h-4 (4 * 4 = 16)
        marginHorizontal: 4, // Equivalent to mx-1 (1 * 4 = 4)
        alignItems: 'center', // Equivalent to items-center
        justifyContent: 'center', // Equivalent to justify-center
        borderRadius: 8,  // Half of the width to create a rounded circle (16 / 2 = 8)
      },
      slideSelector2:{
        borderWidth: 1,          // Equivalent to "border"
        borderColor: '#ef4444',  // Equivalent to "border-red-400"
        padding: 8,              // Equivalent to "p-2" (2 * 4 = 8)
      },

      
        // selectorView: {
        //   width: 16,                     // Equivalent to "w-4" (4 * 4 = 16)
        //   height: 16,                    // Equivalent to "h-4" (4 * 4 = 16)
        //   marginHorizontal: 4,           // Equivalent to "mx-1" (1 * 4 = 4)
        //   flexDirection: 'row',          // Equivalent to "flex"
        //   alignItems: 'center',          // Equivalent to "items-center"
        //   justifyContent: 'center',     // Equivalent to "justify-center"
        //   borderRadius: 8,               // Equivalent to "rounded-full" (half of width)
        //   borderWidth: selected ? 1 : 0, // Conditionally add a border (1 if selected, 0 otherwise)
        //   borderColor: '#ef4444',        // Equivalent to "border-red-400"
        //   padding: selected ? 8 : 0,     // Conditionally add padding (8 if selected, 0 otherwise)
        // },

        //   selectorPin: {
        //     width: 8,                        // Equivalent to "w-2" (2 * 4 = 8)
        //     height: 8,                       // Equivalent to "h-2" (2 * 4 = 8)
        //     backgroundColor: selected ? '#ef4444' : '#f87171',  // Conditionally set background color
        //     borderRadius: 4,                // Equivalent to "rounded-full" (half of width)
        //   },
         
            imageContainer: {
              width: 72,
              height: 72,
              resizeMode: 'contain', // Equivalent to "object-contain"
            },
          
          
 })