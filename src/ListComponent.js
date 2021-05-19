import React, { useState } from "react";
export default function ListComponent(props){
    const [editState, setEdit] = useState(false);
    const [name, setName] = useState("")

    function handelChange(event){
        setName(event.target.value);
    }

    function handelSubmit(event){
        event.preventDefault();
        props.editTask(props.id, name);
        setName("");
        setEdit(false);
    }

    const modeLecture = (
        <>
        <input type="checkbox" defaultChecked={props.checked}></input>
        <span>{props.name} <button onClick={()=>setEdit(true)}> modifier</button> <button onClick={()=>props.deleteTask(props.id)}>Supprimer</button></span>
        </>
    )
    const modeEdit = (
        <form onSubmit={handelSubmit}>
            <label htmlFor={props.name}>{props.name}</label>
            <input type="text" value={name} onChange={handelChange}></input>
            <span><button>valider</button> <button onClick={()=>setEdit(false)}>annuler</button></span>
        </form>
    )

    return (
    <>
        <li id={props.id}>
            {editState ? modeEdit : modeLecture}
        </li>
    </>
    )
}
