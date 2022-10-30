import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import React from 'react';
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
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import UpdateLifeCycleA from './components/UpdateLifeCycleA';
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
      <Form></Form>
      <h1 className='error'>error</h1>
      <h1 className={styles.success}>success</h1>
      <StyleSheet primary={false} ></StyleSheet>
      <Inline></Inline>
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
      <LifeCycleA></LifeCycleA>
      <UpdateLifeCycleA></UpdateLifeCycleA>
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
