import { StatusBar } from 'expo-status-bar';
import React, { useState , useEffect} from 'react';
import { StyleSheet, Text, View ,SafeAreaView,TouchableOpacity} from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const[type, setType] = useState(Camera.Constants.Type.back);
  const[hasPermission,setHaspermission] = useState(null);

  useEffect(()=>{
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHaspermission(status === 'granted');
    })();
  }, []); 

  if (hasPermission === null){
    return<View/>;
  }
 
  if(hasPermission=== false ){
    return <Text> Doesnt Work</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        style={{ flex: 1 }}
        type={type}
      >
      </Camera>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
