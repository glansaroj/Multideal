

import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { PersistGate } from 'redux-persist/integration/react'
import {persistor, store} from '../Redux/store/index'


export default function App({ Component, pageProps }) {
  return(
    <Provider store={store}>
       {/* <ChakraProvider>  */}
       <PersistGate loading={null} persistor={persistor}>
       <Component {...pageProps} />
       </PersistGate>
       {/* </ChakraProvider> */}
      
     </Provider> 
    )
}


