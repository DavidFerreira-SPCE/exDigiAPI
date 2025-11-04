import axios from 'axios';
import { Image } from 'expo-image';
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from './styles';

export default function RandomMon() {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const search = await axios.get('https://digi-api.com/api/v1/digimon/');
        setImageUrl(search.data.message);
        setError(null)
      } catch (err) {
        setError(null)
      }
    };
    fetchData();
  }, [error]);

return (
  <View style={styles.body}>
    <View style={styles.container}>
      <Text>Seja Bem-vindo ao buscador de Digimons</Text>
    </View>
    
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
    </View>
  </View>
)
};