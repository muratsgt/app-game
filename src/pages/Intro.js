import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {useDispatch} from 'react-redux';

import axios from 'axios';
import { introPage } from './styles';
import { CategorySelectModal, TimerModal } from '../components';

const Intro = (props) => {
  
  const [counterFlag, setCounterFlag] = useState(false);
  const [modalFlag, setModalFlag] = useState(false);
  const dispatch = useDispatch();

  const startGame = (selectedCategory) => {


    axios.get(`https://opentdb.com/api.php?`,
    {
      params: {
        amount : 10,
        category : selectedCategory.id,
        type: "boolean",
        encode: "base64"
      },
    })
    .then(response => {
      const {data: {results}} = response;
      dispatch({type: "SET_QUESTIONS", payload: { questions: results}})
    });

    setModalFlag(false);
    setCounterFlag(true);
  }

  const counterEnd = () => {
    setCounterFlag(false);
    props.navigation.navigate("Questions")
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={introPage.container}>
          <Text style={introPage.bannerText}>Trivia!</Text>
        </View>

        <View style={introPage.container}>
          <TouchableOpacity
            style={introPage.buttonContainer}
            onPress={() => setModalFlag(true)}
          >
            <Text style={introPage.buttonText}>Start!</Text>
          </TouchableOpacity>
        </View>

        <CategorySelectModal
          visibility={modalFlag}
          onClose={() => setModalFlag(false)}
          onCategorySelect={startGame}
        />

        <TimerModal
          counterFlag={counterFlag}
          onTimeEnd={counterEnd}
        />

      </View>
    </SafeAreaView>
  );
};

export { Intro };
