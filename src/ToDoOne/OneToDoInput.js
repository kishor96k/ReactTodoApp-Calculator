import React, { useState } from 'react';

const ToDoInput = (props) => {

    const [inputtext, setText] = useState('');

    return (
        <div>
            <div className='input-container'>
                <input type='text' className='input-box-todo' placeholder='Enter Your ToDo' value={inputtext}
                    onChange={(event) => { setText(event.target.value) }}>
                </input>
                <button onClick={() => {
                    props.addList(inputtext)
                    setText('')
                }} className='add-btn'
                >
                    +
                </button>
            </div>

        </div>
    );
};

export default ToDoInput;