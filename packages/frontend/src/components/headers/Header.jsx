import React from 'react'
import './Header.css'
import PropTypes from 'prop-types';
import Navbar from '../navbar/Navbar';

const Header = ({ nombre, carrito, filtrarProductos }) => {
    const isLoggedIn = Boolean(nombre);
    return (
        <header className="header">
            {isLoggedIn ? (
                <span>{nombre} 20% OFF si sos estudiante! 🤓📚</span>
            ) : (
                <span>20% OFF si sos estudiante! 🤓📚</span>
            )}
            <Navbar carrito={carrito} filtrarProductos={filtrarProductos} />
        </header>
    );
};

Header.propTypes = {
    nombre: PropTypes.string
};


export default Header
