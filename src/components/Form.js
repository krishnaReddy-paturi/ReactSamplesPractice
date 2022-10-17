import React, { Component } from "react";

class Form extends Component{
    constructor(props)
    {super(props)
        this.state={
name:'',
comments:'',
topic:''
        }
    }
    handleNameChange=(param)=> {
    this.setState({name:param.target.value})
   } 
   handleCommentChange=(event)=>{
    this.setState({
       comments:event.target.value})
    }
    handleTopicChange=(event)=>{
this.setState({
    topic:event.target.value
})
    }
    handleSubmission=(event)=>{
       alert(`${this.state.name} ${this.state.comments} ${this.state.topic}`)
       event.preventDefault()
    }

    render(){
        const {name,comments,topic} =this.state
    return(
        <form onSubmit={this.handleSubmission}>
        <div>
            
            <label>name</label>
            <input type='text' value={name} onChange={this.handleNameChange}></input>
        </div>
        <div>
            <label>comments</label>
            <textarea value={comments} onChange={this.handleCommentChange}></textarea>
        </div>
        <div>
            <label>topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Anguar</option>
                <option value="vue">Vue.js</option>
            </select>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
        </form>
    )
    }
}

export default Form;