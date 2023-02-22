import Counter from './components/Counter'
import { Provider } from 'react-redux'
import store from './state/Store'

function App() {
  return (
    <Provider store={store}>
      <div className='w-screen h-screen bg-slate-200'>
        <div className='mb-9 text-center sm:px-8 sm:text-left'>
          <h1 className='w-full'>React {'✨'} Redux</h1>
        </div>
        <div className='container mx-auto flex flex-col items-center'>
          <Counter />
        </div>
      </div>
    </Provider>
  )
}

export default App
