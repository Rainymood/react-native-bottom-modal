import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import Modal from 'react-native-modal';

export default function App() {
  const [isModalVisible, setModalVisible] = useState(true)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <View style={styles.container}>
      <Modal style={styles.bottomModalView} isVisible={isModalVisible} backdropOpacity={0} onBackdropPress={toggleModal}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>Tap outside the modal to close</Text>
        </View>
      </Modal>
      <TouchableHighlight style={styles.button} onPress={toggleModal}>
        <Text style={styles.buttonText}>Open modal </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "lightgrey",
  },
  bottomModalView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  button: {
    width: "50%",
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "limegreen"
  },
  buttonText: {
    fontWeight: "bold"
  },
  modal: {
    width: "100%",
    height: "30%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: "white"
  },
  modalText: {
    fontSize: 20
  }
});
