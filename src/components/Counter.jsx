function Counter() {
  return (
    <div className='flex flex-col gap-y-8 items-center bg-indigo-300 py-6 px-24 rounded-3xl w-full max-w-xl'>
      <div>
        <h2>Counter</h2>
      </div>
      <div>
        <p>0</p>
      </div>
      <div className='flex flex-row justify-evenly gap-x-1 sm:gap-x-4'>
        <button
          // onClick={increment}
          className='rounded-full bg-cyan-800 hover:bg-cyan-400 text-white hover:text-black px-4 py-1'
        >
          Increment
        </button>
        <button
          // onClick={decrement}
          className='rounded-full bg-cyan-800 hover:bg-cyan-400 text-white hover:text-black px-4 py-1'
        >
          Decrement
        </button>
        <button
          // onClick={reset}
          className='rounded-full bg-cyan-800 hover:bg-cyan-400 text-white hover:text-black px-4 py-1'
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter
