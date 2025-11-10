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
    marginTop: -6,
  },
  logo: {
    resizeMode:'contain',
    width: 70,
    height: 60,
    marginTop: 'auto',
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
    color: '#fffb00ff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    fontSize: 11,
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
    color: '#ddd9d9ff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: -5,
    alignItems: 'center',
  },
  digimonName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f7f7f7ff',
    marginBottom: 15,
  },
  digimonImage: {
    borderRadius: 12,
    width: 180,
    height: 180,
    marginVertical: 20,
  },
  infoContainer: {
    backgroundColor: '#f5f5f5',
    paddingBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 24,
    width: '100%',
    marginTop: -5,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 10,
  },
  infoText: {
    fontSize: 12,
    color: '#333',
    fontWeight: 'normal',
  },
      initialListContainer: {
        marginTop: 18,
        width: '100%',
        
    },
    listTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#f7f7f7ff', // Cor clara para contraste
    },
    digimonGrid: {
        marginLeft:'auto',
        gap: 20,
        gridRowGap: '30',
        alignContent:'space-evenly',
        justifyContent: 'center',
        paddingBottom: 10,
        borderRadius: 32
    },
    digimonCard: {
        marginLeft: 7,
        marginRight: 26,
        width: '40%',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 6,
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
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 0,
        width: '100%',
    },

    seeMore:{
        backgroundColor: '#ff0000ff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 0,
        width: '100%',
    }
});

export default Styles;