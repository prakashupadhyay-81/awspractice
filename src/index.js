import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// STARTS HERE
import * as AWS from 'aws-sdk'

const configuration = {
  region: 'Ohio',
  secretAccessKey: 'KMf1SNphL3AfAEwkg45kiV7wA0S9XciZ8iblBRzo',
  accessKeyId: 'AKIAV3IZ7OVN3VYX3UD7'
}

AWS.config.update(configuration)
// ENDS HERE

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);