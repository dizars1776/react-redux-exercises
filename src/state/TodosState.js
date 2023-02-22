import { createSlice } from '@reduxjs/toolkit'

const todosState = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
    },
    remove: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
    edit: (state, action) => {
      const { id, data } = action.payload
      const todo = state.find((todo) => todo.id === id)

      Object.keys(data).forEach((key) => {
        todo[key] = data[key]
      })
    },
  },
})

export default todosState
