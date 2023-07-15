import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import TodoList from './components/TodoList'
import InputField from './components/InputField'
import {addTodo} from './store/todoSlice'

export type TodoItemType = {
    id: string;
    text: string;
    completed: boolean;
}

function App() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTodo({text}))
        setText('')
    }

    return (
        <div className="App">
            <InputField text={text} handleInput={setText} handleSubmit={addTask} /> 
            <TodoList />
        </div>
    )
}

export default App
