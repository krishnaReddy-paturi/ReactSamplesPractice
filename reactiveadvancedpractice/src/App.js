import logo from './logo.svg';
import './App.css';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureClassComponent from './components/PureClassComponent';
import RegularClassComponent from './components/RegularClassComponent';
import ParentClassComponent from './components/ParentClassComponent';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRparentInput from './components/FRparentInput';
import PortalDemo from './components/PortalDemo';
import ShortName from './components/ShortName';
import ErrorBoundary from './components/ErrorBoundary';
function App() {
  return (
    <div className="App">
       
       <ErrorBoundary><ShortName shortName='krishna'></ShortName></ErrorBoundary>
      <ErrorBoundary><ShortName shortName='krish'></ShortName></ErrorBoundary>
      <ErrorBoundary><ShortName shortName='allstate'></ShortName></ErrorBoundary> 
       
      <FragmentDemo></FragmentDemo>
      <Table></Table>
      {/* <PureClassComponent></PureClassComponent> */}
      <ParentClassComponent></ParentClassComponent>
      <RefsDemo></RefsDemo>
      <FocusInput></FocusInput>
      <FRparentInput></FRparentInput>
      <PortalDemo></PortalDemo>
      
    </div>
  );
}

export default App;
