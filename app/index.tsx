import axios from 'axios';
import { Image } from 'expo-image';
import { useState } from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import Styles from './styles';

export default function RandomDigimon() {
  const [searchTerm, setSearchTerm] = useState('');
  const [digimonData, setDigimonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchDigimon = async () => {
    if (!searchTerm.trim()) {
      setError('Por favor, digite algo para buscar');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get(`https://digi-api.com/api/v1/digimon/${searchTerm.toLowerCase()}`);
      console.log('Digimon encontrado:', response.data);
      setDigimonData(response.data);
    } catch (err) {
      console.error('Erro na busca:', err);
      setError('Digimon não encontrado. Tente outro nome ou número.');
      setDigimonData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={Styles.body}>
      <View style={Styles.container}>
        <Image
          source={require("../assets/images/logo.png")}
          style={Styles.logo}
        />
      </View>

      <View style={Styles.bloco}>
        <Text style={Styles.texto}>Seja Bem-vindo a busca de Digimons</Text>
        
        <TextInput
          style={Styles.input}
          placeholder='Digite o nome ou número do Digimon'
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={searchDigimon}
        />

        <TouchableOpacity 
          style={Styles.button}
          onPress={searchDigimon}
          disabled={loading}
        >
          <Text style={Styles.buttonText}>
            {loading ? 'Buscando...' : 'Buscar'}
          </Text>
        </TouchableOpacity>
        
        {loading && <ActivityIndicator size="large" color="#FF6B35" style={{ marginTop: 20 }} />}
        
        {error && <Text style={Styles.errorText}>{error}</Text>}
        
        {digimonData && (
          <View style={Styles.resultContainer}>
            <Text style={Styles.digimonName}>{digimonData.name}</Text>
            
            <Image
              source={{ uri: digimonData.images?.[0]?.href }}
              style={Styles.digimonImage}
              contentFit="contain"
            />
            
            <View style={Styles.infoContainer}>
              <Text style={Styles.infoLabel}>Nível: 
                <Text style={Styles.infoText}> {digimonData.levels?.[0]?.level || 'N/A'}</Text>
              </Text>
              
              <Text style={Styles.infoLabel}>Tipo: 
                <Text style={Styles.infoText}> {digimonData.types?.[0]?.type || 'N/A'}</Text>
              </Text>
              
              <Text style={Styles.infoLabel}>Atributo: 
                <Text style={Styles.infoText}> {digimonData.attributes?.[0]?.attribute || 'N/A'}</Text>
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}