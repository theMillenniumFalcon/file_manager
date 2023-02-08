import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { LogBox } from 'react-native'
import { Provider } from 'react-redux'

import Main from './screens/Main'
import { store } from './store'

LogBox.ignoreLogs(['componentWillMount', 'componentWillReceiveProps'])

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Main />
      </Provider>
    </SafeAreaProvider>
  )
}

export default App