import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../style/GlobalStyles";

interface ButtonProps {// Definindo uma interface para as propriedades do componente Button
    onPress: () => void;// Função de retorno de chamada quando o botão é pressionado
    title: string;// Texto exibido no botão
    isBlue?: boolean;// Se verdadeiro, aplica estilo de botão azul
    isGray?: boolean;// Se verdadeiro, aplica estilo de botão cinza
}

export default function Button({ title, onPress, isBlue, isGray }: ButtonProps) {// Definindo o componente funcional Button
    const theme = useContext(ThemeContext);// Obtendo o tema atual do contexto de tema
    return ( // Renderizando o componente TouchableOpacity (botão) com base nas propriedades e no tema
        <TouchableOpacity 
            style={
                isBlue 
                ? Styles.btnBlue 
                : isGray 
                ? Styles.btnGray 
                : theme === "light" 
                ? Styles.btnLight 
                : Styles.btnDark
            } 
            onPress={onPress}>
            <Text 
               style={
                   isBlue || isGray 
                   ? Styles.smallTextLight
                   : theme === "dark" 
                   ? Styles.smallTextLight 
                   : Styles.smallTextDark 
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}