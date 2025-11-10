import axios from 'axios';
import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import Styles from './styles';

export default function RandomDigimon() {
  const [searchTerm, setSearchTerm] = useState('');
  const [digimonData, setDigimonData] = useState(null);
  const [initialDigimons, setInitialDigimons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // --- FUNÇÕES DE BUSCA ---
  const fetchInitialPage = async () => {
    setLoading(true);
    setError('');
    setDigimonData(null); // Limpa o result

    try {
      const response = await axios.get(`https://digi-api.com/api/v1/digimon?page=0&pageSize=5`);

      if (response.data.content && response.data.content.length > 0) {
        setInitialDigimons(response.data.content);
      } else {
        setInitialDigimons([]);
      }
    } catch (err) {
      console.error('Erro ao carregar Digimons iniciais:', err);
      setError('Falha ao carregar Digimons iniciais.');
      setInitialDigimons([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialPage();
  }, []);

  const searchDigimon = async (namefromclick) => {
    
    // 1. DETERMINAÇÃO DO TERMO: Se 'namefromclick' não existir, usa o input.
    // Garante que é uma string, mesmo que vazia.
    const inputTerm = (searchTerm || '').trim();
    const term = inputTerm;
    
    // 2. CONDIÇÃO DE ERRO REFORÇADA: Verifica se o termo final está vazio
    if (!term) {
        setError('Por favor, digite ou selecione um Digimon para buscar.');
        setDigimonData(null);
        return;
    }

    // Limpa a lista inicial e estados
    setInitialDigimons([]); 
    setLoading(true); 
    setError(''); 
    setDigimonData(null); 

    try {
        // 3. APLICA toLowerCase ao termo FINAL (que agora sabemos que é válido)
        const response = await axios.get(`https://digi-api.com/api/v1/digimon/${term.toLowerCase()}`);
        setDigimonData(response.data);
        
        if (namefromclick) {
            setSearchTerm(term);
        }
        
    } catch (err) {
        console.error('Erro na busca:', err);
        setError('Digimon não encontrado. Tente outro nome ou número.');
        setDigimonData(null);
    } finally {
        setLoading(false);
    }
};

  // 2. Função de Reset
const resetToInitialList = () => {
    setDigimonData(null); 
    setSearchTerm('');
    setError('');       
    setLoading(true);
    fetchInitialPage(); 
};


const renderDigimonItem = ({ item }) => (
    <TouchableOpacity 
        key={item.id} 
        style={Styles.digimonCard}
        onPress={() => searchDigimon(item.name)} 
        disabled={loading}
    >
        <Image
            // Usa a URL da imagem do item
            source={{ uri: item.image }}
            style={Styles.smallDigimonImage}
            contentFit="contain"
        />
        <Text style={Styles.smallDigimonName}>{item.name}</Text>
    </TouchableOpacity>
);
  // --- RENDERIZAÇÃO (JSX) ---

  return (
    <View style={Styles.body}>
      {/* ... Container e Logo ... */}
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

        {/* 3. Lista dos 5 Digimons Iniciais: Só aparece se não houver erro e resultado individual */}
        {!error && !digimonData && initialDigimons.length > 0 && (
          <View style={Styles.initialListContainer}>
            <Text style={Styles.listTitle}>Primeiros Digimons Carregados:</Text>
            <FlatList
              data={initialDigimons}
              renderItem={renderDigimonItem}
              keyExtractor={item => String(item.id)}
              numColumns={2}
              contentContainerStyle={Styles.digimonGrid}
              scrollEnabled={false}
            />
          </View>
        )}

        {/* 4. Resultado da Busca Individual */}
        {digimonData && (
          <> {/* Fragmento para agrupar o resultado e o botão */}
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

            {/* 5. Botão de Reset (SÓ aparece se houver digimonData) */}
            <TouchableOpacity
              style={Styles.moreButton}
              onPress={resetToInitialList}
            >
              <Text style={Styles.buttonText}>Voltar para a Lista Inicial</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}