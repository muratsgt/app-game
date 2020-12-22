import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import {useDispatch} from 'react-redux';

import axios from 'axios';
import { introPage } from './styles';
import { CategorySelectModal } from '../components';

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
      },
    })
    .then(response => {
      const {data: {results}} = response;
      dispatch({type: "SET_QUESTIONS", payload: { questions: results}})
    });

    setModalFlag(false);
    setCounterFlag(true);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={introPage.container}>
          <Text style={introPage.bannerText}>Trivia!</Text>
        </View>

        <View style={{backgroundColor:"#3949ab", alignItems:"center"}}>

          <CountdownCircleTimer
            isPlaying={counterFlag}
            duration={5}
            onComplete={() => props.navigation.navigate("Questions")}
            colors={[
              ['#004777', 0.4],
              ['#F7B801', 0.4],
              ['#A30000', 0.2],
            ]}
          >
            {({ remainingTime, animatedColor }) => (
              <Animated.Text style={{ color: "white", fontSize: 50, fontWeight: "bold" }}>
                {remainingTime}
              </Animated.Text>
            )}
          </CountdownCircleTimer>
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

      </View>
    </SafeAreaView>
  );
};

export { Intro };
