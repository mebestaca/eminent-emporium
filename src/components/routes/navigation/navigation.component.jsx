import { NavigationContainer, LogoContainer, NavLink, NavLinks } from './navigation.style.jsx';
import { ReactComponent as AppLogo } from '../../../assets/crown.svg';
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
// import { signOutUser } from "../../../utils/firebase/firebase.utils";
// import { setCurrentUser } from '../../../store/user/user.action.js';
import { selectCartIsOpen } from '../../../store/cart/cart.selector.js';
import { selectCurrentUser } from '../../../store/user/user.selector.js';
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { useDispatch } from 'react-redux';
import { signOutStart } from '../../../store/user/user.action.js';

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectCartIsOpen);

    const signOutHandler = async () => {
        // await signOutUser();
        // setCurrentUser(null);
        dispatch(signOutStart());
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <AppLogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='shop'>
                        Shop
                    </NavLink>
                    {
                        currentUser ? 
                        (<NavLink as='span' onClick={ signOutHandler }>
                            Sign Out
                        </NavLink>) 
                        : 
                        (<NavLink to='authentication'>
                            Sign In
                        </NavLink>)
                    }
                    <CartIcon/>
                </NavLinks>
                { isCartOpen && <CartDropdown/> }
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;