import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux'; 
import './index.css';
// import MainComponent from './components/MainComponent';
import MainComponent from './App';

import registerServiceWorker from './registerServiceWorker';
//import { rootReducer } from './store/reducers';


ReactDOM.render(<MainComponent />, document.getElementById('root'));


// const WrappedMainComponent = connect(putStateToProps, putActionToProps)(MainComponent);

// ReactDOM.render(<Provider store = {store}>
//     <WrappedMainComponent/>
//     </Provider>, document.getElementById('root'));

 registerServiceWorker();