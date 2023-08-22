import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import WelcomeMessage from '../screens/WelcomeMessage';
import CallInfo from '../screens/CallInfo';
import OrderCard from '../screens/OrderCard';
import { useContext } from 'react';
import { UserContext } from '../UserContext';


export default function Home() {

  const navigation = useNavigation();

  const { user } = useContext(UserContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Função para fazer a solicitação à API e obter os dados das ordens
    const fetchOrders = async () => {
      try {
        
        const requestBody = {
          id: user.user_id
        };
  
        const response = await fetch('https://grupofmv.app.br/api/v1/integracao/chamados', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });
  
        const data = await response.json();
        console.log('data',data)
        setOrders(data.data); // Atualiza o estado com os dados das ordens
      } catch (error) {
        console.error('Erro ao obter dados das ordens:', error);
      }
    };
  
    fetchOrders(); // Chama a função de solicitação à API ao carregar a tela
  }, []);


  return (
    <View>
      <WelcomeMessage username={user ? user.user_nome : ''} />
      <CallInfo callCount={orders.length} countFontSize={30} />
      <ScrollView style={styles.scrollView}>
        {orders.map(order => (
          <OrderCard
            key={order.idChamado} // Certifique-se de ter um identificador único para cada ordem
            orderNumber={order.idChamado}
            description={order.idChamado}
            openDate={order.chamadoDataReferencia}
            directedDate={order.chamadoDataReferencia}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Arial',
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: '#4E54C8',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});