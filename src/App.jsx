import Counter from './components/Counter'
import { Provider } from 'react-redux'
import store from './state/Store'
import NavBar from './components/NavBar'
import Todos from './components/Todos'

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <div className='container mx-auto flex flex-col items-center gap-y-9'>
        <Counter />
        <Todos />
      </div>
    </Provider>
  )
}

export default App
