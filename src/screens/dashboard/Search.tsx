import React, {useState} from 'react';
import {View, TextInput, StyleSheet, FlatList, Image, Text} from 'react-native';
import {UserData} from '../../utils/UserData.tsx';

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const filteredData = UserData.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a name"
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            {searchText.length > 0 && (
              <>
                <Image source={item.profile} style={styles.profileImage} />
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
              </>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    color: 'grey',
  },
  searchInput: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
    marginHorizontal: 20,
    color: 'grey',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Search;
