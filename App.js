import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [num, setNum] = useState('');
  const [tabuada, setTabuada] = useState([]);

  const calcularTabuada = () => {
    const n = parseInt(num);
    if (!isNaN(n)) {
      const tabuadaArray = [];
      for (let i = 1; i <= 10; i++) {
        const result = n * i;
        const texto = `${n} X ${i} = ${result}`;
        tabuadaArray.push(texto);
      }
      setTabuada(tabuadaArray);
    }
  };

  const limpar = () => {
    setNum('');
    setTabuada([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tabuada</Text>
      <Text style={styles.label}>Digite um número:</Text>
      <TextInput
        style={styles.input}
        placeholder="??"
        keyboardType="numeric"
        value={num}
        onChangeText={text => setNum(text)}
      />
      <TouchableOpacity style={styles.button} onPress={calcularTabuada}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={limpar}>
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.list}
        data={tabuada}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Arial',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: "white",
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 10,
    marginBottom: 20,
    color: 'white',
  },
  button: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "white",
    textAlign: 'center',
  },
  list: {
    marginTop: 20,
    width: '80%',
    height: 250,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  listItem: {
    fontFamily: 'Arial',
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
});
