import Axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { categoryModal } from './styles';

const CategorySelectModal = (props) => {

  const [categoryList, setCategoryList] = useState([]);

  const fetchData = async () => {
    const { data: { trivia_categories } } = await Axios.get("https://opentdb.com/api_category.php");
    setCategoryList(trivia_categories);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const renderFunc = ({ item }) => (
    <TouchableOpacity
      style={categoryModal.categoryItemContainer}
      onPress={() => props.onCategorySelect(item)}>
        <Icon color="white" name="clear-all" size={17}/>
      <Text style={categoryModal.categoryItemText}>{item.name}</Text>
    </TouchableOpacity>
  )

  return (
    <Modal
      isVisible={props.visibility}
      style={categoryModal.modal}
      onBackdropPress={props.onClose}>
      <View style={categoryModal.container}>
        <FlatList
          keyExtractor={(_, i) => i.toString()}
          data={categoryList}
          renderItem={renderFunc}
        />
        <Text></Text>
      </View>
    </Modal>
  );
};

export { CategorySelectModal };
