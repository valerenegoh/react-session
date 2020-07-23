import React from 'react';
import './Header.css';

/* The ideal is to create this component as a function 
and not as a class, as it is a simple component, 
it does not have a State. */
class Header extends React.Component {
    render() {
        return (
            <header className="app-header">
                <h1>React Session</h1>
            </header>
        )
    }
}

export default Header;