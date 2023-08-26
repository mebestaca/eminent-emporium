import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as AppLogo } from '../../../assets/crown.svg';
import { UserContext } from "../../../contexts/user.context";
import './navigation.style.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);
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
                    <Link className="nav-link" to='authentication'>
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;