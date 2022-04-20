import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet,TouchableOpacity } from "react-native";
export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [startTextStatus,setStartTextStatus] = useState('Start')
  //const [timer,setTimer] = useState(false)
  const [myInterval, setMyInterval] = useState("");


  useEffect(()=> {
    let myInterval = setInterval(() => {
      setCounter((count) => count + 1);
      setMyInterval(myInterval);
    }, 1000);
   
     return ()=> clearInterval(myInterval);

  },[])

  const startCounter = () => {
    let myInterval = setInterval(() => {
      setCounter((count) => count + 1);
      setMyInterval(myInterval);
    }, 1000);
  };

  const stopCounter = () => {
    clearInterval(myInterval);
    //setTimer(true)
    setStartTextStatus('Continue')
  };

  const resetButton = () => {
    clearInterval(myInterval);
    setCounter(0);
    setStartTextStatus('Start')
  };

  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.counterNumber}>count:{counter}</Text>
      </View>
          <View style={styles.row}>
      <View >
        <Text 
          title="start increment" 
          onPress={startCounter}
          style={styles.button} 
          
          >
             {startTextStatus} increment
          </Text>
      </View>
      <View>
        <Text 
          style={styles.button}
          onPress={resetButton}
          >

            Reset
          </Text>
      </View>
      <View>
        <Text 
           style={styles.button}
           onPress={stopCounter}
           
           >
             stop increment
           </Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
     justifyContent: "center",
     alignItems: "center",
     fontSize: 15,
     display: "flex",
     height:600,
     width:'100%',
     
      },
  counterNumber: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 35,
    textAlign: "center",
  },
  button:{
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "coral",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "70%",
    textAlign: "center",
    color:'white'
  },

  row: {
    flexDirection: "column",
    flexWrap: "wrap",
    padding:10
  }
  
});

/*

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 8,
      backgroundColor: "aliceblue",
    },
    box: {
      width: 50,
      height: 50,
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    button: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 4,
      backgroundColor: "oldlace",
      alignSelf: "flex-start",
      marginHorizontal: "1%",
      marginBottom: 6,
      minWidth: "48%",
      textAlign: "center",
    },
    selected: {
      backgroundColor: "coral",
      borderWidth: 0,
    },
    buttonLabel: {
      fontSize: 12,
      fontWeight: "500",
      color: "coral",
    },
    selectedLabel: {
      color: "white",
    },
    label: {
      textAlign: "center",
      marginBottom: 10,
      fontSize: 24,
    },
  });

  */
