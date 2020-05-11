import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ReactReduxFirebaseProvider, reduxFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux_store/reducers/rootReducer';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import firebaseConfig from './config/firebaseConfig'
import { Provider ,useSelector} from 'react-redux';
import firebase from 'firebase/app';
import { getFirebase ,isLoaded} from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reduxFirebase(firebaseConfig),
//     reactReduxFirebase(firebaseConfig)
//   )
// )




const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase),


  )
);



const rrfProps = {
  firebase,
  config: { enableLogging: false,useFirestoreForProfile:true, userProfile:'users' },
  dispatch: store.dispatch,
  createFirestoreInstance,

};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="center section"> Loading screen ... </div>;
  return children
}


  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <AuthIsLoaded>
            <App/>
          </AuthIsLoaded>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
  );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
