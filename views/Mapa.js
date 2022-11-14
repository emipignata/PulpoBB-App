import * as React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, {Marker, Polyline} from 'react-native-maps'

export default function App() {

    const [origin, setOrigin] = React.useState({
        latitude:-34.48908,
        longitude:-58.58399
    })

    const [destination, setDestination] = React.useState({
        latitude:-34.55146,
        longitude:-58.44734
    })

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
            <Marker
                coordinate={origin}
            />
            <Marker
                coordinate={destination}
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