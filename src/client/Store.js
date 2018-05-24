import { combineReducers, createStore } from 'redux'
import cartReducer, { initialState as cartReducerInitialState } from './reducers/CartReducer'
import productsReducer, { initialState as productsReducerInitialState } from './reducers/ProductsReducer'

const store = createStore(
  combineReducers({cartReducer, productsReducer}),
  {
    cartReducer: {...cartReducerInitialState},
    productsReducer: {...productsReducerInitialState}
  }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
