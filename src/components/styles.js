import {StyleSheet, Dimensions} from 'react-native';

export const categoryModal = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    padding: 0,
    paddingHorizontal: 10,
  },
  container: {
    height: Dimensions.get('window').height * 0.6,
    paddingTop: 5,
    backgroundColor: '#19762d',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  categoryItemContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  categoryItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 5
  },
});

export const questionItem = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: '#3949ab',
  },
  questionContainer: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#ffca28',
    margin: 10,
    padding: 20,
  },
  questionText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Ubuntu-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-evenly',
  },
  trueButton: {
    backgroundColor: '#689f38',
    padding: 20,
    borderRadius: 10,
  },
  falseButton: {
    backgroundColor: '#d32f2f',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'Lobster-Regular',
  },
});

export const timerModal = StyleSheet.create({
  container: {
    padding: 50, 
    margin:30, 
    backgroundColor: "white", 
    alignItems: "center", 
    borderRadius: 50,
    borderWidth: 3,
    borderColor:"gray"
  },
  textStyle: {
    color: "gray",
    fontFamily: "Lobster-Regular", 
    fontSize: 50, 
    fontWeight: "bold" 
  }
})