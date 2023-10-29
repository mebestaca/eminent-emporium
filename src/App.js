import Home from "./components/routes/home/home.component";
import Navigation from "./components/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component"; 
import Checkout from "./components/checkout/checkout.component";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.reducer";

const App = () => {
  const dispatch  = useDispatch();

  useEffect(() =>{
    
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
            createUserDocumentFromAuth(user);
        }
        const pickedUser = user && (({ accessToken, email }) => ({ accessToken, email }))(user);
        dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={ <Navigation/> } >
        <Route index element={ <Home/> } />
        <Route path='shop/*' element={ <Shop/> } />
        <Route path='authentication' element={ <Authentication/> } />
        <Route path='checkout' element={ <Checkout/> } />
      </Route>
    </Routes>
  );
}

export default App;