import React from "react";
import Person from "./Person";
function ListRenderExample(){
    const names=['raj','bruce','theon']
   const nameList=names.map((name,index) => <li key={index}>{index} {name}</li>)
   const personsList=[
    {
        id:1,
        name:'lunjeonard',
        age:54,
        skill:'FSE'
    },
       {
           id: 2,
           name: 'Mark',
           age: 28,
           skill: 'React'
       }, {
           id: 3,
           name: 'Mary',
           age: 23,
           skill: 'Vue'
       }
   ]
   const personList=personsList.map((person,index)=>(<Person key={index} person={person}></Person>))
    return(
        <div>{names[1]} 
        {names.map(res=>res+" good ")}
        <p>{names.map(res=>res+" ")}</p>
        <p>{nameList}</p>
            <h2>{names[0]}</h2>
            <p>{personsList.map(person=>person.name)}</p>
            <p>{personList}</p>
            </div>
       
    )
}
export default ListRenderExample ;