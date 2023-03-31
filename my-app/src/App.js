import logo from './logo.svg';
import './App.css';

import Item from './MyItem';



// class Item extends React.component{
// render(){
//   return(
//     <h1>hello world</h1>
//   )
// }

// }



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Item name="john"/>
        <Item name="darshan"/>

        <Item name="vijay"/>

        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
