import React, {useState} from "react";
import { SafeAreaView, StyleSheet,View, Text, TouchableHighlight, TextInput } from "react-native";

export default function App() {

  const[valor1, setValor1]=useState(0)
  const[valor2, setValor2]=useState(0)


  return (
    <SafeAreaView StyleSheet={estilos.conteiner}>
      <Text style={styles.title}>Calculadora</Text>
    <TextInput
    style={estilos.display}
    value={string(valor)}
    onChangeText={(texto)=> {setValor(texto)}}

    ></TextInput>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  conteiner: {
    padding:10
  },
  display:{
    borderWidth:1,
    borderRadius:10,
    padding: 10,
  }

});
