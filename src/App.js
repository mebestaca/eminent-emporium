import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./components/shop/shop.component";
import { Route, Routes } from "react-router-dom";

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