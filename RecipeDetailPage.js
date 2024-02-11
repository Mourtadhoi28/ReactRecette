import React from 'react';
import { View, Text, Image } from 'react-native';


const RecipeDetailPage = ({ route }) => {
  const { recipe } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{ uri: recipe.strDrinkThumb }}
        style={{ width: 300, height: 300, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{recipe.strDrink}</Text>
      <Text>{recipe.strInstructions}</Text>
    </View>
  );
};

export default RecipeDetailPage;