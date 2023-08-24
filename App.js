import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import User from "./assets/user.jpg";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import LoginUser from "./screens/LoginUser";
import OrderDetails from "./screens/OrderDetails"
import RegisterEvent from "./screens/RegisterEvent";
import { UserProvider } from './UserContext';
import Sair from "./screens/Sair";
import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import DrawerContent from './DrawerContent';


const Drawer = createDrawerNavigator();


export default function App() {
  
  const user  = useContext(UserContext);
  

  return (
    <UserProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="LoginUser"
          drawerContent={
            (props) => {
              return (
                <SafeAreaView>
                  <View
                    style={{
                      height: 200,
                      width: '100%',
                      justifyContent: "center",
                      alignItems: "center",
                      borderBottomColor: "#f4f4f4",
                      borderBottomWidth: 1,
                      // backgroundColor: "#4E54C8"
                    }}
                  >
                    <Image
                      source={User}
                      style={{
                        height: 130,
                        width: 130,
                        borderRadius: 65
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 22,
                        marginVertical: 6,
                        fontWeight: "bold",
                        color: "#111"
                      }}
                    >Marcelo W E Gomes!</Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#111"
                      }}
                    >Técnico</Text>
                  </View>
                  <DrawerItemList {...props} />
                </SafeAreaView>
              )
            }
          }
          screenOptions={{
            drawerStyle: {
              backgroundColor: "#fff",
              width: 250
            },
            headerStyle: {
              backgroundColor: "#4E54C8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            },
            drawerLabelStyle: {
              color: "#111"
            }
          }}
        >
          <Drawer.Screen
            name="Home"
            options={{
              drawerLabel: "Home",
              title: "SOS DOS ELEVADORES",
              drawerIcon: () => (
                <SimpleLineIcons name="home" size={20} color="#4E54C8" />
              )
            }}
            component={Home}
          />

          <Drawer.Screen
            name="Settings"
            options={{
              drawerLabel: "Configurações",
              title: "Settings",
              drawerIcon: () => (
                <SimpleLineIcons name="settings" size={20} color="#4E54C8" />
              )
            }}
            component={Settings}
          />

          <Drawer.Screen
            name="LoginUser"
            options={{
              headerShown: false,
              drawerLabel: "login",
              title: "login",
              drawerIcon: () => (
                <SimpleLineIcons name="settings" size={20} color="#4E54C8" />
              )
            }}
            component={LoginUser}
          />

          <Drawer.Screen
            name="OrderDetails"
            options={{
              headerShown: true,
              drawerLabel: "Não clicar",
              title: "Detalhamento",
              drawerIcon: () => (
                <SimpleLineIcons name="home" size={20} color="#4E54C8" />
              )
            }}
            component={OrderDetails}
          />

          <Drawer.Screen
            name="RegistrarEvento"
            options={{
              headerShown: true,
              drawerLabel: "Registrar Evento",
              title: "Registrar Evento",
              drawerIcon: () => (
                <SimpleLineIcons name="target" size={20} color="#4E54C8" />
              )
            }}
            component={RegisterEvent} //criar rota de evento
          />

          <Drawer.Screen
            name="Sair"
            options={{
              headerShown: true,
              drawerLabel: "Sair",
              title: "Sair",
              drawerIcon: () => (
                <SimpleLineIcons name="logout" size={20} color="#4E54C8" />
              )
            }}
            component={Sair} //criar rota de saída
          />

        </Drawer.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}





