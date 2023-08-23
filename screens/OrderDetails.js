import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderDetails = ({ route }) => {
  const { orderNumber, description, openDate, directedDate, cliente, cliente_cep,
    cliente_logradouro,
    cliente_numero,
    cliente_complemento,
    cliente_bairro,
    cliente_cidade,
    cliente_estado,
    cliente_telefone,
    cliente_sindico,
    os_solicitante,
    os_consideracoes,
    chamado_observacoes
  } = route.params;

  console.log('casa', route.params)

  const navigation = useNavigation();

  return (
    // <Text style={styles.subText}>
      
    // </Text>
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{cliente}</Text>
        <Text style={styles.infoText}>{montarEndereco(cliente_logradouro, cliente_numero, cliente_bairro, cliente_complemento, cliente_cep, cliente_cidade, cliente_estado)}</Text>
        <Text style={styles.infoText}>Telefone: {cliente_telefone}</Text>
        <Text style={styles.infoText}>Síndico: {cliente_sindico}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Outras Informações</Text>
        <Text style={styles.infoText}>Solicitante: {os_solicitante}</Text>
        <Text style={styles.infoText}>Informações Iniciais: {os_consideracoes}</Text>
        <Text style={styles.infoText}>Observações: {chamado_observacoes}</Text>
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
    color: "#4E54C8"
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


function montarEndereco(cliente_logradouro, cliente_numero, cliente_bairro, cliente_complemento, cliente_cep, cliente_cidade, cliente_estado) {
  let endereco = '';

  endereco += cliente_logradouro + ', ' + cliente_numero;

  endereco += ', Cep: ' + cliente_cep;

  endereco += ', ' + cliente_bairro;

  if (cliente_complemento) {
    endereco += ' (' + cliente_complemento + ')';
  }

  endereco += ' - ' + cliente_cidade + ' - ' + cliente_estado;

  return endereco;
}
export default OrderDetails;
