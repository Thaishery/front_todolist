import React from 'react';
class AddForm2 extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name: "",
        };
        this.handelChange = this.handelChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }

    handelSubmit(event){
        event.preventDefault();
        this.props.addTask(this.state.name);
        this.setState({name: ""})
    }
    
    handelChange(event){
        this.setState({name: event.target.value});
    }

    render(){
        return(
            <form onSubmit={this.handelSubmit}>
            <label htmlFor="tache">Ajouter une tache:</label><br/>
            <input type="text" name="tache" id="taches" value={this.state.name} onChange={this.handelChange}></input>
            <button>valider la tache</button>
        </form>
        );
    }

}
export default AddForm2;