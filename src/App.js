import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import React,{Component} from 'react';
import Welcome from './Welcome'
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import ListRenderExample from './components/ListRenderExample';
// function App() {
//   return (
//     <div className="App">
//      <greet/>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           helloWorld
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }
function App(){
  return(
  
    <div className="App">
      <Greet name='allstate' shortName="ASLP">
        <p>I love AllSTATE!!</p></Greet>
    <Welcome name='Baglore' shortName='office'>
        <button>Clik</button>
      </Welcome>
      <Hello name='Employees' shortName='ALLSTATE'>world
      <button>Clik</button></Hello>
      <Message></Message>
      <Counter></Counter>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <EventBind></EventBind>
      <ParentComponent></ParentComponent>
      <UserGreeting></UserGreeting>
      <ListRenderExample></ListRenderExample>
    </div>
  );
}
// class App extends Component{
//   render(){
//   return(
  
//     <div className="App">
//       <Greet>I love ALSP!!</Greet>
//     </div>
//   );
// }
// }
export default App;
