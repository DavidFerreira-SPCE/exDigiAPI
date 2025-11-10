import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  body: {
    height: 'auto',
    width: 'auto',
    flex: 1,
    backgroundColor: '#5c0496ff',
    padding: 20,
  },
  container: {
    alignItems: 'center',
    marginTop: -36,
  },
  logo: {
    resizeMode:'contain',
    width: 120,
    height: 80,
    marginRight: 'auto'
  },
  bloco: {
    marginTop: 5,
    padding: 20,
    backgroundColor: '#f75819a1',
    borderRadius: 15,
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  button: {
    backgroundColor: '#be9709ff',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  digimonName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f7f7f7ff',
    marginBottom: 15,
  },
  digimonImage: {
    width: 180,
    height: 180,
    marginVertical: 20,
  },
  infoContainer: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'normal',
  },
initialListContainer: {
        marginTop: 25,
        width: '100%',
        paddingHorizontal: 5,
    },
    listTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#f7f7f7ff', // Cor clara para contraste
    },
    digimonGrid: {
        justifyContent: 'space-between',
        paddingBottom: 10,
        borderRadius: 16
    },
    digimonCard: {
        width: '48%', // Garante 2 colunas com espaço entre elas
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2, // Sombra suave
    },
    smallDigimonImage: {
        width: 60,
        height: 60,
        marginBottom: 5,
    },
    smallDigimonName: {
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
        color: '#333',
    },
    moreButton: {
        backgroundColor: '#0400ffff',
        padding: 15,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: -10,
        marginBottom: 30,
        width: '100%',
    },
});

export default Styles;