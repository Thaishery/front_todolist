import React, { useState } from 'react';

export default function AddForms(props){
    
    const [name, setName] = useState('');
    function handelSubmit (event){
        event.preventDefault();
        props.addTask(name);
        setName('');
    }

    function handelChange(event){
        setName(event.target.value)
    }

    return(
        <form onSubmit={handelSubmit}>
            <label htmlFor="tache">Ajouter une tache:</label><br/>
            <input type="text" name="tache" id="tache" value={name} onChange={handelChange}></input>
            <button>valider la tache</button>
        </form>
    );
}