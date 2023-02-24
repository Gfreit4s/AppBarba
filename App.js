import React, {Component} from 'react';
import { View, Text, Image, StyleSheet,Button,TouchableOpacity } from 'react-native';

class App extends Component{
  render(){

    return(
      <View style={styles.container}>
  
        <Image source={require('./src/barba.png')}
        style={styles.img}
        />
        <Image source={require('./src/roll.png')}
        style={styles.img1}
        />
        
        <TouchableOpacity style={styles.botao}>
          <View styles={styles.btnArea}>
          <Text style={styles.textbotao}>Login</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.textbotao1}>Cadastre-se</Text>
      </View>
      
      
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',

    
  },

  img:{
    padding:10,
    height: 380,
    width: 500,
  },

  img1:{
    padding:10,
    height: 100,
    width: 200,
    
  },

  textbotao:{
    color:'black',
    textAlign:'center',
    fontSize: 15,
    fontStyle:'italic',
    margin:10,

  },

  botao:{
    marginTop:80,
    width:250,
    height:50,
    borderWidth:2,
    borderRadius: 25,
    backgroundColor: 'red',
  },

  btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    
  },
  btnTexto:{
    fontSize:15,
    fontWeight:'bold',
    color: 'black'
  },
  textbotao1:{
    color:'black',
    textAlign:'center',
    fontSize: 15,
    fontStyle:'italic',
    margin:10,
  
  }
    

    

  }

)

export default App;