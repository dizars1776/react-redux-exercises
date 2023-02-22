import { connect } from "react-redux"
import counterState from "../state/CounterState"

function Counter(props) {
  return (
    <div className='flex flex-col gap-y-8 items-center bg-indigo-300 py-6 px-24 rounded-3xl w-full max-w-xl'>
      <div>
        <h2>Counter</h2>
      </div>
      <div>
        <p>{props.counter}</p>
      </div>
      <div className='flex flex-row justify-evenly gap-x-1 sm:gap-x-4'>
        <button
          onClick={props.onIncrement}
          className='rounded-full bg-cyan-800 hover:bg-cyan-400 text-white hover:text-black px-4 py-1'
        >
          Increment
        </button>
        <button
          onClick={props.onDecrement}
          className='rounded-full bg-cyan-800 hover:bg-cyan-400 text-white hover:text-black px-4 py-1'
        >
          Decrement
        </button>
        <button
          onClick={props.onReset}
          className='rounded-full bg-cyan-800 hover:bg-cyan-400 text-white hover:text-black px-4 py-1'
        >
          Reset
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(counterState.actions.increment()),
    onDecrement: () => dispatch(counterState.actions.decrement()),
    onReset: () => dispatch(counterState.actions.reset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

