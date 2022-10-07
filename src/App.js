


import React from 'react'
import Navbar from './component/Navbar';
import News from './component/News';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



const App =()=> {
 
    return (
      <div>
        <Router>
        <Navbar/>
       
        
        <Switch>
          <Route exact path="/"><News  key="general" pageSize={30} country='in' category='general'/> </Route>
          <Route exact path="/business"><News   key="business" pageSize={30} country='in' category='business'/> </Route>
          <Route exact path="/entertainment"><News  key="entertainment" pageSize={30} country='in' category='entertainment'/> </Route>
          <Route exact path="/health"><News   key="health" pageSize={30} country='in' category='health'/> </Route>
          <Route exact path="/science"><News   key="science" pageSize={30} country='in' category='science'/> </Route>
          <Route exact path="/sports"><News   key="sports" pageSize={30} country='in' category='sports'/> </Route>
          <Route exact path="/technology"><News   key="technology" pageSize={30} country='in' category='technology'/> </Route>
          <Route exact  path="/general"><News   key="general " pageSize={30} country='in' category='general'/> </Route>
</Switch>
        </Router>
        
      </div>
    )
  
}
export default App;