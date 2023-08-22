import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderDetails = ({ route }) => {
  const { orderNumber, description, openDate, directedDate } = route.params;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Informações do Cliente</Text>
        <Text style={styles.infoText}>Nome do Cliente: Nome do Cliente Aqui</Text>
        <Text style={styles.infoText}>Endereço: Endereço do Cliente Aqui</Text>
        <Text style={styles.infoText}>Telefone: Telefone do Cliente Aqui</Text>
        <Text style={styles.infoText}>Síndico do Prédio: Síndico do Prédio Aqui</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Outras Informações</Text>
        <Text style={styles.infoText}>Solicitante: Solicitante Aqui</Text>
        <Text style={styles.infoText}>Informações Gerais: Informações Gerais Aqui</Text>
        <Text style={styles.infoText}>Observações: Observações Aqui</Text>
      </View>
      <TouchableOpacity style={styles.startButton} onPress={() => alert('Iniciar Atendimento Pressionado')}>
        <Text style={styles.startButtonText}>Iniciar Atendimento</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  sectionContainer: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  startButton: {
    backgroundColor: '#4E54C8',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderDetails;
