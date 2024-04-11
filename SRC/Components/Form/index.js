import React from "react";
import {View, Text } from "react-native";
import { TextInput } from "react-native-web";

export default function Form(){
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
             
        
    </View>
    );
        
    }
