import {Text,View} from 'react-native';
import React from 'react';
import Person from "./Person"
export default function Login (){
    const titleText = <Text>dashd</Text>
    return (
    <>
        {titleText}
        <Text> Login Example</Text>
        {<Person name ='gela' email='dasdas@gmail.com'/>}
    </>)
}