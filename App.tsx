/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Children, useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  FlatList
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductWrapper from './components/ProductWrapper';
import UserList from './components/UserList';



function App(): JSX.Element {

  const Stack =createNativeStackNavigator();
  

  

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={ProductWrapper}/>
          <Stack.Screen name='User' component={UserList}/>
        </Stack.Navigator>
      </NavigationContainer>
        

    </>

  );
}



export default App;


// {{<NavigationContainer >
//         {/* Stack Navigator */}
//         <Stack.Navigator screenOptions={{
//           headerStyle: { backgroundColor: 'black' }, headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }} >
//           <Stack.Screen name='Home' component={Home}
//             options={{
//               headerTitle: () => <Button title='Left' />,
//               headerRight: () => <Button title='Right' />,
//               headerTintColor: '#fff',
//               headerTitleStyle: {
//                 fontSize: 15
//               }
//             }} />
//           <Stack.Screen name='Contact' component={Contact} />
//         </Stack.Navigator>

//       </NavigationContainer>
// }}

{/*  <ScrollView>
          {data && data.map((item: any, index: any) => <View key={index} style={{padding:10, backgroundColor: 'yellow', }}>
            <Text style={{ backgroundColor: '#eded2d', }} >Id: {item.id}</Text>
            <Text style={{ backgroundColor: '#ccc', }} >Title: {item.title}</Text>
          </View>)}
        </ScrollView> */}
{/* 
        {data.length ? <>
          <FlatList
            data={data}
            renderItem={({ item }: any) => <View>
              <Text>Id: {item.id}        title:  {item.title}  </Text>
            </View>} />
        </> : null
        } */}

{/* <TextInput placeholder='Name' value={userdata.name} onChangeText={(text) => setUserdata({ ...userdata, name: text })} />
        <TextInput placeholder='Age' value={userdata.age} onChangeText={(text) => setUserdata({ ...userdata, age: text })} />
        <Button title='Submit' onPress={Submit} />
        <Button title='Submit' onPress={getData} /> */}

// <NavigationContainer>

//   {/* Tab Navigator */}
//   <Tab.Navigator>
//     <Tab.Screen name='Home' component={Home} />
//     <Tab.Screen name='Contact' component={Contact} />

//   </Tab.Navigator>
// </NavigationContainer>

<></>



  // // Stack navigation
  // const Stack: any = createNativeStackNavigator()

  // // Top Tab
  // const Tab: any = createMaterialTopTabNavigator();

  // const [data, setData] = useState<any>([])

  // const init: any = { name: '', age: 0 }
  // const [userdata, setUserdata] = useState<any>(init)

  // const Submit = async () => {
  //   console.warn(userdata)
  //   await AsyncStorage.setItem("name", "lalit");
  //   const url = 'http://10.0.2.2:3000/data'
  //   let Postdata = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userdata) })

  //   console.warn(await Postdata)

  // }

  // const getData = async () => {

  //   const get = await AsyncStorage.getItem("name");
  //   console.warn(get)
  // }

  // useEffect(() => {

  //   const FetchData = async () => {

  //     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  //     const jsonres = await res.json();

  //     console.warn(jsonres[2].title)
  //     setData(jsonres)

  //   }

  //   FetchData()

  // }, [])

  // // bottom Tab
  // // const Tab: any = createBottomTabNavigator();

  // const Home = ({ navigation }: any) => {
    //   return <View>
    //     <Text>Home</Text>
    //     <Button title='Contact' onPress={() => { navigation.navigate('Contact') }} />
    //   </View>
    // }
    // const Contact = ({ navigation }: any) => {
    //   return <View>
    //     <Text>Contact</Text>
    
    //     <Button title='Home' onPress={() => { navigation.navigate('Home') }} />
    //   </View>
    // }
    // const Chat = () => {
    //   return <View>
    //     <Text>Chat</Text>
    //   </View>
    // }

    // type HomeScreenNavigationProps = {
//   navigation: NavigationProps<ParamListBase>;
// }

