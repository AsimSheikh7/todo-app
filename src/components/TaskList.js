import React from 'react'
import Todos from './Todos';

const TaskList = ({todos,setTodos}) => {
  return (
    <ul className='todos-list'>
      {todos.map(todo =>(
        <Todos setTodos={setTodos} todos={todos} todo={todo} key={todo.id} text ={todo.text}/>
      ))
      }
    </ul>

  )
} 

export default TaskList;