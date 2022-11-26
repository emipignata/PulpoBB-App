import * as React from "react";
import * as Location from 'expo-location'
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, {Marker} from 'react-native-maps'
import MapViewDirections from "react-native-maps-directions";
import {GOOGLE_MAPS_KEY} from '@env'



export default function Mapa () {
  
  const [origin, setOrigin] = React.useState({
        latitude:-34.48908,
        longitude:-58.58399
    })

    const [destination, setDestination] = React.useState({
        latitude:-34.55146,
        longitude:-58.44734
    });
    
    React.useEffect(() =>{
      getLocationPermission();
    }, [])
    async function getLocationPermission(){
      let{ status } =await Location.requestForegroundPermissionsAsync();
      if(status!=='granted'){
        alert('Sin Acceso a la Ubicación del Usuario');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      const current = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }

      setOrigin(current);
    }

    return (
   
      <View style={styles.container}>
        <MapView
         style={styles.map} 
         initialRegion ={{
            latitude: origin.latitude,
            longitude:origin.longitude,
            latitudeDelta: 0.09,
            longitudeDelta:0.04
         }}
         >
            <Marker draggable 
                coordinate={origin}
                image={require ('.././assets/PulpoIcon.png')}
                onDragEnd={(direction)=>setOrigin(direction.nativeEvent.coordinate) }
            />
            <Marker draggable 
                coordinate={destination}
                onDragEnd={(direction)=>setDestination(direction.nativeEvent.coordinate)}
            />
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={GOOGLE_MAPS_KEY}
              strokeColor="purple"
              strokeWidth={6}
            />            
         </MapView>        
      </View>  
    
    );

  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });