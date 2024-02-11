import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';

const HomePage = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    fetchCocktails();
  }, []);

  const fetchCocktails = async () => {
    setFetching(true);
    try 
    
    {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=&page=${page}`);
      const data = await response.json();
      setCocktails(prevCocktails => [...prevCocktails, ...data.drinks]);
    } catch (error) {
      console.error('Error fetching cocktails: ', error);
    } finally {
      setLoading(false);
      setFetching(false);
    }
  };

  const renderCocktailItem = ({ item }) => (
    <View style={{ margin: 10 }}>
      <Image
        source={{ uri: item.strDrinkThumb }}
        style={{ width: 150, height: 150, borderRadius: 10 }}
      />
      <Text style={{ textAlign: 'center' }}>{item.strDrink}</Text>
    </View>
  );

  const handleLoadMore = () => {
    if (!fetching) {
      setPage(prevPage => prevPage + 1);
      fetchCocktails();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: 'center', fontSize: 20, marginVertical: 10 }}>Recettes de Cocktails</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={cocktails}
          renderItem={renderCocktailItem}
          keyExtractor={item => item.idDrink}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
};

export default HomePage;
