import * as react from 'react';
import {StyleSheet, View,Text,Image, ScrollView} from  'react-native';


export default function App(params){
  return(
    <View style ={estilo.container}>
      <ScrollView>
      <Text style={estilo.titulo}>Melhores Amimes</Text>
      <Text style={estilo.subTitulo}> Estes São Os Melhores dos Melhores!</Text>

      <Text style={estilo.anime}>One Piece</Text>
      <View style ={estilo.image}>
      <Image style={estilo.img} source={require("./assets/Anime01.jpg")}/>
      </View>

      <Text style={estilo.anime}>My Hero Academia</Text>
      <View style ={estilo.image}>
      <Image style={estilo.img} source={require("./assets/Anime02.jpg")}/>
      </View>

      <Text style={estilo.anime}>Death Note</Text>
      <View style ={estilo.image}>
      <Image style={estilo.img} source={require("./assets/Anime03.jpg")}/>
      </View>

      <Text style={estilo.anime}>Demon Slayer</Text>
      <View style ={estilo.image}>
      <Image style={estilo.img} source={require("./assets/Anime.04.jpg")}/>
      
      </View>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor:"#836FFF"
  },
  titulo:{
    fontSize:40,
    color:"#FF1493",
    fontWeight:"bold",
    marginBottom:25,
    textAlign:"center"
  },
  subTitulo:{
    fontSize:25,
    color:"#ffa",
    marginHorizontal:2,
    textAlign:"center"
  },
 anime:{
    fontSize:15,
    marginTop:20,
    marginBottom:10,
    alignItems:"flex-start",
    textAlign:"left"
  },
 img:{
  width:400,
  height:200
 },
 image:{
 alignItems:"center",
 },
})