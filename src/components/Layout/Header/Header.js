import React, { Fragment, useState } from 'react';

import { faUser, faSignOutAlt, faBuilding, faHeadset, faSearch  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = (props) => {

    const [showDropdown, setShowDropdown] = useState(false);

    const onProfileClick = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <Fragment>
            <header className="header">
                <div className="right-menu">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="search" placeholder="Search" />
                </div>

                <div className="avatar" onClick={onProfileClick} >
                    <img src={require("../../../assets/profile.png")} alt="profile" className="profile" />
                    <div className={`profile-overlay ${ !showDropdown ? 'hide' : ''}`}>
                        <div className="item"><Link to="profile"><FontAwesomeIcon icon={faUser} />Profile</Link></div>
                        <div className="item"><FontAwesomeIcon icon={faBuilding} />Organization</div>
                        <div className="item"><FontAwesomeIcon icon={faHeadset} />Support</div>
                        <div className="item"><FontAwesomeIcon icon={faSignOutAlt} />Logout</div>
                    </div>
                </div>

            </header>
        </Fragment>
    );
}

export default Header;