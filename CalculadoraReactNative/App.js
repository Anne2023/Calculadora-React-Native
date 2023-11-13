import React, {useState} from "react";
import { SafeAreaView, StyleSheet,View, Text, TouchableHighlight, TextInput } from "react-native";

export default function App() {

  const[valor, setValor]=useState(0)
  return (
    <SafeAreaView>
      <Text style={styles.title}>Calculadora</Text>
    <TextInput
    value={string(valor)}
    > 
    </TextInput>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({

});
