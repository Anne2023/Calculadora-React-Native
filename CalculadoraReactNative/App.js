import { useState } from 'react'; //Importando useState do React para gerenciar o estado no componente funcional
import { SafeAreaView, StyleSheet, Switch, Text } from 'react-native';// Importando componentes e estilos do React Native
import { myColors } from './src/style/cores';// Importando um objeto de cores personalizado do arquivo cores.js
import { ThemeContext } from './src/context/ThemeContext';// Importando o contexto de tema personalizado
import MyKeyboard from './src/componentes/MyKeyboard';// Importando o componente MyKeyboard



export default function App() { // Definindo o componente principal do aplicativo
  const [theme, setTheme] = useState('light'); // Definindo o estado 'theme' usando o hook useState, com valor inicial 'light'
  return (// Renderizando o componente principal
    <ThemeContext.Provider value={theme}> // Usando o ThemeContext.Provider para fornecer o tema para os componentes filhos
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
        <Switch
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

// Estilos para o componente usando o StyleSheet do React Native
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});