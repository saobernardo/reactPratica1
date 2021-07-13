import React, {useState, useEffect} from 'react';
import Modal from './components/modal';

function App(){
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  return(
    <>
      <button onClick={handleButtonClick} >Abrir Modal</button>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <h1>Testando Modal</h1>
      </Modal>
    </>
  );
}

export default App;