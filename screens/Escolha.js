import React, { Component } from 'react';
import { View, StyleSheet, Text, Switch} from 'react-native';

import {Picker} from '@react-native-picker/picker';

export default class App extends Component {

   
  constructor(props){
    super(props);
    this.state = {
      cabelo: 0,
      modalidade: [
        {key: 1, nome: 'Cabelo', valor: 25.00},
        {key: 2, nome: 'Barba', valor: 25.00},
        {key: 3, nome: 'Hidratação', valor: 69.99},
        {key: 4, nome: 'Combo (Cabelo + Barba)', valor: 60.00},
      ]
    };
  };

 render(){

  let cabeloItem = this.state.modalidade.map( (v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome} />
  } )

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Escolha a modalidade</Text>
    
    <Text style={styles.mulher}>Mulher</Text>
    
    <Switch
    alignItems='center'
    value={this.state.mulher}
    onValueChange={ (mulherSwitch) => this.setState ({mulher: mulherSwitch})}
        />


      <Picker
      selectedValue={this.state.cabelo}
      onValueChange={ (itemValue, itemIndex) =>  this.setState({cabelo: itemValue}) }
      >
       {cabeloItem}
      </Picker>

      <Text style={styles.modalidade}>Voce escolheu: {this.state.modalidade[this.state.cabelo].nome}</Text>
      <Text style={styles.modalidade}>R$: {this.state.modalidade[this.state.cabelo].valor.toFixed(2)}</Text>
    </View>
   );
 }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 20,
    
    
  },
  logo:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  modalidade:{
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  },
  mulher:{
    textAlign: 'center',
    alignItems:'center'
  }
});