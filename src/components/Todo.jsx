import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

export default function Todo(props) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>{props.title}</div>
            <button onClick={() => props.handleDelete(props.id)} className='btn' > <MdDelete size={25} color='red' /></button>
        </div>
    )
}
