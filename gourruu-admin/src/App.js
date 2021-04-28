import './App.css';
import Route from './Route/Route';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Store/Reducers/RootReducer';
const store=createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

export default App;