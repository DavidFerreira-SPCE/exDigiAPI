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
    backgroundColor: '#ff4800f5',
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
    color: 'red',
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
});

export default Styles