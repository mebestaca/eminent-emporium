import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as AppLogo } from '../../../assets/crown.svg';
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import './navigation.style.scss';
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { CartDropdownContext } from "../../../contexts/cart-dropdown.context";

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { dropdownState, toggleDropdown} = useContext(CartDropdownContext);

    const dropdownToggler = (event) => {
        toggleDropdown(!dropdownState);
    }

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="nav-logo-container" to='/'>
                    <AppLogo />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='shop'>
                        Shop
                    </Link>
                    {
                        currentUser ? 
                        (<span className="nav-link" onClick={ signOutHandler }>
                            Sign Out
                        </span>) 
                        : 
                        (<Link className="nav-link" to='authentication'>
                            Sign In
                        </Link>)
                    }
                    <CartIcon onClick={dropdownToggler}/>
                </div>
                {
                    dropdownState ? <CartDropdown/> : null
                }
            </div>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;