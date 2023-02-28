import React, {Component} from 'react';
import { View, Text, Image, StyleSheet,Button, TextInput,TouchableOpacity  } from 'react-native';

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
          <Text style={styles.textoinput}>E-mail</Text>
           <TextInput
           style={styles.texto}
           placeholderTextColor="#000"
           />
           <Text style={styles.textoinput}>Senha</Text>
           <TextInput
           style={styles.texto}
           placeholderTextColor="#000"
           
           />
          <TouchableOpacity>
            <View style={styles.cadastro}>
            <Text style={styles.textcadastro} >Login</Text>
            <Text style={styles.forgot}>Esqueci minha senha.</Text>
            </View>
          </TouchableOpacity>
          </View>
        
      
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:10,
    backgroundColor: 'white',
    
 
  
  },
  texto:{
    width:300,
    height:40,
    borderColor: 'black',
    borderRadius: 8,
    backgroundColor: '#eeeeee',
    fontStyle:'italic',
    textAlign:'left',
    marginStart:40,
    
  },

  img:{
    height:300,
    width: 200,
    marginRight:'auto',
    marginLeft:'auto',
    
  
  },

  textoini:{
    color:'black',
    textAlign:'center',
    fontStyle:'italic',
    fontSize: 20,

  },

  textoinput:{
    fontStyle:'italic',
    fontSize: 15,
    alignItems:'center',
    marginTop:20,
    marginStart:40,
    color:'black',
  },

  cadastro:{
    margin:40,
    width:250,
    height:50,
    borderRadius: 25,
    backgroundColor: 'red',
    marginStart:50,
    
  },
  textcadastro:{
    color:'black',
    fontStyle:'italic',
    fontSize: 15,
    textAlign:'center',
    marginTop:10,
    
    
    
  },
  img1:{
    padding:10,
    height: 100,
    width: 200,
    marginRight:'auto',
    marginLeft:'auto',

  },
  forgot:{
    fontSize:12,
    textAlign:'center',
    marginTop:20,
    color:'black',

  }

}

)

export default App;