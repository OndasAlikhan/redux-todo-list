import React from 'react'

type PropsType = {
    text: string;
    handleInput: (arg0: string) => void;
    handleSubmit: () => void;
}

const onPressEnter = (event: React.KeyboardEvent, handler: () => void ) => 
    event.key === 'Enter' && handler()

const InputField = ({text, handleInput, handleSubmit}: PropsType) => {
    return (
        <label>
            <input type="text" value={text} onChange={e => handleInput(e.target.value)} onKeyDown={e => onPressEnter(e, handleSubmit)} />
            <button onClick={handleSubmit}>Add Todo</button>
        </label>
    )
}

export default InputField
