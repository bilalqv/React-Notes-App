import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

function Note( {id, text, date, handleDeleteNote} ) {

    // const handleClick = () =>{
    //     handleDeleteNote(id);
    // }
    

    return (
        <div className='note'>
            <span>{text} </span>
            <div className='note-footer'>
                <small>{date}</small>
                
                {/* <button onClick = {handleClick} >Del</button> */}
                <MdDeleteForever className='delete-icon' onClick = {()=> handleDeleteNote(id)} size='1.3rem'  />
            </div>
        </div>
    )
}

export default Note
