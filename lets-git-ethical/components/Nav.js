import React from 'react';
import PropTypes from 'prop-types';

export default function Nav(props) {
    const logged_out_nav = (
        <ul>
        <li onClick={() => props.display_form('login')}>login</li>
        <li onClick={() => props.display_form('signup')}>signup</li>
        </ul>
    );

    const logged_in_nav = (
        <header className="w-5/6 m-auto">
            <nav className="w-full border border-black">
            <ul>
                <li onClick={props.handle_logout}>logout</li>
                <li className="w-1/5 p-3 text-center border border-black"><a href="">Home</a></li>
                <li className="w-1/5 p-3 text-center border border-black"><a href="../pages/dilemmas">Dilemmas</a></li>
                <li className="w-1/5 p-3 text-center border border-black"><a href="">Messages</a></li>
                <li className="w-1/5 p-3 text-center border border-black"><a href="">Friends</a></li>
                <li className="w-1/5 p-3 text-center border border-black"><a href="">About Us</a></li>
            </ul>
        </nav>
    </header>
    );
    return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
    }

    Nav.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    display_form: PropTypes.func.isRequired,
    handle_logout: PropTypes.func.isRequired
};

