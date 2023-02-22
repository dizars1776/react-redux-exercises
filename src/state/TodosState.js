const defaultState = []

const ADD = 'TODOS@ADD'
const EDIT = 'TODOS@EDIT'
const REMOVE = 'TODOS@REMOVE'

function addTodos(todo) {
  return {
    type: ADD,
    payload: todo,
  }
}

function editTodos(id, data) {
  return {
    type: EDIT,
    payload: {id, data},
  }
}

function removeTodos(id) {
  return {
    type: REMOVE,
    payload: id
  }
}

function todosReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD: {
      return [...state, action.payload]
    }
    case EDIT: {
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, ...action.payload.data}
        }
        return todo
      })
    }
    case REMOVE: {
      return state.filter(todo => todo.id !== action.payload)
    }
    default: {
      return state
    }
  }
}

export { addTodos, removeTodos, editTodos, todosReducer }
