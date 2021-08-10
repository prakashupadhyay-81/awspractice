import React from 'react';
import './App.css'
import {fetchData} from './Public/AWSConfig'

function App() {
  const fetchDataFormDynamoDb = () => {
    fetchData('userid')
  }
  return (
    <>
      Hello World
      <button onClick={() => fetchDataFormDynamoDb()}> Fetch </button>
    </>
  );
}

export default App;
