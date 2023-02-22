import { createSlice } from '@reduxjs/toolkit'

const counterState = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state += 1,
    decrement: state => state -= 1,
    reset: state => 0
  },
})

export default counterState

