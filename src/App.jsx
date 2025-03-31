
import React from "react";
import './App.css'
import Route from "./comp/Route";
import Home from "./pages/pagina";
import About from "./pages/pagina-2";
import Contacts from "./pages/pagina-3";


const App = () => {
  return (
    <>
         
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
      
    </>
  );
};

export default App;