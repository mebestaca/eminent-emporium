import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication.component";
import { Route, Routes } from "react-router-dom";


const Shop = () => {
  return (
    <div>
      <h1>Shop Section</h1>
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Navigation/> } >
        <Route index element={ <Home/> } />
        <Route path='shop' element={ <Shop/> } />
        <Route path='authentication' element={ <Authentication/> } />
      </Route>
    </Routes>
  );
}

export default App;
