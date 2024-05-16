import React, {useState} from "react";
import {View, Text, Button } from "react-native";
import { TextInput } from "react-native-web";

export default function Form(){
   
   const [height, setHeight] = useState(null)
   const [weight, setWeight] = useState(null)
   const [messageImc, setMessageImc] = useState("informe seu peso e sua altura");
   const [imc, setImc] = useState(null)
   const [textButton, setTextButton] = useState("IMC")

   function imcCalculator(){
      return setImc((weight/(height*height)).toFixed(2))
   }
   
   function validationImc(){
      if(weight != null && height != null){
         imcCalculator()
         setHeight(null)
         setWeight (null)
         setMessageImc("Seu IMC é =")
         setTextButton("CALCULAR NOVAMENTE")
         return
      }
   
   setImc(null)
   setTextButton("calcular")
   setMessageImc("preencha peso e altura")
   }

   return(
    <View>
        <View>

        </View>
        <Text>Altura</Text>
        <TextInput
        
        placeHolder="Ex.1.75"
        keyboardType="numeric" />

        <Text>Peso</Text>
        <TextInput
        
        placeHolder="Ex.85.766"
        keyboardType="numeric"/>
             

     <Button
     title={textButton}
     />

    </View>
    );
        
    }
