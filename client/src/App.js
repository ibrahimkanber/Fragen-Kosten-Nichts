import './App.css';

import { Route} from 'react-router-dom';
import { BrowserRouter } from "react-router-dom"
import {Main} from "./pages/Main"
function App(props) {
  console.log(props)
  return (
    <BrowserRouter>
      <Route render={(location)=>{
        return(
          <Main location={location}/>
        )
      }}/>
    </BrowserRouter>
  );
}

export default App;
