import {Text} from 'react-native';
import React, { Children } from 'react';
const header = <Text> Person</Text>

//props name email children
// argument pass by Parent to Child are called Props  
/*
          <Person name="Vivek" email='vivek@abcd.com'>
              <Text> Sample</Text>
            </Person>
            <Person name="Giga" email='ww@abcd.com'/>
            <Person name="Nani"/>
            <Person name="Beka"/>
*/
export default function Person ({children,name,email}){
    return (
    <>
        {header}
        {children}
        <Text>{name}::{email}</Text>
    </>)
}