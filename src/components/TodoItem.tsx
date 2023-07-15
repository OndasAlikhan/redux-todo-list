import { TodoItemType } from '../App'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodoComplete } from '../store/todoSlice'


type PropsType = { 
    todo: TodoItemType,
}

const TodoItem = ({ todo }: PropsType) => {
    const dispatch = useDispatch()
    return (
        <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodoComplete?.({id: todo.id}))} />
            <span>{todo.text}</span>
            <span className="delete" onClick={() => dispatch(removeTodo?.({id: todo.id}))}>&times;</span>
        </li>
    )
}


export default TodoItem
