import React from 'react'
import { TodoContext, TodoContextType } from '../context/TodoContext';
import { Todo } from '../models/todoModel'


const TodoList: React.FC = () => { //vi måste definera genom <Props> att vi ska använda det för att items ska fungera 
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