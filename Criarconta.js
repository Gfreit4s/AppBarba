import React, {Component} from 'react';
import { View, Text, Image, StyleSheet,Button, TextInput,TouchableOpacity  } from 'react-native';

class App extends Component{
  render(){

    return(
      <View style={styles.container}>
  
          <Text style={styles.textoini}>
            Seja Bem vindo ! {'\n'} 
            Vamos realizar seu cadastro.
          </Text>

          <Image source={require('./src/barba.png')}
          style={styles.img}
          />
          <Text style={styles.textoinput}>Nome completo</Text>
           <TextInput
           style={styles.texto}
           placeholderTextColor="#000"
           />
           <Text style={styles.textoinput}>E-mail</Text>
           <TextInput
           style={styles.texto}
           placeholderTextColor="#000"
           
           />
           <Text style={styles.textoinput}>Celular</Text>
           <TextInput
           style={styles.texto}
           keyboardType="numeric"
           placeholderTextColor="#000"
           />
           <Text style={styles.textoinput}>Data de nascimento</Text>
           <TextInput
           style={styles.texto}
           keyboardType="numeric"
           placeholderTextColor="#000"
           />

          <TouchableOpacity>
            <View style={styles.cadastro} >
            <Text style={styles.textcadastro}>Cadastrar-se</Text>
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
    height:200,
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
    color:'black',
    fontStyle:'italic',
    fontSize: 15,
    alignItems:'center',
    marginTop:20,
    marginStart:40,
  },

  cadastro:{
    margin:40,
    width:250,
    height:50,
    borderRadius: 25,
    backgroundColor: '#EC2124',
    marginStart:50,
    
  },
  textcadastro:{
    color:'black',
    fontStyle:'italic',
    fontSize: 15,
    textAlign:'center',
    marginTop:10,
    
    
    
  }  

}

)

export default App;