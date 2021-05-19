import ListComponent from "./ListComponent";
import AddForms from "./AddForms";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {
    const url = "http://localhost:8000/api/tasks/";
    const [tasks, setTasks] = useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [message, setMessage] = useState(null);
    useEffect(()=>getTasks(),[])

    function getTasks(){
        axios.get(url)
            .then(response=>{
                setTasks(response.data);
                setLoaded(true);
            })
            .catch(error=>{
                setError(error);
                setLoaded(true);
            })
    }
    
    function ajouterTache(x){
        const content = {name: x, completed: 0};
        const header = {headers: {'Content-Type':'text/plain'}};
        axios.post(url+"new/", content, header)
            .then((response)=>{
                console.log("tache crée");
                setMessage('Tâche crée');
                getTasks();
            })
            .catch((error)=>{
                console.log("tache echouer");
                setMessage('Tâche échouer');
            })
        ;
    }

    function effacerTache(todoId){
        const header = {headers:{'Content-Type':'text/plain', 'Access-Control-Allow-Origin':'*'}};
        const content= {};
        axios.delete(url + todoId + "/delete/",content,header)
            .then((reponse)=>{
                console.log("Tache suprimée");
                setMessage("Tâche supprimée");
                const newTasks = tasks.filter(task => task.id !== todoId);
                setTasks(newTasks);
            })
            .catch((error)=>{
                console.log("erreur lors de la suppresion");
                setMessage("something went wrong");
            })
    }

    function editerTaches(todoId, x){
        const newTasks = tasks.map(tasks => {
            if (todoId === tasks.id){
                return {...tasks, name: x}
            }
            return tasks
        });
        setTasks(newTasks);
    }

    if(!loaded){
        return(
            <div>Loading</div>
        )
    }
    else if(error){
        return(
            <div>{error.message}</div>
        )
    }
    else{
        const composantArray = tasks.map(tache =>
            <ListComponent 
                name={tache.name} 
                checked={tache.completed} 
                id={tache.id} 
                key={tache.id} 
                deleteTask={effacerTache} 
                editTask={editerTaches} 
            />
        );
        const nbElements = composantArray.length;
        return(
            <div>
              <header>
                  <h1>
                      Todo - List
                  </h1>
              </header>
              <div>
                  <AddForms addTask={ajouterTache} />
                  <div>{message}</div>
                  <div>
                      <p>
                      il reste : {nbElements} tâches
                      </p>
                  </div>
                  <div>
                      <ul>
                        {composantArray}
                      </ul>
                  </div>
              </div>
          </div>
        )
    }
}

export default App;
