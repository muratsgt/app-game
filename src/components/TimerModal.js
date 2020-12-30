import React from 'react';
import { View, Animated, Text } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import Modal from 'react-native-modal';
import { timerModal } from './styles';


const TimerModal = (props) => {
    return (
        <Modal
            isVisible={props.counterFlag}
        >
            <View style={timerModal.container}>
                <CountdownCircleTimer
                    isPlaying={props.counterFlag}
                    duration={5}
                    onComplete={() => props.onTimeEnd()}
                    colors={[
                        ['#004777', 0.4],
                        ['#F7B801', 0.4],
                        ['#A30000', 0.2],
                    ]}
                >
                    {({ remainingTime, animatedColor }) => (
                        <Animated.Text style={[timerModal.textStyle, { color: animatedColor }]}>
                            {remainingTime}
                        </Animated.Text>
                    )}
                </CountdownCircleTimer>
            </View>
        </Modal>
    )
};

export { TimerModal };