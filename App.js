import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage';
import RecipeDetailPage from './RecipeDetailPage';
 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteStackNavigator="Home">
        {}
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Recette Cocktail' }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailPage} options={{ title: 'Détail de la recette' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

export default App;
