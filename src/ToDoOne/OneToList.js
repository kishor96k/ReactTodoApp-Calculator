import React from 'react';

const ToList = (props) => {
    return (
        <div>
            <li className='list-item'>
                {props.items}
                <span className='icons'>
                <i class="fa-solid fa-trash icon-delete" 
                onClick={(e)=>{
                    props.deleteItem(props.index)
                }}></i>
                </span>
            </li>
        </div>
    );
};

export default ToList;