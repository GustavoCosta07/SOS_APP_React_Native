import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerItemList } from '@react-navigation/drawer';
import { SimpleLineIcons } from '@expo/vector-icons';
import User from './assets/user.jpg';

const DrawerContent = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: 200,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: '#f4f4f4',
          borderBottomWidth: 1,
        }}
      >
        <Image
          source={User}
          style={{
            height: 130,
            width: 130,
            borderRadius: 65,
          }}
        />
        <Text
          style={{
            fontSize: 22,
            marginVertical: 6,
            fontWeight: 'bold',
            color: '#111',
          }}
        >
          Marcelo W E Gomes!
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#111',
          }}
        >
          Técnico
        </Text>
      </View>
      <DrawerItemList />
    </SafeAreaView>
  );
};

export default DrawerContent;
