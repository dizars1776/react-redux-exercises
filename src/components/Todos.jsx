import { connect, useSelector } from 'react-redux'
import todosState from '../state/TodosState'

function Todos(props) {
  return (
    <div className='flex flex-col gap-y-8 items-center bg-indigo-300 py-6 px-24 rounded-3xl w-full sm:max-w-xl'>
      <div>
        <h2>ToDos</h2>
      </div>
      <div className='w-full flex flex-col items-center'>
        <form
          onSubmit={props.onAdd}
          className='flex flex-row items-center w-full'
        >
          <label htmlFor='todo' name='todo' className='w-full mr-4'>
            <input name='todo' className='rounded-md w-full px-1' />
          </label>
          <button
            type='submit'
            className='rounded-full bg-cyan-800 hover:bg-cyan-400 text-white hover:text-black px-4 py-1'
          >
            Add
          </button>
        </form>
      </div>
      <div className='w-full'>
        <ul className='text-red-800 font-semibold w-full flex flex-col gap-y-2'>
          {props.todos &&
            props.todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <form
                    onSubmit={props.onEdit}
                    className='w-full flex flex-row'
                  >
                    {todo.completed ? (
                      <>
                        <label
                          htmlFor='todo-edit'
                          name='todo-edit'
                          className='w-full mr-4'
                        >
                          <input
                            name={`todo-edit-${todo.id}`}
                            id={todo.id}
                            disabled
                            defaultValue={todo.title}
                            className='text-green-700 rounded-md w-full px-1 line-through italic'
                          />
                        </label>
                        <div className='w-6' />
                        <button
                          id={todo.id}
                          type='button'
                          className='ml-2'
                          onClick={props.onRemove}
                          value='delete'
                        >
                          {'❌'}
                        </button>
                      </>
                    ) : (
                      <>
                        <label
                          htmlFor='todo-edit'
                          name='todo-edit'
                          className='w-full mr-4'
                        >
                          <input
                            name={`todo-edit-${todo.id}`}
                            id={todo.id}
                            disabled
                            defaultValue={todo.title}
                            className='rounded-md w-full px-1'
                          />
                        </label>
                        <button
                          id={todo.id}
                          onClick={props.onEdit}
                          type='button'
                          value='done'
                        >
                          {'✅'}
                        </button>
                        <button
                          id={todo.id}
                          type='button'
                          className='ml-2'
                          onClick={props.onRemove}
                          value='delete'
                        >
                          {'❌'}
                        </button>
                      </>
                    )}
                  </form>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  let id = 0
  return {
    onAdd: (e) => {
      e.preventDefault()
      if (e.target.elements.todo.value !== '') {
        dispatch(
          todosState.actions.add({
            id: id,
            title: e.target.elements.todo.value,
            completed: false,
          })
        )
      }
      e.target.elements.todo.value = ''
      id += 1
    },
    onEdit: (e) => {
      e.preventDefault()
      if (e.target.value === 'done') {
        dispatch(
          todosState.actions.edit({
            id: +e.target.id,
            data: { completed: true },
          })
        )
      }
    },
    onRemove: (e) => {
      e.preventDefault()
      dispatch(todosState.actions.remove(+e.target.id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
