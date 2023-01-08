import React from 'react';

function Nav() {
    return (
        <header>
            <nav className="border">
                <h2 className="font-link">
                    Task Force: Legion
                </h2>
                <ul className="nav">
                    <li className="mx-2">
                        <a href="/">
                           <button className="btn-67"> Characters </button>
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="/">
                            <button className="btn-67"> Gallery </button>
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="/">
                            <button className="btn-67"> Chapter List </button>
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="/">
                            <button className="btn-67"> Side Stories </button>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default Nav;