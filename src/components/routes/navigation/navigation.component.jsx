import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as AppLogo } from '../../../assets/crown.svg';
import './navigation.style.scss';

const Navigation = () => {
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