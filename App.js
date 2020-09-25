/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image, TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Sound from 'react-native-sound';

const audioList = [
  { title : 'Play mp3 from Local',
    isRequire : true,
    url : require('./a.mp3')
}
];
var sound1;
const playSound = (item, index) => {
  if(index==0){
    sound1 = new Sound(item.url, (error, sound)=>{
      if(error){
        alert('error');
        return;
      }
      sound1.play(()=>{
        sound1.release();
      })
    })
  }
}

const stopSound = (item, index) => {
  if(index==0){
    sound1.stop(()=>{
      console.log('stop sound1');
    });
    
  }
}

const App = () => {
  return(<View>
  
    <Text>aa</Text>
    <Image style={styles.img} source={{uri:'https://lh3.googleusercontent.com/proxy/-aCixHzMh3z__vNF0cYUPgSyWy60giuzx7oJYRaRHJDlx1dpjoT6-dJy1q-HIhtKP2FAFP9c3EmM2idt1c_ouEOQXeUBmZVzghvIh4Kc-DyQDA7owJ5V1_9vVXnLh_TzPBkojNSUoJWu-d8M8Q-sK5bb-u3zS1mG'}}></Image>
    <ScrollView style={styles.feature } >
    {audioList.map((item,index) => (
      <View style={styles.feature} key={item.title}>
      <Text style={{flex:1,fontsize:14}}>{item.title}
      </Text>
      <TouchableOpacity onPress={()=>{
        return playSound(item,index);
      }}>
        <Text style={styles.playBtn} >Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        return stopSound(item,index);
      }}>
        <Text style={styles.stopBtn} >Stop</Text>
      </TouchableOpacity>    
    </View>
    ) )}
    </ScrollView>  
  </View>)
}

const styles = StyleSheet.create({
  img : {
    width:100,
    height:100
  },
  feature : {
    
    flexDirection:'row',
    alignSelf:'stretch',
    

  },
  playBtn : {
    backgroundColor:'blue',
    paddingVertical: 5,
    fontSize : 15,
    color : 'white'
  },
  stopBtn : {
    backgroundColor:'red',
    paddingVertical: 5,
    fontSize : 15,
    color : 'white'
  }
});

export default App;
