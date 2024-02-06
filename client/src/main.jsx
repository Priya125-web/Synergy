import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { store, persistor } from './redux/Store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ThemeProvider from './Components/ThemeProvider.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
    <BrowserRouter>
    <ScrollToTop/>
    <App />
    </BrowserRouter>
    </ThemeProvider>
    </Provider>
    </PersistGate>
  </React.StrictMode>,
)
