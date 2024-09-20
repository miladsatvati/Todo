// import { useContext } from 'react';
// import { TodosContext } from '../contexts/TodoContextsProvider';
import UseTodosContext from '../lib/hooks'



function TodoList() {

  // const context = useContext(TodosContext)

  // if(!context) return null
  
  const {todo ,lineHandle, handledelet} = UseTodosContext()

  return (
    <ul>
      {todo.length === 0 ? (
        <li className="flex h-full items-center justify-center">
          <p className='text-2xl'>start by adding a todo</p>
        </li>
      ) : null}
      {todo.map((item, index) => (
        <li
          className="flex justify-between p-4 border-b-[1px] cursor-pointer"
          key={index}
          onClick={() => lineHandle(item.id)}
        >
          <span
            className={`${item.isComplete ? 'line-through text-[#ccc]' : ''}`}
          >
            {item.text}
          </span>
          <button onClick={() => handledelet(item.id)}>❌</button>
        </li> 
      ))}
    </ul>
  );
}

export default TodoList;
 