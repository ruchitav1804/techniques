import React from 'react';
import './App.css';
import PlayfairCipher from './PlayfairCipher';
import HillCipher from './HillCipher';

function App() {
  return (
    <div className="App">
      <h1>Cipher Encryption/Decryption</h1>
      <PlayfairCipher />
      <HillCipher />
    </div>
  );
}

export default App;
