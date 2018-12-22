import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';

// import RegisterForm from './registrationForm/RegisterForm';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<RegisterForm />,document.getElementById('root'));

ReactDOM.render(<App/>,document.getElementById('root'));

serviceWorker.unregister();