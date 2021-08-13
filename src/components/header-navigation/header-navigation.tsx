import React,{ FC } from 'react';
import './header-navigation.scss'
import { Link } from "react-router-dom";

const HeaderNavigation : FC = () => {
    return (
        <div className="navigation__block">
            <div >
                <button>
                    <Link to = "/">To Do</Link>
                </button>
            </div>
            <div>
                <button>
                    <Link to = "/weather">Weather</Link>
                </button>
            </div>
        </div>

    );
};

export default HeaderNavigation;