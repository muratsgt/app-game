import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Animated,
  Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { QuestionItem } from '../components';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const Questions = (props) => {
  const listRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const questionList = useSelector(global => global.questions);
  const dispatch = useDispatch();

  const answer = (result) => {
    dispatch({ type: "SET_SCORE", payload: { isTrue: result } });
    const newIndex = currentIndex + 1;
    if (newIndex == questionList.length)
      return props.navigation.navigate("Finish");
    setCurrentIndex(newIndex);
    listRef.current.scrollToIndex({ index: newIndex });
  }

  const renderQuestions = ({ item }) => (
    <QuestionItem
      questionObject={item}
      onAnswer={answer}
    />
  )


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>

        <View style={{ backgroundColor: "#3949ab", alignItems: "center", padding: 30 }}>
          <CountdownCircleTimer
            isPlaying
            duration={20}
            onComplete={() => props.navigation.navigate("Finish")}
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
        <View style={{ flex: 1 }}>
          <FlatList
            ref={listRef}
            keyExtractor={(_, index) => index.toString()}
            data={questionList}
            horizontal
            scrollEnabled={false}
            renderItem={renderQuestions}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export { Questions };
