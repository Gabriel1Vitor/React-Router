# React-Router

Um exemplo de como criar rotas no React sem usar frameworks externos. 

### Criando sistema de rodas

Crie uma pasta no src e cole o seguinte código.

#### src/comp/Router.jsx
  ```
  import { useEffect, useState } from "react";

const Router = ({ path, component }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("navigate", onLocationChange);
    return () => window.removeEventListener("navigate", onLocationChange);
  }, []);
  return currentPath === path ? component() : null;
};

export default Router;
  ```
### Criando uma pagina
Recomendo ser em uma nova pasta dentro do src.
#### src/pages/pagina.jsx
  ```
 import React from "react";

const Home = () => {
  return (<>
  <h1 class="cor">Home inicial</h1>
  <a href="http://localhost:5173/"> Home </a>    
  </>)};

export default Home;
  ```

Una-os no App.jsx  

### src/App.jsx
  ```
import React from "react";
import './App.css'
import Route from "./comp/Route";
import Home from "./pages/pagina";


const App = () => {
  return (
    <>
      <Route path="/" component={Home} />    
    </>
  )};

export default App;
  ```

