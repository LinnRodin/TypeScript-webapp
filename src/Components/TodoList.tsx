import React from 'react'
import { TodoContext, TodoContextType } from '../Contexts/TodoContext';
import { Todo } from '../Models/todoModel'


const TodoList: React.FC = () => { 
  const { todos } = React.useContext(TodoContext) as TodoContextType;

  return (
    <div className="">
        <div className="">
            {
                todos.map((item: Todo) => (<div key={item.id} className="mb-3">{item.text} ({ item.isCompleted ? "Completed": "Not Completed" })</div>))
            }
        </div>
    </div>
  )
}

export default TodoList;